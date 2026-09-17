export interface AdvisorFact {
  id: string;
  category: string;
  keywords: string[];
  patterns: RegExp[];
  answer: string;
}

// Full grounded system prompt containing 100% verified facts of Dong Luc Tower
export const DONG_LUC_PROJECT_GROUND_TRUTH = `
BẠN LÀ TRỢ LÝ TƯ VẤN CHÍNH THỨC CỦA DỰ ÁN ĐỘNG LỰC TOWER (130 HẠ ĐÌNH, THANH XUÂN, HÀ NỘI).
BẠN ĐƯỢC PHÁT TRIỂN BỞI ĐƠN VỊ PHÂN PHỐI ĐỘC QUYỀN CEN LAND VÀ CHỦ ĐẦU TƯ TẬP ĐOÀN ĐỘNG LỰC.

QUY TẮC BẮT BUỘC TUYỆT ĐỐI (STRICT DIRECTIVES):
1. CHỈ ĐƯỢC TRẢ LỜI CÁC THÔNG TIN CHÍNH THỨC CỦA DỰ ÁN ĐỘNG LỰC TOWER ĐÃ ĐƯỢC XÁC THỰC DƯỚI ĐÂY.
2. TUYỆT ĐỐI KHÔNG ĐƯỢC BỊA ĐẶT, SUY ĐOÁN HOẶC ĐƯA RA CÁC THÔNG TIN KHÔNG CÓ TRÊN WEBSITE NÀY.
3. Nếu người dùng hỏi thông tin không có trong tài liệu này (hoặc hỏi về dự án khác, hỏi chuyện phiếm ngoài lề), hãy nhã nhặn trả lời: "Dạ hiện tại thông tin này chưa có trong tài liệu chính thức được CĐT công bố trên website. Quý khách vui lòng liên hệ Hotline 0565 130 130 hoặc để lại số điện thoại để chuyên viên tư vấn hỗ trợ chi tiết và chính xác nhất ạ!"
4. Giọng điệu tư vấn: Chuyên nghiệp, nhã nhặn, tôn trọng khách hàng, mạch lạc, dễ hiểu, dùng gạch đầu dòng rõ ràng khi nêu các thông số hay chính sách.

--- BỘ DỮ LIỆU CHÍNH THỨC DỰ ÁN ĐỘNG LỰC TOWER ---

1. TỔNG QUAN DỰ ÁN:
• Tên dự án: Tổ hợp căn hộ cao cấp và Trung tâm thương mại Động Lực Tower.
• Địa chỉ / Vị trí: Số 130 Hạ Đình, Phường Hạ Đình, Quận Thanh Xuân, TP. Hà Nội.
• Chủ đầu tư: Công ty Cổ phần Tập đoàn Động Lực (Động Lực Group).
• Đơn vị tư vấn & phát triển kinh doanh độc quyền: Công ty Cổ phần Bất động sản Thế Kỷ (Cen Land).
• Tổng diện tích khu đất: 2.329 m².
• Mật độ xây dựng: Khoảng 40%.
• Quy mô xây dựng: 01 tòa tháp hiện đại cao 24 tầng nổi + 03 tầng hầm để xe rộng rãi.
• Tổng số lượng căn hộ: Duy nhất 156 căn hộ cao cấp (phiên bản giới hạn, mật độ cư dân văn minh, không gian yên tĩnh).
• Mật độ căn hộ: ~8 căn/sàn, phục vụ bởi 4 thang máy tốc độ cao (tỷ lệ vàng ~39 căn/thang máy, hoàn toàn không lo tắc thang máy vào giờ cao điểm).
• Thời gian dự kiến bàn giao: Quý II / 2027.
• Pháp lý & hình thức sở hữu: Sổ hồng lâu dài (vĩnh viễn), pháp lý minh bạch 100%.

2. CHIẾN DỊCH BÁN HÀNG & MỨC GIÁ BÁN HIỆN TẠI:
• Chiến dịch đang triển khai: "Không Gian Sáng Tạo - Tự Do Kiến Tạo Tổ Ấm Theo Cách Của Bạn".
• Hình thức bàn giao: Bàn giao thô không gian sáng tạo HOẶC Bàn giao hoàn thiện theo nhu cầu gia chủ. (Lưu ý: Dự án hiện áp dụng chiến dịch Không Gian Sáng Tạo bàn giao thô, không còn chương trình tặng gói nội thất 300 triệu cũ).
• Mức giá bán: CHỈ TỪ 7x TRIỆU/M² ĐÃ BAO GỒM THUẾ VAT 100%!
• Thời hạn áp dụng giá & chính sách này: Đến hết tháng 9/2026.
• So sánh giá thị trường: Mức giá 7x triệu/m² (đã có VAT) là mức giá cạnh tranh nhất phân khúc căn hộ trung tâm quận Thanh Xuân hiện nay, trong khi mặt bằng chung các dự án xung quanh đang từ 90 - 110 triệu/m².

3. CƠ CẤU VÀ DIỆN TÍCH CÁC LOẠI CĂN HỘ:
Dự án có 2 loại hình căn hộ chính (tất cả đều vuông vắn, nhiều ánh sáng tự nhiên):
A. Căn hộ 2 Phòng ngủ (2PN + 2WC + 1 Logia):
• Diện tích thông thủy: Từ 64.68 m² đến 72.68 m² (Diện tích tim tường: 70.8 - 76.5 m²).
• Giá bán tham khảo: Từ khoảng 4.68 tỷ đến 5.39 tỷ VNĐ (ĐÃ BAO GỒM VAT).
• Các căn 2PN tiêu biểu:
  - Căn 01 (70.50 - 70.67 m²): Ban công hướng Nam cực mát, view trực diện Hồ Hạ Đình và công viên xanh.
  - Căn 02 (66.48 - 66.92 m²): Ban công hướng Nam view Hồ Hạ Đình, giá chỉ từ 4.8 tỷ có VAT.
  - Căn 04 (71.74 - 72.68 m²): Ban công Đông Nam mát mẻ, phòng khách rộng thoáng.
  - Căn 05 (64.68 - 65.51 m²): Căn 2PN tối ưu diện tích và ngân sách nhất, view đường Hạ Đình và skyline.
B. Căn hộ 3 Phòng ngủ (3PN + 2WC + 2 Logia):
• Diện tích thông thủy: Từ 86.50 m² đến 102.40 m² (Diện tích tim tường: 94.6 - 110.8 m²).
• Giá bán tham khảo: Từ khoảng 6.47 tỷ đến 7.8 tỷ VNĐ (ĐÃ BAO GỒM VAT).
• Các căn 3PN tiêu biểu:
  - Căn 03 (93.12 - 93.38 m²): Căn góc 2 mặt thoáng view Hồ Hạ Đình và nội khu.
  - Căn 06 (100.91 - 102.40 m²): Căn hộ diện tích lớn nhất dự án, không gian phòng khách lớn, tầm nhìn bao quát.
  - Căn 07 (86.50 - 87.05 m²): Thiết kế vuông vắn, 3 phòng ngủ đều có ánh sáng tự nhiên.
  - Căn 08 (93.12 - 93.38 m²): Căn góc thoáng đãng, view hồ và thành phố.

4. TIÊU CHUẨN BÀN GIAO THÔ "KHÔNG GIAN SÁNG TẠO":
Bàn giao thô mang lại lợi ích gì?
• Tiết kiệm trực tiếp 200 - 400 triệu đồng so với hoàn thiện sẵn, không mất chi phí đập phá sửa chữa những hạng mục không vừa ý.
• Tự do sáng tạo phong cách thiết kế độc bản (Minimalism, Wabi-Sabi, Industrial, Scandinavian, Luxury Modern).
• Danh mục bàn giao đã có sẵn gồm:
  1. Cửa chính chống cháy cao cấp kèm khóa thông minh an toàn.
  2. Hệ thống vách kính ban công và cửa sổ kính cách âm, cách nhiệt hoàn thiện.
  3. Tường bao ngoài và tường ngăn phòng trát phẳng, trần bê tông mộc tiêu chuẩn.
  4. Hệ thống đi dây điện âm tường, đầu chờ công tắc, ổ cắm và tủ điện tổng hoàn chỉnh.
  5. Hệ thống đầu chờ cấp thoát nước tại nhà vệ sinh và khu vực bếp.
  6. Đầu chờ ống đồng điều hòa không khí.

5. CHÍNH SÁCH BÁN HÀNG VÀ 4 GÓI ƯU ĐÃI ĐẶC QUYỀN:
Dự án áp dụng 4 gói chính sách ưu đãi tài chính vượt trội:
Gói 1: Chiết khấu đặt cọc:
• Căn hộ 2 Phòng ngủ: Chiết khấu 3%.
• Căn hộ 3 Phòng ngủ: Chiết khấu 6%.
(Thời hạn áp dụng gói cọc: Đến hết ngày 31/07/2026).
Gói 2: Chiết khấu thanh toán sớm:
• Thanh toán sớm 50%: Chiết khấu 9%.
• Thanh toán sớm 70%: Chiết khấu 10%.
• Thanh toán sớm 95%: Chiết khấu 11%.
(Tỷ lệ chiết khấu tính trên giá trị căn hộ trước VAT và KPBT).
Gói 3: Chiết khấu thanh toán theo tiến độ chuẩn:
• Khách hàng thanh toán theo tiến độ chuẩn của CĐT: Nhận chiết khấu 5% (trước VAT & KPBT).
Gói 4: Hỗ trợ tài chính ngân hàng (Gói vay lãi suất 0%):
• Ngân hàng hỗ trợ vay vốn: Lên đến 65% - 70% giá trị căn hộ.
• Ngân hàng đối tác tài trợ: Vietcombank, MB Bank, BIDV...
• Hỗ trợ lãi suất 0% cho 65% giá trị căn hộ đến ngày 31/12/2027 (Trần lãi suất hỗ trợ tối đa 12%).
• Ân hạn nợ gốc trong suốt thời gian hỗ trợ lãi suất. Thời hạn vay tối đa lên tới 20 - 25 năm.

6. TIẾN ĐỘ THANH TOÁN CHUẨN (7 ĐỢT):
• Đợt 1: Đặt cọc 50.000.000 VNĐ / căn (Ký thỏa thuận đặt cọc).
• Đợt 2: Thanh toán 20% GTCH (đã bao gồm tiền cọc) khi ký Hợp đồng mua bán.
• Đợt 3: Thanh toán 15% GTCH khi thi công đến sàn tầng 10.
• Đợt 4: Thanh toán 15% GTCH khi thi công đến sàn tầng 20.
• Đợt 5: Thanh toán 10% GTCH khi cất nóc tòa nhà (Tầng 24 - dự kiến Q2/2025).
• Đợt 6: Thanh toán 25% GTCH + 2% Kinh phí bảo trì khi nhận thông báo bàn giao căn hộ (Dự kiến Q2/2027).
• Đợt 7: Thanh toán 5% GTCH khi nhận Giấy chứng nhận quyền sở hữu nhà ở (Sổ hồng).

7. PHÁP LÝ DỰ ÁN:
• Đầy đủ 100% hồ sơ pháp lý cao nhất:
  - Giấy phép xây dựng số 42/GPXD do Sở Xây Dựng TP. Hà Nội cấp phép xây dựng 24 tầng nổi và 3 tầng hầm.
  - Phê duyệt Quy hoạch chi tiết tỷ lệ 1/500 của UBND TP. Hà Nội.
  - Biên bản nghiệm thu phần móng và hầm theo đúng quy chuẩn kỹ thuật quốc gia.
  - Văn bản xác nhận đủ điều kiện bán nhà ở hình thành trong tương lai của cơ quan chức năng.
  - Hình thức sở hữu: Sổ hồng lâu dài (vĩnh viễn) trao tay cư dân.

8. TIẾN ĐỘ THI CÔNG THỰC TẾ:
• Q3/2024: Đã hoàn thành toàn bộ công tác thi công và nghiệm thu 3 tầng hầm & phần móng.
• Q4/2024: Đang tập trung máy móc, nhân lực thi công kết cấu phần thân tầng nổi.
• Q2/2025: Dự kiến hoàn thành cất nóc toàn bộ 24 tầng.
• Q2/2027: Nghiệm thu hoàn thiện và chính thức bàn giao căn hộ cho cư dân về ở.

9. TIỆN ÍCH NỘI KHU:
• Tầng 1 - 3 khối đế: Trung tâm thương mại dịch vụ sầm uất, siêu thị tiện ích, chuỗi nhà hàng, café sang trọng.
• Khu sinh hoạt cộng đồng đa năng: Nơi giao lưu gắn kết cộng đồng cư dân văn minh, tổ chức sinh nhật, hội thảo.
• Phòng Gym & Fitness hiện đại: Trang thiết bị nhập khẩu, khu tập Yoga đón ánh sáng tự nhiên.
• Nhà trẻ thông minh nội khu: Môi trường giáo dục mầm non chất lượng cao, an toàn cho các bé ngay trong tòa nhà.
• Công viên cây xanh & cảnh quan dạo bộ: Không gian thư giãn trong lành, bóng mát quanh năm.
• View trọn Hồ Hạ Đình: Tầm nhìn hồ nước sinh thái thoáng đãng cách 100m, mang lại phong thủy thịnh vượng và không khí trong lành.
• Bãi đỗ xe thông minh 3 tầng hầm: Giải quyết triệt để 100% bài toán thiếu chỗ đỗ ô tô và xe máy tại trung tâm Hà Nội.
• Hệ thống an ninh 3 lớp: Camera giám sát 24/7, thẻ từ thang máy phân tầng, đội ngũ bảo vệ chuyên nghiệp.

10. VỊ TRÍ VÀ LIÊN KẾT NGOẠI KHU:
• Vị trí: 130 Hạ Đình, Phường Hạ Đình, Quận Thanh Xuân, Hà Nội.
• Cách Hồ Hạ Đình chỉ 100m (chưa đầy 2 phút đi bộ).
• Cách ga đường sắt trên cao Metro Thượng Đình (Cát Linh - Hà Đông) 800m (3 phút di chuyển).
• Cách trục đường Nguyễn Trãi 500m, đường Vành Đai 3 (Khuất Duy Tiến - Nguyễn Xiển) 1km.
• Cách Trung tâm thương mại Royal City / Ngã Tư Sở: 1.5 - 2km (7 - 10 phút).
• Gần các trường học danh tiếng: Trường Tiểu học, THCS Hạ Đình (liền kề), ĐH Khoa học Tự nhiên, ĐH KHXH&NV, ĐH Hà Nội, ĐH Kiến trúc, HV Bưu chính Viễn thông.
• Gần các cơ sở y tế lớn: Bệnh viện Đại học Y Hà Nội, Bệnh viện Bạch Mai, Bệnh viện Xây Dựng, BV Nội tiết TW.

11. THÔNG TIN LIÊN HỆ & DỊCH VỤ HỖ TRỢ:
• Hotline tư vấn 24/7: 0565 130 130.
• Dịch vụ xe đưa đón: Cen Land có xe ô tô chuyên dụng đưa đón Quý khách tham quan dự án và xem thực tế công trình hoàn toàn MIỄN PHÍ.
• Quý khách có thể bấm nút "Nhận Báo Giá 7x tr/m²" hoặc "Đặt Lịch Xem Thực Tế" ngay trên màn hình để chuyên viên gửi trọn bộ mặt bằng kỹ thuật tầng và bảng tính dòng tiền chi tiết qua Zalo!
`;

// Helper to remove accents for robust search
export function removeVietnameseAccents(str: string): string {
  if (!str) return '';
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

// Structured Q&A knowledge base covering every facet of the project
export const GROUNDED_KNOWLEDGE_BASE: AdvisorFact[] = [
  // 1. Chủ đầu tư & Đơn vị phát triển
  {
    id: 'developer-distributor',
    category: 'Chủ đầu tư',
    keywords: ['chu dau tu', 'chu dau tu la ai', 'cong ty dong luc', 'tap doan dong luc', 'cen land', 'cenland', 'don vi phat trien', 'phan phoi'],
    patterns: [/(chủ đầu tư|cđt|đơn vị phát triển|phân phối|động lực|cenland|cen land)/i],
    answer: `Dạ, thông tin chủ đầu tư và đơn vị phát triển Động Lực Tower:
• **Chủ đầu tư:** Công ty Cổ phần Tập đoàn Động Lực (Động Lực Group) - thương hiệu uy tín lâu năm tại Việt Nam.
• **Đơn vị tư vấn & phát triển kinh doanh độc quyền:** Công ty Cổ phần Bất động sản Thế Kỷ (Cen Land).
Dự án được triển khai với pháp lý minh bạch 100%, sở hữu Sổ hồng lâu dài, ký HĐMB trực tiếp với Chủ đầu tư.`
  },

  // 2. Vị trí & Địa chỉ
  {
    id: 'location-address',
    category: 'Vị trí',
    keywords: ['dia chi', 'o dau', 'vi tri', 'nam o dau', 'ha dinh', 'thanh xuan', 'duong nao', 'duong di', 'toa do'],
    patterns: [/(địa chỉ|ở đâu|vị trí|nằm ở|hạ đình|thanh xuân|đường nào|tọa độ)/i],
    answer: `Dạ, dự án **Động Lực Tower** tọa lạc tại vị trí trung tâm quận Thanh Xuân:
• **Địa chỉ chính xác:** Số 130 Hạ Đình, Phường Hạ Đình, Quận Thanh Xuân, Hà Nội.
• **Kết nối giao thông chiến lược:**
  - Cách Hồ Hạ Đình chỉ 100m (không gian mặt nước thoáng mát quanh năm).
  - Cách Ga Metro Thượng Đình (Đường sắt trên cao Cát Linh - Hà Đông) chỉ 800m (~3 phút).
  - Kết nối thẳng ra trục Nguyễn Trãi (500m) và đường Vành Đai 3 Khuất Duy Tiến - Nguyễn Xiển (1km).
  - Cách Ngã Tư Sở & TTTM Royal City khoảng 1.5 - 2km (7-10 phút di chuyển).`
  },

  // 3. Giá bán & VAT
  {
    id: 'pricing-vat',
    category: 'Giá bán',
    keywords: ['gia', 'gia ban', 'bao nhieu', '7x', 'vat', 'co vat chua', 'gia 1m2', 'gia m2', 'tong gia', 'bang gia'],
    patterns: [/(giá|giá bán|bao nhiêu|7x|vat|m2|bảng giá|tổng tiền|bao nhiêu tiền)/i],
    answer: `Dạ, mức giá bán chính thức của Động Lực Tower hiện tại:
• **Đơn giá:** Chỉ từ **7x triệu/m² ĐÃ BAO GỒM 100% THUẾ VAT**!
• **Mức giá tham khảo theo từng loại căn:**
  - **Căn 2 Phòng ngủ (64.68 - 72.68 m²):** Tổng giá từ khoảng **4.68 tỷ - 5.39 tỷ VNĐ** (đã gồm VAT).
  - **Căn 3 Phòng ngủ (86.5 - 102.4 m²):** Tổng giá từ khoảng **6.47 tỷ - 7.8 tỷ VNĐ** (đã gồm VAT).
• Mức giá này áp dụng trong chiến dịch Không Gian Sáng Tạo đến **hết tháng 9/2026**.
Quý khách có thể bấm nút "Nhận Báo Giá 7x tr/m²" trên màn hình hoặc để lại SĐT để Cen Land gửi bảng giá chi tiết từng tầng ạ!`
  },

  // 4. Bàn giao thô & Không gian sáng tạo
  {
    id: 'handover-raw-creative',
    category: 'Bàn giao',
    keywords: ['ban giao tho', 'khong gian sang tao', 'ban giao gom gi', 'noi that', '300tr', 'qua tang', 'tu do thiet ke', 'tieu chuan ban giao'],
    patterns: [/(bàn giao thô|không gian sáng tạo|tiêu chuẩn bàn giao|bàn giao những gì|gồm những gì|nội thất|300 triệu|300tr|tự do thiết kế)/i],
    answer: `Dạ, hiện tại dự án đang áp dụng chiến dịch **"Không Gian Sáng Tạo" (Bàn giao thô)**:
*(Lưu ý: Dự án không còn áp dụng chương trình quà tặng gói nội thất 300 triệu cũ).*

**Lợi ích khi chọn căn hộ Không Gian Sáng Tạo:**
1. Tiết kiệm ngay từ **200 - 400 triệu đồng** chi phí mua nhà so với căn hoàn thiện.
2. Không tốn thời gian, tiền bạc đập phá, dỡ bỏ nội thất có sẵn không vừa ý.
3. Tự do thiết kế theo gu riêng: Minimalism, Industrial, Scandinavian, Wabi-sabi...

**Hạng mục bàn giao thực tế đã có sẵn:**
• Cửa chính chống cháy cao cấp và hệ thống khóa an toàn.
• Vách kính ban công và hệ thống cửa kính cách âm hoàn chỉnh.
• Tường ngăn phẳng, trần bê tông mộc tiêu chuẩn.
• Đi dây điện âm tường, ổ cắm, công tắc, tủ điện tổng.
• Đầu chờ cấp thoát nước tại nhà vệ sinh và khu vực bếp.
• Đầu chờ ống đồng điều hòa không khí.`
  },

  // 5. Căn 2 phòng ngủ
  {
    id: 'unit-2pn',
    category: 'Căn hộ 2PN',
    keywords: ['can 2 phong ngu', 'can 2pn', '2 ngu', '2 phong ngu', 'can 01', 'can 02', 'can 04', 'can 05', 'dien tich can 2 ngu'],
    patterns: [/(căn 2 phòng ngủ|căn 2pn|2 phòng ngủ|2 ngủ|căn 01|căn 02|căn 04|căn 05)/i],
    answer: `Dạ, thông số chi tiết dòng **Căn hộ 2 Phòng Ngủ** tại Động Lực Tower:
• **Cơ cấu công năng:** 2 Phòng ngủ + 2 WC + 1 Phòng khách + Bếp + 1 Logia.
• **Diện tích thông thủy:** Từ **64.68 m² đến 72.68 m²**.
• **Các căn tiêu biểu:**
  - **Căn 01 (70.50 - 70.67 m²):** Ban công chính Nam đón gió tự nhiên, view trực diện Hồ Hạ Đình.
  - **Căn 02 (66.48 - 66.92 m²):** Ban công hướng Nam view Hồ Hạ Đình, giá chỉ từ 4.81 tỷ có VAT.
  - **Căn 04 (71.74 - 72.68 m²):** Ban công Đông Nam mát mẻ, phòng khách cực rộng.
  - **Căn 05 (64.68 - 65.51 m²):** Diện tích vừa vặn, tối ưu ngân sách tốt nhất (từ 4.68 tỷ có VAT).
Quý khách có thể bấm xem trực tiếp trên sơ đồ mặt bằng tầng tại website!`
  },

  // 6. Căn 3 phòng ngủ
  {
    id: 'unit-3pn',
    category: 'Căn hộ 3PN',
    keywords: ['can 3 phong ngu', 'can 3pn', '3 ngu', '3 phong ngu', 'can 03', 'can 06', 'can 07', 'can 08', 'dien tich can 3 ngu'],
    patterns: [/(căn 3 phòng ngủ|căn 3pn|3 phòng ngủ|3 ngủ|căn 03|căn 06|căn 07|căn 08)/i],
    answer: `Dạ, thông số chi tiết dòng **Căn hộ 3 Phòng Ngủ** tại Động Lực Tower:
• **Cơ cấu công năng:** 3 Phòng ngủ + 2 WC + Phòng khách lớn + Bếp + 2 Logia.
• **Diện tích thông thủy:** Từ **86.50 m² đến 102.40 m²**.
• **Các căn tiêu biểu:**
  - **Căn 03 (93.12 - 93.38 m²):** Căn góc 2 mặt thoáng view Hồ Hạ Đình, đón trọn gió lành.
  - **Căn 06 (100.91 - 102.40 m²):** Căn hộ rộng nhất dự án, không gian như Sky Villa đẳng cấp.
  - **Căn 07 (86.50 - 87.05 m²):** Bố cục vuông vắn, 3 phòng ngủ đều tiếp xúc ánh sáng tự nhiên.
  - **Căn 08 (93.12 - 93.38 m²):** Căn góc thoáng đãng, tầm nhìn bao quát thành phố.
• **Giá bán:** Dao động từ khoảng **6.47 tỷ đến 7.8 tỷ VNĐ** (đã gồm VAT).`
  },

  // 7. Chính sách chiết khấu & Ưu đãi
  {
    id: 'policy-discounts',
    category: 'Chính sách',
    keywords: ['chinh sach', 'chiet khau', 'uu dai', 'chinh sach ban hang', 'csbh', 'khuyen mai', 'giam gia', 'chiet khau bao nhieu'],
    patterns: [/(chính sách|chiết khấu|ưu đãi|khuyến mại|giảm giá|csbh|chính sách bán hàng)/i],
    answer: `Dạ, Động Lực Tower đang áp dụng **4 gói ưu đãi đặc quyền** tốt nhất:
1. **Chiết khấu đặt cọc:**
   - Căn 2PN: Chiết khấu **3%**.
   - Căn 3PN: Chiết khấu **6%**.
   *(Áp dụng cho khách đặt cọc đến ngày 31/07/2026).*
2. **Chiết khấu thanh toán sớm (không gồm VAT & KPBT):**
   - TT sớm 50%: Chiết khấu **9%**.
   - TT sớm 70%: Chiết khấu **10%**.
   - TT sớm 95%: Chiết khấu **11%**.
3. **Chiết khấu thanh toán tiến độ chuẩn:** Chiết khấu **5%** (không gồm VAT & KPBT).
4. **Hỗ trợ lãi suất 0%:** Ngân hàng hỗ trợ vay 65% GTCH lãi suất 0% đến ngày **31/12/2027** (trần 12%), ân hạn nợ gốc.`
  },

  // 8. Ngân hàng & Vay vốn
  {
    id: 'bank-loan',
    category: 'Vay ngân hàng',
    keywords: ['ngan hang', 'vay', 'lai suat', 'lai suat 0%', 'ho tro lai suat', 'vay duoc bao nhieu', 'an han no goc', 'vietcombank', 'mbbank', 'bidv'],
    patterns: [/(ngân hàng|vay vốn|vay bao nhiêu|lãi suất|hỗ trợ lãi suất|ls 0%|trả góp|thủ tục vay|vietcombank|mb bank|bidv)/i],
    answer: `Dạ, chính sách hỗ trợ vay vốn ngân hàng tại Động Lực Tower cực kỳ ưu việt:
• **Tỷ lệ tài trợ:** Ngân hàng cho vay lên đến **65% - 70%** giá trị căn hộ.
• **Gói hỗ trợ lãi suất 0%:** Áp dụng cho **65% giá trị căn hộ** đến ngày **31/12/2027** (trần lãi suất 12%).
• **Ân hạn nợ gốc:** Trong suốt thời gian hỗ trợ lãi suất 0%, khách hàng không phải trả nợ gốc.
• **Thời hạn vay:** Linh hoạt lên tới **20 - 25 năm**.
• **Ngân hàng liên kết đối tác:** Vietcombank, MB Bank, BIDV...
Chuyên viên tín dụng sẽ hỗ trợ thẩm định hồ sơ giải ngân nhanh gọn cho Quý khách.`
  },

  // 9. Tiến độ đóng tiền (7 đợt)
  {
    id: 'payment-schedule',
    category: 'Tiến độ thanh toán',
    keywords: ['tien do thanh toan', 'dong tien', 'may dot', 'chia may dot', 'cac dot thanh toan', 'tien do dong tien'],
    patterns: [/(tiến độ thanh toán|đóng tiền|mấy đợt|các đợt|thanh toán tiến độ)/i],
    answer: `Dạ, tiến độ thanh toán chuẩn tại Động Lực Tower được chia làm **7 đợt** rất giãn dòng tiền:
• **Đợt 1:** Đặt cọc 50.000.000 VNĐ / căn.
• **Đợt 2:** Thanh toán 20% GTCH (đã gồm cọc) khi Ký Hợp đồng mua bán.
• **Đợt 3:** Thanh toán 15% GTCH khi xây xong sàn tầng 10.
• **Đợt 4:** Thanh toán 15% GTCH khi xây xong sàn tầng 20.
• **Đợt 5:** Thanh toán 10% GTCH khi cất nóc (Tầng 24 - dự kiến Q2/2025).
• **Đợt 6:** Thanh toán 25% GTCH + 2% KPBT khi có thông báo bàn giao căn hộ (Q2/2027).
• **Đợt 7:** Thanh toán 5% GTCH khi nhận Giấy chứng nhận quyền sở hữu (Sổ hồng).`
  },

  // 10. Pháp lý & Sổ hồng
  {
    id: 'legal-certificate',
    category: 'Pháp lý',
    keywords: ['phap ly', 'so hong', 'so do', 'giay phep xay dung', 'gpxd', 'hop dong mua ban', 'hdmb', 'so huu bao lau', 'vinh vien', 'lau dai'],
    patterns: [/(pháp lý|sổ hồng|sổ đỏ|giấy phép xây dựng|gpxd|hợp đồng mua bán|hđmb|sở hữu bao lâu|lâu dài|vĩnh viễn)/i],
    answer: `Dạ, pháp lý Động Lực Tower **chuẩn chỉnh 100%**, Quý khách hoàn toàn an tâm:
• **Hình thức sở hữu:** Sổ hồng lâu dài (sở hữu vĩnh viễn) cho người mua.
• **Giấy phép xây dựng:** GPXD số 42/GPXD do Sở Xây Dựng TP. Hà Nội cấp (24 tầng nổi + 3 tầng hầm).
• **Quy hoạch 1/500:** Được UBND TP. Hà Nội phê duyệt chi tiết chỉ giới đường đỏ và chỉ tiêu xây dựng.
• **Điều kiện mở bán:** Đã hoàn thành nghiệm thu hầm móng và có văn bản đủ điều kiện bán nhà ở hình thành trong tương lai theo Luật Kinh doanh BĐS.
• Khách hàng ký Hợp đồng Mua bán trực tiếp với CĐT Tập đoàn Động Lực.`
  },

  // 11. Tiến độ thi công & Thời gian bàn giao
  {
    id: 'construction-timeline',
    category: 'Tiến độ',
    keywords: ['tien do', 'khi nao giao nha', 'ban giao khi nao', 'xay den dau roi', 'cat noc', 'thoi gian ban giao', 'nam nao giao'],
    patterns: [/(tiến độ|khi nào giao nhà|bàn giao khi nào|xây đến đâu|cất nóc|thời gian bàn giao|bao giờ bàn giao|năm nào)/i],
    answer: `Dạ, tiến độ thi công thực tế tại công trường 130 Hạ Đình đang được đẩy nhanh:
• **Q3/2024:** Đã hoàn thành và nghiệm thu xong 3 tầng hầm & phần móng công trình.
• **Q4/2024:** Đang triển khai thi công kết cấu phần thân các tầng nổi.
• **Q2/2025:** Dự kiến hoàn thành cất nóc toàn bộ 24 tầng.
• **Q2/2027:** Nghiệm thu hoàn thiện và chính thức bàn giao căn hộ cho cư dân về ở.
Quý khách có thể xem 4 bức ảnh tiến độ cập nhật thực tế ngay trong mục "Tiến Độ Thi Công" trên website!`
  },

  // 12. Quy mô dự án, số tầng, số căn, thang máy, hầm đỗ xe
  {
    id: 'scale-elevators-parking',
    category: 'Quy mô & Kỹ thuật',
    keywords: ['quy mo', 'bao nhieu tang', 'may tang', 'bao nhieu can', 'may can', 'thang may', 'may thang may', 'ham', 'may ham', 'cho de xe', 'do xe', 'o to', 'gui xe'],
    patterns: [/(quy mô|bao nhiêu tầng|mấy tầng|bao nhiêu căn|mấy căn|thang máy|mấy thang|chỗ đỗ xe|đỗ ô tô|tầng hầm|mấy hầm|gửi xe)/i],
    answer: `Dạ, các thông số kỹ thuật và quy mô chuẩn của Động Lực Tower:
• **Số tầng:** 01 tòa tháp cao **24 tầng nổi + 3 tầng hầm đỗ xe**.
• **Số lượng căn hộ:** Duy nhất **156 căn hộ VIP** (mật độ siêu thoáng).
• **Cơ cấu tầng:** Tầng 1 - 3 là TTTM và tiện ích công cộng; Tầng 4 - 24 là căn hộ để ở (~8 căn/sàn).
• **Thang máy:** **4 thang máy tốc độ cao** phục vụ chỉ 156 căn hộ (tỷ lệ lý tưởng ~39 căn/thang - không lo chờ đợi vào giờ cao điểm).
• **Chỗ đỗ xe:** **3 tầng hầm** kết nối rộng rãi, đáp ứng 100% nhu cầu đỗ ô tô và xe máy của cư dân.`
  },

  // 13. Tiện ích nội khu
  {
    id: 'amenities-facilities',
    category: 'Tiện ích',
    keywords: ['tien ich', 'co be boi khong', 'gym', 'nha tre', 'cong vien', 'thuong mai', 'mua sam', 'khu sinh hoat cong dong', 'an ninh'],
    patterns: [/(tiện ích|có bể bơi không|phòng gym|nhà trẻ|công viên|trung tâm thương mại|mua sắm|sinh hoạt cộng đồng|an ninh|kidzone)/i],
    answer: `Dạ, hệ thống tiện ích đẳng cấp tại Động Lực Tower gồm:
1. **Trung tâm thương mại & dịch vụ chân đế (Tầng 1 - 3):** Siêu thị, café, ẩm thực, mua sắm tiện nghi.
2. **Khu sinh hoạt cộng đồng đa năng (đã cập nhật ảnh thực tế):** Không gian giao lưu, sinh hoạt văn minh cho cư dân.
3. **Phòng tập Gym & Yoga hiện đại:** Rèn luyện thể lực mỗi ngày.
4. **Nhà trẻ thông minh nội khu:** Tiện lợi đưa đón con nhỏ ngay trong tòa nhà.
5. **Công viên cây xanh & đường dạo cảnh quan:** Môi trường sống trong lành, gần gũi thiên nhiên.
6. **Tầm view trực diện Hồ Hạ Đình:** Chỉ cách 100m, mang đến bầu không khí mát lành và phong thủy vượng khí.
7. **Bãi đỗ xe thông minh 3 tầng hầm:** An tâm trọn vẹn về chỗ đỗ ô tô.
8. **An ninh đa lớp 24/7:** Thẻ từ phân tầng, camera giám sát toàn diện.`
  },

  // 14. Hồ Hạ Đình & Tầm view
  {
    id: 'lake-view',
    category: 'Hồ Hạ Đình & Tầm view',
    keywords: ['ho ha dinh', 'view ho', 'cach ho bao xa', 'tam nhin', 'khong khi', 'mat me', 'huong nam'],
    patterns: [/(hồ hạ đình|view hồ|cách hồ|tầm nhìn|hồ nước|thoáng mát)/i],
    answer: `Dạ, lợi thế cảnh quan view hồ là điểm đắt giá nhất của Động Lực Tower:
• Dự án nằm cách **Hồ Hạ Đình chỉ 100m** (khoảng 2 phút đi bộ).
• Các căn hộ hướng Nam (như Căn 01, Căn 02, Căn 03) sở hữu tầm nhìn trực diện mặt nước Hồ Hạ Đình vĩnh viễn không bị che chắn.
• Không gian mặt nước hồ điều hòa mang lại luồng gió mát tự nhiên, giảm khói bụi và tạo phong thủy tài lộc rất tốt cho gia chủ.`
  },

  // 15. Liên kết tiện ích ngoại khu (trường học, bệnh viện, metro)
  {
    id: 'surrounding-amenities',
    category: 'Tiện ích ngoại khu',
    keywords: ['truong hoc', 'benh vien', 'dai hoc', 'metro', 'cat linh', 'thuong dinh', 'royal city', 'nga tu so', 'cho', 'sieu thi'],
    patterns: [/(trường học|bệnh viện|đại học|metro|cát linh|thượng đình|royal city|ngã tư sở|chợ|siêu thị)/i],
    answer: `Dạ, Động Lực Tower nằm trong khu dân cư sầm uất bậc nhất quận Thanh Xuân:
• **Giao thông công cộng:** Cách Ga Metro Thượng Đình (Cát Linh - Hà Đông) 800m.
• **Trường học các cấp:** Liền kề Trường Mầm non, Tiểu học, THCS Hạ Đình; Gần các trường ĐH lớn: ĐH Khoa học Tự nhiên, ĐH KHXH&NV, ĐH Hà Nội, ĐH Kiến trúc, HV An ninh.
• **Mua sắm giải trí:** Cách TTTM Vincom Royal City chỉ 1.5 - 2km (7 phút di chuyển).
• **Y tế sức khỏe:** Thuận tiện kết nối Bệnh viện Đại học Y Hà Nội, BV Bạch Mai, BV Nội tiết TW.`
  },

  // 16. Tham quan thực tế & Xe đưa đón & Hotline
  {
    id: 'visit-hotline',
    category: 'Liên hệ & Xem nhà',
    keywords: ['xem nha mau', 'xem thuc te', 'xe dua don', 'so dien thoai', 'hotline', 'lien he', 'gap ai', 'tu van'],
    patterns: [/(xem nhà mẫu|xem thực tế|xe đưa đón|hotline|số điện thoại|liên hệ|tư vấn|gặp ai|đăng ký xem)/i],
    answer: `Dạ, Quý khách muốn tham quan thực tế công trình Động Lực Tower tại 130 Hạ Đình:
• **Hotline tư vấn 24/7:** **0565 130 130**.
• **Đặc quyền dịch vụ:** Cen Land bố trí **xe ô tô đưa đón Quý khách tham quan dự án MIỄN PHÍ**.
• Quý khách có thể bấm nút **"Đặt Lịch Xe Đón Xem Thực Tế"** hoặc **"Nhận Báo Giá 7x tr/m²"** trên giao diện website, chuyên viên sẽ liên hệ và chuẩn bị xe đón Quý khách ngay ạ!`
  },

  // 17. Hạn chót chiến dịch & Số lượng căn
  {
    id: 'deadline-scarcity',
    category: 'Hạn áp dụng',
    keywords: ['han chot', 'khi nao het han', 'ap dung den khi nao', 'thang 9', 'con bao nhieu can', 'gio hang'],
    patterns: [/(hạn chót|hết hạn|áp dụng đến|tháng 9\/2026|tháng 9|còn bao nhiêu căn|giỏ hàng)/i],
    answer: `Dạ, các thông tin về thời hạn và số lượng căn hộ:
• **Thời hạn áp dụng:** Mức giá từ 7x triệu/m² (đã có VAT) và gói Không Gian Sáng Tạo áp dụng **ĐẾN HẾT THÁNG 9/2026**.
• **Số lượng giới hạn:** Toàn bộ dự án chỉ có duy nhất **156 căn hộ VIP**. Do số lượng rất hữu hạn và vị trí trung tâm Thanh Xuân, giỏ hàng đang được khách hàng quan tâm đặt chỗ rất nhanh.
Quý khách nên liên hệ sớm hotline 0565 130 130 để chọn được tầng đẹp và hướng ban công ưng ý nhất ạ!`
  }
];

// Smart Matcher: Finds the best verified answer based on keywords, patterns, and scoring
export function getGroundedAdvisorAnswer(query: string): string {
  const clean = query.trim();
  if (!clean) {
    return 'Kính chào Quý khách! Em là Trợ lý tư vấn Động Lực Tower (130 Hạ Đình). Quý khách cần tìm hiểu về giá bán 7x tr/m² có VAT, căn 2PN, 3PN, chính sách chiết khấu hay tiến độ thi công dự án ạ?';
  }

  const normalized = removeVietnameseAccents(clean);
  let bestFact: AdvisorFact | null = null;
  let highestScore = 0;

  for (const fact of GROUNDED_KNOWLEDGE_BASE) {
    let score = 0;

    // Check regex patterns on original string
    for (const pattern of fact.patterns) {
      if (pattern.test(clean)) {
        score += 3;
      }
    }

    // Check keywords on normalized string
    for (const kw of fact.keywords) {
      const normKw = removeVietnameseAccents(kw);
      if (normalized.includes(normKw)) {
        score += 2;
        // Exact keyword bonus
        if (normalized === normKw) score += 4;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestFact = fact;
    }
  }

  if (bestFact && highestScore >= 2) {
    return bestFact.answer;
  }

  // Fallback strictly grounded: Never hallucinate!
  return `Dạ, câu hỏi của Quý khách về "${clean}" đã được ghi nhận. 
Dự án Động Lực Tower cam kết chỉ cung cấp thông tin chuẩn xác và minh bạch 100%. 

Để nhận thông tin kỹ thuật chi tiết nhất hoặc xem bảng giá cụ thể theo từng tầng, Quý khách vui lòng:
• Bấm nút **"Nhận Báo Giá 7x tr/m²"** ngay bên dưới để nhận tài liệu qua Zalo.
• Hoặc gọi trực tiếp Hotline dự án: **0565 130 130** (Hỗ trợ 24/7 & có xe đưa đón xem thực tế miễn phí) ạ!`;
}
