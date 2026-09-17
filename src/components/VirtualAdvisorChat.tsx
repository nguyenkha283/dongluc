import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Car, 
  FileText,
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { PROJECT_INFO } from '../data/mockData';
import { DongLucLogo } from './DongLucLogo';
import { getGroundedAdvisorAnswer } from '../data/projectAdvisorKnowledge';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  source?: 'gemini' | 'grounded_rules';
}

interface VirtualAdvisorChatProps {
  onOpenConsultation: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const VirtualAdvisorChat: React.FC<VirtualAdvisorChatProps> = ({ 
  onOpenConsultation,
  isOpen,
  onClose 
}) => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Kính chào Quý khách! Em là Trợ lý AI chính thức của dự án **Động Lực Tower** (130 Hạ Đình, Thanh Xuân).\n\nEm được thiết lập để **chỉ cung cấp thông tin chuẩn xác 100%** từ Chủ đầu tư Động Lực Group & đơn vị phát triển Cen Land đã công bố trên website. Quý khách muốn tìm hiểu thông tin nào dưới đây ạ?',
      time: 'Vừa xong',
      source: 'grounded_rules'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const quickQuestionTopics = [
    { label: '💰 Giá 7x tr/m² & VAT', query: 'Giá bán Động Lực Tower bao nhiêu, đã có thuế VAT chưa?' },
    { label: '🏢 Chủ đầu tư & Cen Land', query: 'Chủ đầu tư Động Lực Tower là ai và đơn vị phân phối là ai?' },
    { label: '📜 Sổ hồng & Pháp lý', query: 'Pháp lý dự án thế nào, có sổ hồng lâu dài không?' },
    { label: '🛋️ Không gian sáng tạo', query: 'Chiến dịch Không Gian Sáng Tạo bàn giao thô gồm những gì?' },
    { label: '📐 Căn 2PN & 3PN', query: 'Diện tích và thiết kế căn hộ 2 phòng ngủ và 3 phòng ngủ?' },
    { label: '🎁 4 Gói chiết khấu', query: 'Chính sách bán hàng và các gói chiết khấu hiện tại ra sao?' },
    { label: '🏦 Ngân hàng hỗ trợ 0%', query: 'Chính sách vay ngân hàng lãi suất 0% như thế nào?' },
    { label: '🚗 3 Tầng hầm & Đỗ xe', query: 'Dự án có mấy tầng hầm, chỗ đỗ xe ô tô thế nào?' },
    { label: '🏗️ Tiến độ & Bàn giao', query: 'Tiến độ thi công thực tế đến đâu và khi nào bàn giao nhà?' },
    { label: '📍 Vị trí & Hồ Hạ Đình', query: 'Địa chỉ dự án ở đâu và khoảng cách tới Hồ Hạ Đình?' },
    { label: '🚗 Xe đón xem thực tế', query: 'Tôi muốn đăng ký xe đưa đón tham quan thực tế dự án' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text) return;

    const userTime = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      time: userTime
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Cancel previous inflight request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    let finalReply = '';
    let replySource: 'gemini' | 'grounded_rules' = 'grounded_rules';

    try {
      // Fast fetch to backend with 3-second timeout
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const historyPayload = messages.slice(-4).map((m) => ({
        sender: m.sender,
        text: m.text
      }));

      const res = await fetch('/api/advisor-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history: historyPayload }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          finalReply = data.reply;
          replySource = data.source === 'gemini' ? 'gemini' : 'grounded_rules';
        }
      }
    } catch {
      // On network timeout or error, rely on instant client-side grounded knowledge
    }

    if (!finalReply) {
      finalReply = getGroundedAdvisorAnswer(text);
      replySource = 'grounded_rules';
    }

    const botTime = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    const botMsg: Message = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: finalReply,
      time: botTime,
      source: replySource
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsTyping(false);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: 'Em đã đặt lại cuộc trò chuyện. Quý khách vui lòng chọn câu hỏi gợi ý hoặc nhập câu hỏi cần tìm hiểu về dự án Động Lực Tower ạ!',
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        source: 'grounded_rules'
      }
    ]);
  };

  // Render markdown bold and line breaks safely
  const renderFormattedText = (raw: string) => {
    return raw.split('\n').map((line, idx) => {
      // Split by ** for bold
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={idx} className="block leading-relaxed min-h-[1.1rem]">
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-bold text-amber-300">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          })}
        </span>
      );
    });
  };

  if (!isOpen) return null;

  return (
    <div 
      id="virtual-advisor-modal"
      className="fixed bottom-18 sm:bottom-6 right-3 sm:right-6 left-3 sm:left-auto sm:w-[420px] z-50 bg-[#030d22] rounded-3xl shadow-2xl border-2 border-amber-400/40 overflow-hidden flex flex-col h-[560px] max-h-[78vh] sm:max-h-[85vh] animate-in slide-in-from-bottom-5 duration-200 text-white backdrop-blur-xl"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#04102c] via-[#071946] to-[#04102c] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-sky-400/30">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-slate-900 border border-amber-400/50 p-1 flex items-center justify-center relative shadow-md shadow-amber-500/20 shrink-0">
            <DongLucLogo variant="symbol" theme="gold" className="w-full h-full" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950" />
          </div>
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-white flex items-center gap-1.5 font-serif-luxury tracking-wide">
              <span>Trợ Lý Động Lực Tower</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-sans font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                130 HẠ ĐÌNH
              </span>
            </h4>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium mt-0.5">
              <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>Chính xác 100% thông tin dự án</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleResetChat}
            className="p-1.5 rounded-lg text-slate-400 hover:text-amber-300 hover:bg-slate-800 transition-colors cursor-pointer"
            title="Làm mới hội thoại"
            aria-label="Làm mới hội thoại"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Đóng cửa sổ chat"
            aria-label="Đóng cửa sổ chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Accuracy Verification Guarantee Bar */}
      <div className="bg-[#061842] px-3 py-1.5 border-b border-sky-500/20 flex items-center justify-between text-[10px] text-sky-200">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="font-medium truncate">Dữ liệu nguồn CĐT Tập đoàn Động Lực & Cen Land</span>
        </div>
        <span className="text-amber-300 font-bold shrink-0">Không bịa đặt</span>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3.5 bg-[#020919]/90">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'bot' && (
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-500 to-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-red-500/20">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-md ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white font-medium rounded-tr-xs border border-red-400/40'
                  : 'bg-[#081b47] text-slate-100 border border-sky-400/30 rounded-tl-xs whitespace-pre-wrap'
              }`}
            >
              <div className="text-[12px] sm:text-[12.5px] leading-relaxed">
                {renderFormattedText(msg.text)}
              </div>

              {/* Action shortcuts for bot messages */}
              {msg.sender === 'bot' && (
                <div className="mt-2.5 pt-2 border-t border-slate-700/60 flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenConsultation();
                    }}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/40 text-[10.5px] text-amber-300 font-bold transition-all cursor-pointer"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Nhận Báo Giá 7x tr/m²</span>
                  </button>
                  <a
                    href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-600/30 hover:bg-red-600/50 border border-red-500/40 text-[10.5px] text-rose-300 font-bold transition-all"
                  >
                    <Phone className="w-3 h-3" />
                    <span>0565 130 130</span>
                  </a>
                </div>
              )}

              <span className={`block text-[9px] mt-1.5 text-right ${msg.sender === 'user' ? 'text-rose-200' : 'text-slate-400'}`}>
                {msg.time}
              </span>
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-slate-800 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-2 items-center text-xs text-amber-300 pl-9">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" />
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]" />
            <span className="text-[11px] font-medium text-slate-300">Trợ lý đang truy xuất dữ liệu dự án...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Topic Chips */}
      <div className="p-2 bg-[#051438] border-t border-sky-500/30 flex gap-1.5 overflow-x-auto scrollbar-none">
        {quickQuestionTopics.map((topic, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(topic.query)}
            className="px-2.5 py-1 rounded-lg bg-[#0a235c] hover:bg-amber-400/20 hover:text-amber-200 hover:border-amber-400/50 text-[11px] font-medium text-slate-200 whitespace-nowrap transition-all shrink-0 border border-sky-500/30 cursor-pointer shadow-xs active:scale-95"
          >
            {topic.label}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-3 bg-[#020a1c] border-t border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Hỏi về giá, căn 2PN/3PN, sổ hồng, chiết khấu..."
            className="flex-1 bg-[#091d45] border border-sky-500/40 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2.5 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-xl hover:from-red-500 hover:to-rose-500 disabled:opacity-40 transition-all shadow-md shadow-red-600/30 cursor-pointer disabled:cursor-not-allowed"
            title="Gửi câu hỏi"
            aria-label="Gửi câu hỏi"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-2 flex items-center justify-between text-[11px] text-slate-300 pt-1">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="text-amber-400 font-bold hover:text-amber-300 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Car className="w-3.5 h-3.5 text-amber-400" />
            <span>Đăng ký xe đón xem dự án</span>
          </button>
          <a
            href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`}
            className="font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-rose-400" />
            <span>Hotline: {PROJECT_INFO.hotline}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
