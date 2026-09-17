import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Phone, ArrowRight, Minimize2, Flame } from 'lucide-react';
import { VIRTUAL_ADVISOR_KNOWLEDGE, PROJECT_INFO } from '../data/mockData';
import { DongLucLogo } from './DongLucLogo';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
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
      text: 'Kính chào Quý khách! Em là Trợ lý tư vấn Động Lực Tower (130 Hạ Đình, Thanh Xuân). Dự án hiện đang mở bán chiến dịch "Không Gian Sáng Tạo" (bàn giao thô hoặc hoàn thiện) với giá chỉ từ 7x triệu/m² ĐÃ BAO GỒM VAT. Em có thể hỗ trợ Quý khách thông tin gì ạ?',
      time: 'Vừa xong'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'Giá chỉ từ 7x tr/m² đã có VAT chưa?',
    'Không gian sáng tạo bàn giao gồm những gì?',
    'Chính sách áp dụng đến khi nào?',
    'Địa chỉ dự án ở đâu?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Formulate response based on knowledge base
    setTimeout(() => {
      const lower = text.toLowerCase();
      let matchedReply = '';

      for (const item of VIRTUAL_ADVISOR_KNOWLEDGE) {
        if (item.keywords.some((kw) => lower.includes(kw))) {
          matchedReply = item.reply;
          break;
        }
      }

      if (!matchedReply) {
        matchedReply = `Dạ, câu hỏi về "${text}" đã được ghi nhận. Quý khách có thể bấm nút "Nhận Báo Giá & Tư Vấn" bên dưới hoặc liên hệ Hotline ${PROJECT_INFO.hotline} để chuyên viên gửi trọn bộ mặt bằng kỹ thuật & báo giá chi tiết qua Zalo ngay cho Quý khách ạ!`;
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: matchedReply,
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-18 sm:bottom-6 right-3 sm:right-6 left-3 sm:left-auto sm:w-96 z-50 bg-slate-900 rounded-3xl shadow-2xl border border-amber-400/30 overflow-hidden flex flex-col h-[490px] max-h-[72vh] sm:max-h-[82vh] animate-in slide-in-from-bottom-5 duration-200 text-white">
      {/* Header */}
      <div className="bg-[#040d22] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-slate-900 border border-amber-400/40 p-1.5 flex items-center justify-center relative shadow-md shadow-amber-500/10 shrink-0">
            <DongLucLogo variant="symbol" theme="gold" className="w-full h-full" />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950" />
          </div>
          <div>
            <h4 className="font-display font-bold text-xs sm:text-sm text-white flex items-center gap-1.5">
              <span>Trợ Lý Động Lực Tower</span>
            </h4>
            <div className="text-[10px] sm:text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Tư vấn trực tuyến 24/7
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          title="Đóng cửa sổ chat"
          aria-label="Đóng cửa sổ chat"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-950/60">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3 text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-red-600 text-white font-medium shadow-xs rounded-tr-xs'
                      : 'bg-slate-800 text-slate-200 border border-slate-700/80 shadow-xs rounded-tl-xs whitespace-pre-line'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className={`block text-[9px] mt-1 text-right ${msg.sender === 'user' ? 'text-red-200' : 'text-slate-400'}`}>
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-800 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-slate-400 pl-9">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                <span>Trợ lý đang phản hồi...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="p-2 bg-slate-900 border-t border-slate-800 flex gap-1.5 overflow-x-auto">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-red-600/30 hover:text-red-200 text-[11px] font-medium text-slate-300 whitespace-nowrap transition-colors shrink-0 border border-slate-700"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
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
                placeholder="Nhập câu hỏi của Quý khách..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2 bg-red-600 text-white rounded-xl hover:bg-red-500 disabled:opacity-40 transition-colors shadow-xs"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 pt-1">
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="text-amber-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3 h-3" />
                Nhận báo giá & tài liệu Zalo
              </button>
              <a
                href={`tel:${PROJECT_INFO.hotline.replace(/\s+/g, '')}`}
                className="font-semibold hover:text-red-400"
              >
                Hotline: {PROJECT_INFO.hotline}
              </a>
            </div>
          </div>
        </div>
  );
};
