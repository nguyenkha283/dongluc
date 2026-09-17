import { ApartmentUnit, Amenity, PaymentStage, LocationConnection, ProjectMilestone } from '../types';

export const PROJECT_INFO = {
  name: 'Động Lực Tower',
  slogan: 'My Space, My Vibe',
  subTitle: 'Căn hộ bàn giao thô hoặc hoàn thiện trọn gói theo nhu cầu',
  campaignTitle: 'Không Gian Sáng Tạo - Tự Do Kiến Tạo Tổ Ấm Theo Cách Của Bạn',
  campaignDeadline: 'Áp dụng đến hết tháng 9/2026',
  pricePerSqmHeadline: 'Chỉ từ 7x triệu/m²',
  priceNote: 'ĐÃ BAO GỒM VAT',
  developer: 'CTCP Động Lực',
  distributor: 'CEN LAND (Đơn vị phân phối độc quyền)',
  location: '130 Hạ Đình, Thanh Xuân, Hà Nội',
  scale: '2 khối tháp - 1.3 ha (24 tầng nổi + 3 tầng hầm)',
  totalUnits: '156 căn hộ (Số lượng giới hạn)',
  unitTypesOverview: 'Căn hộ 2PN & 3PN',
  expectedHandover: 'Quý II / 2027',
  legal: 'Sổ hồng lâu dài',
  handoverStandard: 'Bàn giao thô hoặc Hoàn thiện trọn gói',
  handoverBullets: [
    'Cửa chính chống cháy & ban công kính cường lực hoàn chỉnh',
    'Hệ thống đi dây điện âm tường, đầu chờ công tắc & tủ điện tổng đầy đủ',
    'Hệ thống đầu chờ cấp thoát nước phòng tắm & khu vực bếp',
    'Dễ dàng hoàn thiện décor theo phong cách riêng, tiết kiệm tối đa ngân sách'
  ],
  hotline: '0565 130 130',
  hotlineDisplay: '0565 130 130',
  address: '130 Hạ Đình, Thanh Xuân, Hà Nội',
  googleMapsUrl: 'https://maps.app.goo.gl/F5iDNJuhWMMLPxC56',
  banks: ['Vietcombank', 'MB Bank', 'BIDV'],
  keyOffers: [
    'Mức giá hấp dẫn nhất khu vực Thanh Xuân: Chỉ từ 7x triệu/m² ĐÃ BAO GỒM VAT',
    'Chiến dịch Không Gian Sáng Tạo: Bàn giao thô tự do décor, tiết kiệm chi phí đập phá',
    'Hỗ trợ vay ngân hàng lên đến 70% giá trị căn hộ',
    'Lãi suất ưu đãi từ CĐT & Ngân hàng đồng hành',
    'Chiết khấu hấp dẫn cho khách hàng thanh toán sớm trong tháng 9/2026'
  ]
};

export const TARGET_AUDIENCES = [
  {
    id: 'young',
    title: 'DÀNH CHO NGƯỜI TRẺ',
    sub: 'Sống theo cách mình muốn',
    desc: 'Không gian sáng tạo cho phép các bạn trẻ, chuyên gia công nghệ, freelancer tự do thiết kế phong cách Minimalism, Industrial hay Scandinavian độc bản.',
    image: '/assets/audience_1_young.jpg'
  },
  {
    id: 'family',
    title: 'DÀNH CHO GIA ĐÌNH',
    sub: 'Cho con nền tảng tốt đẹp - Cho gia đình tổ ấm trọn vẹn',
    desc: 'Tọa độ vàng tại lõi Thanh Xuân liền kề hệ thống trường học chất lượng cao từ mầm non đến đại học, khuôn viên an toàn, thoáng đãng.',
    image: '/assets/audience_2_family.jpg'
  },
  {
    id: 'investor',
    title: 'DÀNH CHO NHÀ ĐẦU TƯ',
    sub: 'Mua thông minh - Tạo giá trị thật - Tiềm năng sinh lời bền vững',
    desc: 'Số lượng chỉ 156 căn khan hiếm tại trung tâm quận Thanh Xuân, giá 7x tr/m² có VAT là mức giá cực kỳ cạnh tranh so với mặt bằng 90-110 tr/m² xung quanh.',
    image: '/assets/audience_3_investor.jpg'
  }
];

export const EIGHT_REASONS = [
  {
    title: 'Vị trí lõi Thanh Xuân',
    desc: 'Tọa độ đắc địa 130 Hạ Đình, kết nối tức thì Nguyễn Trãi, Vành Đai 3, Khuất Duy Tiến.'
  },
  {
    title: 'Giá từ 7x triệu/m²',
    desc: 'ĐÃ BAO GỒM VAT - Mức giá tốt nhất phân khúc căn hộ trung tâm Hà Nội hiện tại.'
  },
  {
    title: 'Bàn giao thô - Tự do sáng tạo',
    desc: 'Tự do thiết kế tổ ấm theo phong cách riêng, tiết kiệm tối đa chi phí hoàn thiện.'
  },
  {
    title: 'Gần các trường đại học lớn',
    desc: 'ĐH Khoa học Tự nhiên, ĐH KHXH&NV, ĐH Hà Nội, Học viện Bưu chính, ĐH Kiến trúc.'
  },
  {
    title: '24 tầng nổi + 3 hầm',
    desc: 'Mật độ xây dựng lý tưởng, 3 tầng hầm rộng rãi giải quyết triệt để bài toán đỗ xe.'
  },
  {
    title: '156 căn hộ giới hạn',
    desc: 'Cộng đồng cư dân văn minh, chọn lọc, không gian sống riêng tư không quá đông đúc.'
  },
  {
    title: 'Hệ thống tiện ích đồng bộ',
    desc: 'Trung tâm thương mại, phòng Gym, vườn cảnh quan, khu sinh hoạt cộng đồng, Kidzone.'
  },
  {
    title: 'Tiềm năng tăng giá dài hạn',
    desc: 'Hưởng lợi trực tiếp từ hạ tầng Metro Cát Linh - Hà Đông và các tuyến đường mở rộng.'
  }
];

export const PROJECT_TIMELINE: ProjectMilestone[] = [
  { time: 'Q1/2025', title: 'Khởi công xây dựng', status: 'completed' },
  { time: 'Q3/2025', title: 'Hoàn thành hạng mục móng & 3 tầng hầm', status: 'completed' },
  { time: 'Q2/2026', title: 'Cất nóc công trình (Tầng 24)', status: 'ongoing' },
  { time: 'Q4/2026', title: 'Hoàn thiện mặt ngoài & cơ điện', status: 'upcoming' },
  { time: 'Q2/2027', title: 'Bàn giao căn hộ dự kiến cho cư dân', status: 'upcoming' }
];

export const INFRASTRUCTURE_BENEFITS = [
  {
    title: 'Tuyến Metro Cát Linh - Hà Đông',
    desc: 'Kết nối nhanh Thanh Xuân với trung tâm Hoàn Kiếm, Đống Đa, giảm thời gian di chuyển và gia tăng giá trị tài sản vượt trội.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Các tuyến đường huyết mạch mới',
    desc: 'Trục đường Hạ Đình mở rộng nối thông Nguyễn Trãi - Vành Đai 2.5 và Vành Đai 3 giải tỏa lưu lượng giao thông thông thoáng.',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Khu Tây & Nam Hà Nội bứt phá',
    desc: 'Hạ tầng xã hội đồng bộ, tập trung các bệnh viện đầu ngành, trung tâm thương mại và trường học trọng điểm của thủ đô.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Hệ sinh thái các đại dự án lân cận',
    desc: 'Nằm cạnh các quần thể khu đô thị đẳng cấp, cộng hưởng tiện ích mua sắm, vui chơi giải trí chỉ trong vài phút di chuyển.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80'
  }
];

export const APARTMENT_UNITS: ApartmentUnit[] = [
  {
    id: 'unit-1',
    code: 'DL-08.01',
    tower: 'Động Lực Tower',
    floor: 8,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 2,
    logia: 1,
    floorRange: 'Tầng 7 - 15',
    carpetArea: 70.50,
    builtUpArea: 76.5,
    direction: 'Nam',
    view: 'Hồ Hạ Đình & công viên xanh mát',
    pricePerSqm: 72.0,
    price: 5076000000,
    originalPrice: 5290000000,
    discountRate: 4.0,
    monthlyEstimate: 24500000,
    status: 'selling_fast',
    statusLabel: 'View Hồ Hạ Đình',
    image: '/assets/units/can_01_2ngu.webp',
    floorPlanUrl: '/assets/units/can_01_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1BYIY_sd638bBmcqigZLaqdjc6lMpbnNv/view?usp=sharing',
    features: ['Ban công hướng Nam mát mẻ', 'View trọn Hồ Hạ Đình vĩnh viễn', '2 Phòng ngủ + 2 WC khép kín', 'Giá chỉ 72.0 tr/m² có VAT'],
    description: 'Căn 01 sở hữu ban công chính Nam đón gió tự nhiên mát lành quanh năm, tầm nhìn trực diện Hồ Hạ Đình. Tiêu chuẩn bàn giao thô giúp gia chủ thỏa sức sáng tạo không gian sống.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Cửa chính chống cháy, vách kính ban công, tường bao trát phẳng, trần bê tông mộc, hệ thống điện nước âm sàn/tường sẵn sàng.'
  },
  {
    id: 'unit-2',
    code: 'DL-18.01',
    tower: 'Động Lực Tower',
    floor: 18,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 2,
    logia: 1,
    floorRange: 'Tầng 16 - 21',
    carpetArea: 70.67,
    builtUpArea: 76.8,
    direction: 'Nam',
    view: 'Hồ Hạ Đình & skyline thành phố',
    pricePerSqm: 73.5,
    price: 5194245000,
    originalPrice: 5410000000,
    discountRate: 4.0,
    monthlyEstimate: 25200000,
    status: 'available',
    statusLabel: 'Tầng Cao View Hồ',
    image: '/assets/units/can_01_2ngu.webp',
    floorPlanUrl: '/assets/units/can_01_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1BYIY_sd638bBmcqigZLaqdjc6lMpbnNv/view?usp=sharing',
    features: ['Tầng 18 tầm nhìn bao quát', 'Ban công Nam đón gió mát', '2WC tiện nghi', 'Bàn giao thô hoặc hoàn thiện'],
    description: 'Căn hộ 01 tầng cao khoáng đạt, diện tích thông thủy 70.67m², đón trọn làn gió mát lành từ Hồ Hạ Đình, ngắm trọn vẹn bình minh và hoàng hôn thủ đô.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Khung vỏ hoàn chỉnh, hệ thống cấp thoát nước, đầu chờ công tơ điện và ống đồng điều hòa.'
  },
  {
    id: 'unit-3',
    code: 'DL-09.02',
    tower: 'Động Lực Tower',
    floor: 9,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 2,
    logia: 1,
    floorRange: 'Tầng 7 - 15',
    carpetArea: 66.48,
    builtUpArea: 72.3,
    direction: 'Nam',
    view: 'Hồ Hạ Đình & quảng trường nội khu',
    pricePerSqm: 72.5,
    price: 4819800000,
    originalPrice: 5020000000,
    discountRate: 4.0,
    monthlyEstimate: 23600000,
    status: 'selling_fast',
    statusLabel: 'Giá Tốt Dưới 5 Tỷ',
    image: '/assets/units/can_02_2ngu.webp',
    floorPlanUrl: '/assets/units/can_02_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1Oe2wiHHOGeFvLN9DQqp9qeZK_ZE4fUvZ/view?usp=sharing',
    features: ['Tổng giá chỉ 4.81 tỷ có VAT', 'Ban công hướng Nam cực mát', 'Bố trí vuông vắn 2PN 2WC', 'Tiết kiệm chi phí nội thất'],
    description: 'Căn 02 diện tích thông thủy 66.48m² tối ưu chi phí, hướng ban công Nam trực diện Hồ Hạ Đình. Khoản đầu tư thông minh cho gia đình trẻ muốn an cư trung tâm Thanh Xuân.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô: Khách hàng tự do hoàn thiện sàn gạch/gỗ, màu sơn tường và hệ tủ bếp theo cá tính và ngân sách riêng.'
  },
  {
    id: 'unit-4',
    code: 'DL-17.02',
    tower: 'Động Lực Tower',
    floor: 17,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 2,
    logia: 1,
    floorRange: 'Tầng 16 - 21',
    carpetArea: 66.92,
    builtUpArea: 72.8,
    direction: 'Nam',
    view: 'Hồ Hạ Đình & toàn cảnh quận Thanh Xuân',
    pricePerSqm: 73.8,
    price: 4938696000,
    originalPrice: 5150000000,
    discountRate: 4.1,
    monthlyEstimate: 24200000,
    status: 'available',
    statusLabel: 'Tầng Cao View Hồ',
    image: '/assets/units/can_02_2ngu.webp',
    floorPlanUrl: '/assets/units/can_02_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1Oe2wiHHOGeFvLN9DQqp9qeZK_ZE4fUvZ/view?usp=sharing',
    features: ['Tầng 17 yên tĩnh thoáng đãng', 'Ban công Nam view hồ xanh', 'Tối ưu công năng 2PN 2WC', 'Hỗ trợ vay 70% lãi suất 0%'],
    description: 'Căn 02 tầng 17 sở hữu tầm view thoáng đãng không góc chết, không gian thông thủy 66.92m² đón trọn vẹn ánh sáng tự nhiên cho cả phòng khách và các phòng ngủ.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Cửa chống cháy, vách kính cách âm, đường ống thoát sàn, aptomat tổng.'
  },
  {
    id: 'unit-5',
    code: 'DL-10.04',
    tower: 'Động Lực Tower',
    floor: 10,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 2,
    logia: 2,
    floorRange: 'Tầng 7 - 15',
    carpetArea: 72.96,
    builtUpArea: 79.2,
    direction: 'Tây Bắc',
    view: 'Metro Nguyễn Trãi & đô thị sôi động',
    pricePerSqm: 72.8,
    price: 5311488000,
    originalPrice: 5540000000,
    discountRate: 4.1,
    monthlyEstimate: 25800000,
    status: 'available',
    statusLabel: '2 Ban Công Thoáng',
    image: '/assets/units/can_04_2ngu.webp',
    floorPlanUrl: '/assets/units/can_04_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1y8uducI4r2QMzWKBkuAmeNnP4A8NFpXt/view?usp=sharing',
    features: ['Sở hữu 2 ban công/logia riêng', 'View Metro Nguyễn Trãi trên cao', 'Phòng khách rộng liên thông bếp', 'Đã bao gồm VAT 100%'],
    description: 'Căn 04 với diện tích thông thủy 72.96m², bố trí 2 phòng ngủ và 2 phòng vệ sinh riêng biệt. Thiết kế 2 logia giúp tối ưu hóa không gian phơi giặt và thư giãn.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô: Cửa chính hoàn chỉnh, logia và lan can an toàn, đầu chờ kỹ thuật điện nước âm tường sẵn sàng đấu nối.'
  },
  {
    id: 'unit-6',
    code: 'DL-19.04',
    tower: 'Động Lực Tower',
    floor: 19,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 2,
    logia: 2,
    floorRange: 'Tầng 16 - 21',
    carpetArea: 73.05,
    builtUpArea: 79.5,
    direction: 'Tây Bắc',
    view: 'Tuyến Metro & Skyline trung tâm',
    pricePerSqm: 74.2,
    price: 5420310000,
    originalPrice: 5660000000,
    discountRate: 4.2,
    monthlyEstimate: 26300000,
    status: 'selling_fast',
    statusLabel: 'Tầng 19 Khoáng Đạt',
    image: '/assets/units/can_04_2ngu.webp',
    floorPlanUrl: '/assets/units/can_04_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1y8uducI4r2QMzWKBkuAmeNnP4A8NFpXt/view?usp=sharing',
    features: ['Diện tích 73.05m² rộng rãi', '2 Logia riêng biệt', 'Ngắm đoàn tàu Metro hiện đại', 'Pháp lý sổ hồng lâu dài'],
    description: 'Căn hộ 04 tầng 19 diện tích 73.05m², tầm nhìn bao quát tuyến đường sắt đô thị và ánh sáng thành phố lung linh về đêm. Không gian linh hoạt tùy biến.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Tường xây bao trát phẳng, sàn cán phẳng, hệ thống điện nước âm sàn sẵn sàng.'
  },
  {
    id: 'unit-7',
    code: 'DL-11.05',
    tower: 'Động Lực Tower',
    floor: 11,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 2,
    logia: 2,
    floorRange: 'Tầng 7 - 15',
    carpetArea: 72.96,
    builtUpArea: 79.2,
    direction: 'Tây Bắc',
    view: 'Metro Nguyễn Trãi & Royal City',
    pricePerSqm: 72.8,
    price: 5311488000,
    originalPrice: 5540000000,
    discountRate: 4.1,
    monthlyEstimate: 25800000,
    status: 'available',
    statusLabel: 'Thiết Kế Cân Đối',
    image: '/assets/units/can_05_2ngu.webp',
    floorPlanUrl: '/assets/units/can_05_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1GVO_2jxVbLlPVEq64oHVpfuS0Lgl79tA/view?usp=sharing',
    features: ['2 Ban công/logia riêng biệt', '2 Phòng ngủ đón sáng tự nhiên', 'Bếp chữ L thông thoáng', 'Tự do hoàn thiện nội thất'],
    description: 'Căn 05 thiết kế đối xứng hài hòa với Căn 04, diện tích 72.96m² thông thủy, các phòng chức năng tách biệt vuông vức, tối ưu từng mét vuông sử dụng.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Khách hàng chủ động chọn vật liệu hoàn thiện, tiết kiệm từ 150 - 300 triệu so với gói ép buộc.'
  },
  {
    id: 'unit-8',
    code: 'DL-20.05',
    tower: 'Động Lực Tower',
    floor: 20,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 2,
    logia: 2,
    floorRange: 'Tầng 16 - 21',
    carpetArea: 73.05,
    builtUpArea: 79.5,
    direction: 'Tây Bắc',
    view: 'Toàn cảnh đại lộ Nguyễn Trãi lung linh',
    pricePerSqm: 74.2,
    price: 5420310000,
    originalPrice: 5660000000,
    discountRate: 4.2,
    monthlyEstimate: 26300000,
    status: 'last_units',
    statusLabel: 'Tầng 20 VIP',
    image: '/assets/units/can_05_2ngu.webp',
    floorPlanUrl: '/assets/units/can_05_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1GVO_2jxVbLlPVEq64oHVpfuS0Lgl79tA/view?usp=sharing',
    features: ['Tầng 20 tầm nhìn khoáng đạt', '2 Logia đón gió đối lưu', 'Phòng khách 28m2 rộng rãi', 'Chiết khấu thanh toán sớm'],
    description: 'Căn hộ 05 tầng 20 diện tích 73.05m² trên tầng cao, không gian sống tràn ngập gió trời và ánh sáng. Lựa chọn tuyệt vời cho gia đình trẻ năng động.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô: Khung vỏ bê tông mộc, cửa nhôm kính chất lượng cao, đầu chờ điều hòa và hệ thống phòng cháy chữa cháy tiêu chuẩn mới.'
  },
  {
    id: 'unit-9',
    code: 'DL-12.07',
    tower: 'Động Lực Tower',
    floor: 12,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 1,
    logia: 1,
    floorRange: 'Tầng 7 - 15',
    carpetArea: 49.67,
    builtUpArea: 54.2,
    direction: 'Đông',
    view: 'Khương Đình & đón bình minh rạng rỡ',
    pricePerSqm: 73.0,
    price: 3625910000,
    originalPrice: 3800000000,
    discountRate: 4.5,
    monthlyEstimate: 18200000,
    status: 'selling_fast',
    statusLabel: 'Chỉ 3.6 Tỷ - Cực Hiếm',
    image: '/assets/units/can_07_2ngu.webp',
    floorPlanUrl: '/assets/units/can_07_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/11gcFm9UZg-vWCqlqic_-aAU5ADdZd0ih/view?usp=sharing',
    features: ['Tổng giá chỉ 3.62 tỷ ĐÃ GỒM VAT', 'Căn 2 phòng ngủ giá tốt nhất dự án', 'Ban công hướng Đông đón bình minh', 'Vốn tự có ban đầu chỉ từ 1.08 tỷ'],
    description: 'Căn 07 diện tích 49.67m² - căn hộ 2 phòng ngủ có tổng giá tốt nhất tại Động Lực Tower (chỉ 3.62 tỷ). Cực kỳ phù hợp cho người trẻ độc thân hoặc gia đình trẻ tích lũy.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Cửa chính chống cháy, logia hoàn chỉnh, sẵn sàng lắp đặt nội thất thông minh.'
  },
  {
    id: 'unit-10',
    code: 'DL-16.07',
    tower: 'Động Lực Tower',
    floor: 16,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 1,
    logia: 1,
    floorRange: 'Tầng 16 - 21',
    carpetArea: 50.20,
    builtUpArea: 54.8,
    direction: 'Đông',
    view: 'Khương Đình & trung tâm thành phố',
    pricePerSqm: 74.0,
    price: 3714800000,
    originalPrice: 3890000000,
    discountRate: 4.5,
    monthlyEstimate: 18600000,
    status: 'available',
    statusLabel: 'Tầng 16 Đẹp Nhất',
    image: '/assets/units/can_07_2ngu.webp',
    floorPlanUrl: '/assets/units/can_07_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/11gcFm9UZg-vWCqlqic_-aAU5ADdZd0ih/view?usp=sharing',
    features: ['Diện tích 50.20m² thông minh', 'Ban công hướng Đông râm mát chiều', 'Chi phí vừa tầm, thanh khoản cao', 'Hỗ trợ vay 70% ngân hàng'],
    description: 'Căn 07 tầng 16 diện tích 50.20m², thiết kế tối ưu hóa từng góc nhỏ, không gian mở liền mạch, mức giá 3.71 tỷ hấp dẫn nhất phân khúc căn hộ nội đô Thanh Xuân.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Hoàn thiện cửa chính, ban công, đầu chờ điện âm tường và cấp thoát nước.'
  },
  {
    id: 'unit-11',
    code: 'DL-08.08',
    tower: 'Động Lực Tower',
    floor: 8,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 2,
    logia: 2,
    floorRange: 'Tầng 7 - 15',
    carpetArea: 72.76,
    builtUpArea: 79.0,
    direction: 'Đông',
    view: 'Khương Đình & công viên thoáng đãng',
    pricePerSqm: 73.2,
    price: 5326032000,
    originalPrice: 5560000000,
    discountRate: 4.2,
    monthlyEstimate: 25900000,
    status: 'selling_fast',
    statusLabel: 'Căn Góc Kim Cương',
    image: '/assets/units/can_08_2ngu.webp',
    floorPlanUrl: '/assets/units/can_08_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1VQcJKVZbW8t_Ah8bQV_FSBZNhcWfxMJ-/view?usp=sharing',
    features: ['Thiết kế kim cương độc bản', '2 Ban công/logia hướng Đông', '2 Phòng ngủ Master riêng tư', 'Đón gió và ánh sáng trọn vẹn'],
    description: 'Căn 08 sở hữu hình khối kiến trúc kim cương độc đáo, 2 mặt thoáng rộng mở, diện tích thông thủy 72.76m² cả tầng thấp và tầng cao. Bố cục không gian đẳng cấp khác biệt.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô: Gia chủ tự do kiến tạo phong cách nội thất Indochine, Modern Luxury hoặc Scandinavian theo gu thẩm mỹ cá nhân.'
  },
  {
    id: 'unit-12',
    code: 'DL-21.08',
    tower: 'Động Lực Tower',
    floor: 21,
    type: '2PN',
    bedrooms: 2,
    bathrooms: 2,
    logia: 2,
    floorRange: 'Tầng 16 - 21',
    carpetArea: 72.76,
    builtUpArea: 79.0,
    direction: 'Đông',
    view: 'Panorama toàn cảnh quận Thanh Xuân & sông Tô Lịch',
    pricePerSqm: 74.5,
    price: 5420620000,
    originalPrice: 5670000000,
    discountRate: 4.4,
    monthlyEstimate: 26300000,
    status: 'last_units',
    statusLabel: 'Tầng 21 Cao Nhất',
    image: '/assets/units/can_08_2ngu.webp',
    floorPlanUrl: '/assets/units/can_08_2ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1VQcJKVZbW8t_Ah8bQV_FSBZNhcWfxMJ-/view?usp=sharing',
    features: ['Tầng 21 đỉnh cao dự án', '2 Ban công panorama không che chắn', 'Không gian thô nguyên bản sáng tạo', 'Chỉ duy nhất 1 căn cuối cùng'],
    description: 'Căn 08 tầng 21 là căn hộ cao nhất thuộc dòng thiết kế kim cương, sở hữu tầm nhìn panorama 180 độ không giới hạn. Tuyệt tác an cư dành riêng cho chủ nhân tinh hoa.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Cửa chống cháy vân gỗ, kính Low-E tràn viền, hệ thống điện nước âm sàn hoàn chỉnh.'
  },
  {
    id: 'unit-13',
    code: 'DL-08.03',
    tower: 'Động Lực Tower',
    floor: 8,
    type: '3PN',
    bedrooms: 3,
    bathrooms: 2,
    logia: 3,
    floorRange: 'Tầng 7 - 15',
    carpetArea: 91.69,
    builtUpArea: 99.5,
    direction: 'Tây Nam & Tây Bắc',
    view: 'Ngã tư Khuất Duy Tiến & Tuyến Metro',
    pricePerSqm: 72.5,
    price: 6647525000,
    originalPrice: 6920000000,
    discountRate: 4.0,
    monthlyEstimate: 32200000,
    status: 'selling_fast',
    statusLabel: 'Căn Góc 3 Logia',
    image: '/assets/units/can_03_3ngu.webp',
    floorPlanUrl: '/assets/units/can_03_3ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1GynkwrasagYMLeIeB07njeOqjN2tI0_x/view?usp=sharing',
    features: ['Căn góc 2 mặt thoáng TN & TB', 'View ngã tư Khuất Duy Tiến & Metro', '3 Phòng ngủ + 2 WC + 3 Logia', 'Không gian thô tùy biến đẳng cấp'],
    description: 'Căn 03 là căn góc 3 phòng ngủ sở hữu 2 mặt thoáng hướng Tây Nam & Tây Bắc, view trọn vẹn ngã tư Khuất Duy Tiến và tuyến Metro hiện đại. Thiết kế 3 logia đón gió thông thoáng.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Cửa chính chống cháy, logia và lan can kính an toàn, hệ thống cấp thoát nước và đầu chờ điện sẵn sàng.'
  },
  {
    id: 'unit-14',
    code: 'DL-18.03',
    tower: 'Động Lực Tower',
    floor: 18,
    type: '3PN',
    bedrooms: 3,
    bathrooms: 2,
    logia: 3,
    floorRange: 'Tầng 16 - 21',
    carpetArea: 91.97,
    builtUpArea: 99.8,
    direction: 'Tây Nam & Tây Bắc',
    view: 'Skyline ngã tư Khuất Duy Tiến & toàn cảnh phía Tây',
    pricePerSqm: 73.8,
    price: 6787386000,
    originalPrice: 7060000000,
    discountRate: 4.0,
    monthlyEstimate: 32800000,
    status: 'available',
    statusLabel: 'Tầng 18 Cực Thoáng',
    image: '/assets/units/can_03_3ngu.webp',
    floorPlanUrl: '/assets/units/can_03_3ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1GynkwrasagYMLeIeB07njeOqjN2tI0_x/view?usp=sharing',
    features: ['Tầng 18 tầm view triệu đô', 'Diện tích 91.97m² thông thủy', '3 Logia cực đại đón gió', 'Ưu đãi lãi suất 0% CĐT'],
    description: 'Căn hộ 03 tầng 18 diện tích 91.97m² thông thủy, tầm nhìn trên cao bao quát toàn bộ sự sôi động của ngã tư trung tâm Khuất Duy Tiến. Bố trí 3 phòng ngủ riêng tư tối đa.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Khung vỏ hoàn chỉnh, hệ thống cấp thoát nước, đầu chờ kỹ thuật điện nước âm tường.'
  },
  {
    id: 'unit-15',
    code: 'DL-10.06',
    tower: 'Động Lực Tower',
    floor: 10,
    type: '3PN',
    bedrooms: 3,
    bathrooms: 2,
    logia: 3,
    floorRange: 'Tầng 7 - 15',
    carpetArea: 93.96,
    builtUpArea: 101.8,
    direction: 'Tây Bắc & Đông Bắc',
    view: 'Metro Nguyễn Trãi & Ngã Tư Sở',
    pricePerSqm: 72.8,
    price: 6840288000,
    originalPrice: 7120000000,
    discountRate: 4.1,
    monthlyEstimate: 33100000,
    status: 'selling_fast',
    statusLabel: 'View Tuyến Metro',
    image: '/assets/units/can_06_3ngu.webp',
    floorPlanUrl: '/assets/units/can_06_3ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1P3FqT460XabwPZg7xeIxujC4DOitSk6Q/view?usp=sharing',
    features: ['Vị trí căn góc 2 mặt thoáng', 'View tuyến đường sắt Metro trên cao', '3 Phòng ngủ vuông vắn, 3 Logia', 'Giá 72.8 tr/m² ĐÃ GỒM VAT'],
    description: 'Căn 06 sở hữu vị trí góc 2 mặt thoáng Tây Bắc & Đông Bắc, tầm nhìn panorama hướng tuyến Metro Nguyễn Trãi và Ngã Tư Sở. Cơ cấu không gian 3 phòng ngủ thông minh cùng 3 logia mát lành.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô: Gia chủ thỏa sức thiết kế nội thất căn hộ gia đình 3 thế hệ theo phong cách hiện đại.'
  },
  {
    id: 'unit-16',
    code: 'DL-19.06',
    tower: 'Động Lực Tower',
    floor: 19,
    type: '3PN',
    bedrooms: 3,
    bathrooms: 2,
    logia: 3,
    floorRange: 'Tầng 16 - 23',
    carpetArea: 93.87,
    builtUpArea: 101.8,
    direction: 'Tây Bắc & Đông Bắc',
    view: 'Ngắm đoàn tàu Metro & Skyline thành phố',
    pricePerSqm: 74.0,
    price: 6946380000,
    originalPrice: 7240000000,
    discountRate: 4.2,
    monthlyEstimate: 33600000,
    status: 'available',
    statusLabel: 'Tầng 19 Khoáng Đạt',
    image: '/assets/units/can_06_3ngu.webp',
    floorPlanUrl: '/assets/units/can_06_3ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1P3FqT460XabwPZg7xeIxujC4DOitSk6Q/view?usp=sharing',
    features: ['Tầng 19 tầm nhìn không giới hạn', 'Thiết kế 3 phòng ngủ master', '3 Ban công đón gió đối lưu', 'Sổ hồng sở hữu lâu dài'],
    description: 'Căn hộ 06 tầng 19 diện tích 93.87m² thông thủy, tầm view đỉnh cao bao trọn tuyến đường sắt đô thị và ánh sáng lung linh của thành phố.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Cửa chống cháy, vách kính cách âm, sàn cán phẳng, hệ thống điện nước âm sàn.'
  },
  {
    id: 'unit-17',
    code: 'DL-09.09',
    tower: 'Động Lực Tower',
    floor: 9,
    type: '3PN',
    bedrooms: 3,
    bathrooms: 2,
    logia: 2,
    floorRange: 'Tầng 7 - 15',
    carpetArea: 96.98,
    builtUpArea: 105.2,
    direction: 'Đông Nam',
    view: 'Khương Đình & Hồ Hạ Đình',
    pricePerSqm: 73.5,
    price: 7128030000,
    originalPrice: 7420000000,
    discountRate: 4.1,
    monthlyEstimate: 34500000,
    status: 'selling_fast',
    statusLabel: 'Căn Hoa Hậu Đông Nam',
    image: '/assets/units/can_09_3ngu.webp',
    floorPlanUrl: '/assets/units/can_09_3ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1xEjMF-LWdNsiu_KeKsqkyN3v_lmagCoS/view?usp=sharing',
    features: ['Ban công chính Đông Nam vượng khí', 'Tầm nhìn trực diện Hồ Hạ Đình', 'Diện tích 96.98m² rộng nhất', '3 Phòng ngủ lớn + 2 Logia'],
    description: 'Căn 09 là căn 3 phòng ngủ hoa hậu với ban công chính Đông Nam đón gió lành mát mẻ quanh năm. Tầm nhìn thoáng đãng về Hồ Hạ Đình và Khương Đình.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Khung vỏ bê tông mộc, ban công kính cường lực, đường ống cấp thoát nước và đầu chờ kỹ thuật.'
  },
  {
    id: 'unit-18',
    code: 'DL-17.09',
    tower: 'Động Lực Tower',
    floor: 17,
    type: '3PN',
    bedrooms: 3,
    bathrooms: 2,
    logia: 2,
    floorRange: 'Tầng 16 - 21',
    carpetArea: 97.38,
    builtUpArea: 105.6,
    direction: 'Đông Nam',
    view: 'Hồ Hạ Đình & toàn cảnh Đông Nam Hà Nội',
    pricePerSqm: 74.8,
    price: 7284024000,
    originalPrice: 7590000000,
    discountRate: 4.2,
    monthlyEstimate: 35200000,
    status: 'last_units',
    statusLabel: 'Tầng 17 VIP View Hồ',
    image: '/assets/units/can_09_3ngu.webp',
    floorPlanUrl: '/assets/units/can_09_3ngu.webp',
    driveUrl: 'https://drive.google.com/file/d/1xEjMF-LWdNsiu_KeKsqkyN3v_lmagCoS/view?usp=sharing',
    features: ['Diện tích đỉnh cao 97.38m²', 'Hướng Đông Nam mát lạnh mùa hè', 'View trọn vẹn mặt nước Hồ Hạ Đình', 'Vị trí độc tôn tầng cao'],
    description: 'Căn 09 tầng 17 là căn hộ 3 phòng ngủ đẳng cấp bậc nhất tại Động Lực Tower với diện tích thông thủy 97.38m², ban công Đông Nam ngắm trọn vẹn mặt nước hồ trong xanh.',
    handoverType: 'raw_creative',
    furnishingStandard: 'Bàn giao thô không gian sáng tạo: Khách hàng tự do kiến tạo không gian biệt thự trên không (Sky Villa) theo phong cách thượng lưu.'
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'am-1',
    name: 'Trung tâm Thương mại & Dịch vụ Chân đế',
    category: 'commercial',
    description: 'Hội tụ các siêu thị tiện lợi, cửa hàng thực phẩm hữu cơ, cafe phong cách và nhà hàng phục vụ cư dân ngay dưới thềm nhà.',
    image: 'https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=800&q=80',
    highlight: 'Mua sắm & giải trí 1 chạm'
  },
  {
    id: 'am-2',
    name: 'Khu Sinh hoạt Cộng đồng Đa năng',
    category: 'relax',
    description: 'Nơi kết nối cư dân văn minh, tổ chức các buổi hội thảo, sinh nhật và câu lạc bộ nghệ thuật cộng đồng.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    highlight: 'Không gian ấm cúng sang trọng'
  },
  {
    id: 'am-3',
    name: 'Phòng Gym & Fitness Hiện Đại',
    category: 'sport',
    description: 'Hệ thống máy chạy bộ, tạ đa năng và khu tập Yoga ánh sáng tự nhiên giúp rèn luyện thể chất mỗi ngày.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    highlight: 'Trang thiết bị chuyên nghiệp'
  },
  {
    id: 'am-4',
    name: 'Khu vui chơi trẻ em KidZone',
    category: 'family',
    description: 'Sân chơi sáng tạo kích thích tư duy, sàn cao su chống va đập an toàn tuyệt đối cho các thiên thần nhỏ.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    highlight: 'An toàn & Sạch sẽ cho bé'
  },
  {
    id: 'am-5',
    name: 'Vườn Cảnh Quan & Đường Dạo Bộ',
    category: 'relax',
    description: 'Mảng xanh mát với cây hoa theo mùa, ghế nghỉ thư giãn tạo bầu không khí trong lành giữa lòng đô thị.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    highlight: 'Sinh thái xanh mát lành'
  },
  {
    id: 'am-6',
    name: 'Nhà để xe thông minh 3 tầng hầm',
    category: 'commercial',
    description: '3 tầng hầm rộng rãi kết nối đồng bộ giữa 2 tòa tháp, camera an ninh 24/7 và hệ thống kiểm soát xe thẻ từ hiện đại.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
    highlight: '3 Tầng hầm giải tỏa áp lực đỗ xe'
  }
];

export const LOCATION_CONNECTIONS: LocationConnection[] = [
  { place: 'ĐH Khoa học Tự nhiên & ĐH KHXH&NV', time: '5 phút', distance: '1.2 km', type: 'education' },
  { place: 'Trung tâm TM Vincom Nguyễn Trãi / Royal City', time: '7 - 10 phút', distance: '2.0 km', type: 'shopping' },
  { place: 'Bệnh viện Bạch Mai & Việt Pháp', time: '10 phút', distance: '3.8 km', type: 'medical' },
  { place: 'Tuyến Metro Cát Linh - Hà Đông (Ga Thượng Đình)', time: '3 phút', distance: '800 m', type: 'transport' },
  { place: 'Ngã tư Khuất Duy Tiến - Vành Đai 3', time: '4 phút', distance: '1.0 km', type: 'transport' },
  { place: 'Hồ Hoàn Kiếm & Phố Cổ Hà Nội', time: '15 - 20 phút', distance: '6.5 km', type: 'transport' }
];

export const PAYMENT_STAGES: PaymentStage[] = [
  { stage: 1, milestone: 'Đặt cọc giữ chỗ căn hộ', percentage: 10, note: '50.000.000 VNĐ đặt cọc (Khấu trừ vào đợt 1)' },
  { stage: 2, milestone: 'Ký Hợp đồng Mua bán (Xong phần móng & hầm)', percentage: 20, note: 'Dự kiến trong vòng 10 ngày sau khi đặt cọc' },
  { stage: 3, milestone: 'Xây dựng xong tầng 10', percentage: 15, note: 'Theo tiến độ thi công thực tế' },
  { stage: 4, milestone: 'Xây dựng xong tầng 20', percentage: 15, note: 'Theo tiến độ thi công thực tế' },
  { stage: 5, milestone: 'Cất nóc công trình (Tầng 24)', percentage: 10, note: 'Q2/2026' },
  { stage: 6, milestone: 'Bàn giao căn hộ (Bàn giao thô)', percentage: 25, note: 'Q2/2027 + 2% Phí bảo trì' },
  { stage: 7, milestone: 'Nhận Giấy chứng nhận quyền sở hữu (Sổ hồng)', percentage: 5, note: 'CĐT bàn giao sổ hồng lâu dài' }
];

export const FAQS = [
  {
    q: 'Chiến dịch "Không gian sáng tạo" bàn giao thô mang lại lợi ích gì cho người mua?',
    a: 'Chiến dịch "Không gian sáng tạo" bàn giao thô tại Động Lực Tower giúp người mua tiết kiệm trực tiếp từ 200 - 400 triệu đồng so với căn hộ hoàn thiện trọn gói. Bạn không phải chịu chi phí cho các gói nội thất không đúng ý, không mất công đập phá hay sửa chữa lại tường/sàn cũ. Căn hộ đã được hoàn thiện sẵn cửa ra vào, lan can ban công, đi dây điện âm tường và đầu chờ cấp thoát nước, giúp bạn dễ dàng décor tự do theo gu riêng.'
  },
  {
    q: 'Mức giá 7x triệu/m² đã bao gồm thuế VAT chưa?',
    a: 'Mức giá từ 7x triệu/m² của Động Lực Tower đã CHÍNH THỨC BAO GỒM THUẾ VAT 100%. Đây là mức giá niêm yết minh bạch, cạnh tranh vượt trội tại trục đường Hạ Đình, quận Thanh Xuân so với các dự án lân cận đang giao dịch từ 90 - 110 triệu/m².'
  },
  {
    q: 'Chiến dịch ưu đãi này áp dụng đến thời gian nào?',
    a: 'Chính sách giá đặc biệt từ 7x triệu/m² và giỏ hàng Không gian sáng tạo được áp dụng đến HẾT THÁNG 9/2026. Quý khách vui lòng liên hệ sớm hotline 0565 130 130 để chọn được tầng và hướng ưng ý trong số 156 căn giới hạn.'
  },
  {
    q: 'Pháp lý dự án và tiến độ hiện tại như thế nào?',
    a: 'Động Lực Tower có pháp lý hoàn thiện 100%, đủ điều kiện ký Hợp đồng mua bán trực tiếp với Chủ đầu tư CTCP Động Lực, sở hữu Sổ hồng lâu dài. Dự án hiện đã hoàn thành xong phần hầm và móng, đang thi công các tầng nổi, dự kiến cất nóc Q2/2026 và bàn giao nhà vào Q2/2027.'
  },
  {
    q: 'Chính sách hỗ trợ vay vốn ngân hàng ra sao?',
    a: 'Ngân hàng đối tác tài trợ gói vay đặc quyền: Hỗ trợ lãi suất 0% cho 65% giá trị căn hộ đến hết ngày 31/12/2027 (trần lãi suất 12%). Thời hạn vay linh hoạt đến 20-25 năm.'
  },
  {
    q: 'Chính sách bán hàng và các chương trình chiết khấu hiện tại như thế nào?',
    a: 'Động Lực Tower đang áp dụng 4 gói ưu đãi đặc quyền:\n1. Chiết khấu đặt cọc: Căn 2N chiết khấu 3%, Căn 3N chiết khấu 6% (áp dụng đến ngày 31/7/2026).\n2. Chiết khấu thanh toán sớm: TT sớm 50% chiết khấu 9%, TT sớm 70% chiết khấu 10%, TT sớm 95% chiết khấu 11% (không bao gồm VAT và KPBT).\n3. Chiết khấu thanh toán tiến độ: Chiết khấu 5% (không bao gồm VAT và KPBT).\n4. Hỗ trợ lãi suất 0% với 65% GTCH đến ngày 31/12/2027 (Trần lãi suất 12%).'
  }
];

export const VIRTUAL_ADVISOR_KNOWLEDGE = [
  {
    keywords: ['chủ đầu tư', 'cđt', 'động lực', 'cen land', 'cenland', 'phát triển', 'phân phối'],
    reply: 'Kính chào Quý khách! Dự án Động Lực Tower được triển khai bởi:\n• Chủ đầu tư: Công ty Cổ phần Tập đoàn Động Lực (Động Lực Group).\n• Đơn vị tư vấn & phát triển kinh doanh độc quyền: Công ty Cổ phần Bất động sản Thế Kỷ (Cen Land).\nPháp lý minh bạch 100%, sở hữu sổ hồng lâu dài, ký HĐMB trực tiếp với CĐT.'
  },
  {
    keywords: ['pháp lý', 'sổ hồng', 'sổ đỏ', 'gpxd', 'giấy phép xây dựng', 'hợp đồng mua bán', 'hdmb', 'lâu dài', 'vĩnh viễn'],
    reply: 'Dạ, pháp lý Động Lực Tower hoàn thiện 100%:\n• Sổ hồng lâu dài (sở hữu vĩnh viễn) trao tay cư dân.\n• Giấy phép xây dựng số 42/GPXD do Sở Xây Dựng Hà Nội cấp phép (24 tầng nổi + 3 tầng hầm).\n• Đã nghiệm thu hầm móng và đủ điều kiện bán nhà ở hình thành trong tương lai.'
  },
  {
    keywords: ['chính sách', 'chiết khấu', 'thanh toán sớm', 'lãi suất', 'ưu đãi', 'csbh', 'khuyến mại'],
    reply: 'Kính chào Quý khách! Chính sách bán hàng Động Lực Tower gồm 4 gói ưu đãi đặc quyền:\n1. Chiết khấu đặt cọc: Căn 2PN chiết khấu 3% | Căn 3PN chiết khấu 6% (đến 31/7/2026)\n2. Chiết khấu TT sớm: 50% chiết khấu 9% | 70% chiết khấu 10% | 95% chiết khấu 11% (chưa VAT & KPBT)\n3. Chiết khấu TT tiến độ: 5% (chưa VAT & KPBT)\n4. Hỗ trợ lãi suất 0% với 65% GTCH đến 31/12/2027 (trần 12%), ân hạn nợ gốc.'
  },
  {
    keywords: ['ngân hàng', 'vay', 'lãi suất 0%', 'hỗ trợ lãi suất', 'vietcombank', 'mbbank', 'bidv', 'ân hạn'],
    reply: 'Dạ, chính sách hỗ trợ tài chính từ ngân hàng:\n• Ngân hàng hỗ trợ vay 65% - 70% GTCH.\n• Hỗ trợ lãi suất 0% cho 65% giá trị căn hộ đến ngày 31/12/2027 (trần 12%).\n• Ân hạn nợ gốc trong suốt thời gian hỗ trợ lãi suất.\n• Ngân hàng đối tác: Vietcombank, MB Bank, BIDV... Thời hạn vay lên tới 20-25 năm.'
  },
  {
    keywords: ['giá', 'bao nhiêu', '7x', 'vat', 'm2', 'bảng giá', 'tổng tiền'],
    reply: 'Kính chào Quý khách! Giá bán Động Lực Tower hiện tại CHỈ TỪ 7x TRIỆU/M² ĐÃ BAO GỒM 100% THUẾ VAT!\n• Căn 2PN (64.68 - 72.68 m²): Từ khoảng 4.68 tỷ - 5.39 tỷ VNĐ (đã gồm VAT)\n• Căn 3PN (86.5 - 102.4 m²): Từ khoảng 6.47 tỷ - 7.8 tỷ VNĐ (đã gồm VAT)\nMức giá này áp dụng trong chiến dịch Không Gian Sáng Tạo đến HẾT THÁNG 9/2026!'
  },
  {
    keywords: ['thô', 'không gian sáng tạo', 'bàn giao thô', 'nội thất', '300tr', 'quà tặng', 'tiêu chuẩn bàn giao'],
    reply: 'Dạ, hiện tại dự án đang triển khai CHIẾN DỊCH: KHÔNG GIAN SÁNG TẠO (BÀN GIAO THÔ), không còn áp dụng chương trình quà tặng nội thất 300 triệu cũ.\nCăn hộ bàn giao thô giúp Quý khách:\n• Tiết kiệm ngay 200 - 400 triệu đồng so với căn hoàn thiện.\n• Danh mục bàn giao đã có: Cửa chống cháy khóa từ, vách kính cách âm, đi dây điện âm tường, đầu chờ cấp thoát nước, đầu chờ ống đồng điều hòa.\n• Tự do thiết kế và hoàn thiện nội thất theo gu riêng của gia đình.'
  },
  {
    keywords: ['căn 2', '2pn', '2 phòng ngủ', '2 ngủ', 'căn 01', 'căn 02', 'căn 04', 'căn 05'],
    reply: 'Dạ, dòng Căn hộ 2 Phòng Ngủ tại Động Lực Tower:\n• Thiết kế: 2PN + 2WC + 1 Logia, diện tích từ 64.68 m² đến 72.68 m².\n• Căn 01 (70.50 - 70.67 m²): Ban công Nam view trọn Hồ Hạ Đình cực đẹp.\n• Căn 02 (66.48 - 66.92 m²): Ban công Nam view hồ, giá từ 4.81 tỷ (có VAT).\n• Căn 04 (71.74 - 72.68 m²): Ban công Đông Nam mát mẻ.\n• Căn 05 (64.68 - 65.51 m²): Giá tối ưu nhất từ 4.68 tỷ (có VAT).'
  },
  {
    keywords: ['căn 3', '3pn', '3 phòng ngủ', '3 ngủ', 'căn 03', 'căn 06', 'căn 07', 'căn 08'],
    reply: 'Dạ, dòng Căn hộ 3 Phòng Ngủ tại Động Lực Tower:\n• Thiết kế: 3PN + 2WC + 2 Logia, diện tích từ 86.50 m² đến 102.40 m².\n• Căn 03 (93.12 - 93.38 m²): Căn góc 2 mặt thoáng view Hồ Hạ Đình.\n• Căn 06 (100.91 - 102.40 m²): Căn hộ diện tích lớn nhất, không gian Sky Villa rộng rãi.\n• Căn 07 (86.50 - 87.05 m²): 3 phòng ngủ đều có ánh sáng tự nhiên.\n• Căn 08 (93.12 - 93.38 m²): Căn góc view thoáng đãng, giá từ 6.47 tỷ (có VAT).'
  },
  {
    keywords: ['quy mô', 'mấy tầng', 'bao nhiêu tầng', 'mấy hầm', 'mấy căn', 'thang máy', 'đỗ xe', 'gửi xe', 'chỗ để xe', 'ô tô'],
    reply: 'Dạ, thông số kỹ thuật Động Lực Tower:\n• Quy mô: 01 tòa tháp 24 tầng nổi + 3 tầng hầm đỗ xe rộng rãi.\n• Số lượng căn hộ: Duy nhất 156 căn hộ VIP (~8 căn/sàn).\n• Thang máy: 4 thang máy tốc độ cao (chỉ ~39 căn/thang, không lo tắc thang máy).\n• Chỗ đỗ xe: 3 tầng hầm đáp ứng 100% chỗ đỗ ô tô và xe máy cho cư dân.'
  },
  {
    keywords: ['tiện ích', 'bể bơi', 'gym', 'nhà trẻ', 'sinh hoạt cộng đồng', 'công viên', 'thương mại'],
    reply: 'Dạ, hệ thống tiện ích đẳng cấp tại Động Lực Tower:\n• 3 tầng khối đế là Trung tâm thương mại dịch vụ sầm uất.\n• Khu sinh hoạt cộng đồng đa năng rộng rãi (đã cập nhật ảnh thực tế).\n• Phòng Gym & Fitness hiện đại, khu tập Yoga.\n• Nhà trẻ thông minh nội khu an toàn, thuận tiện đưa đón con nhỏ.\n• Công viên cây xanh, đường dạo bộ và cách Hồ Hạ Đình chỉ 100m.\n• An ninh đa lớp 24/7 với thẻ từ phân tầng.'
  },
  {
    keywords: ['địa chỉ', 'ở đâu', 'hạ đình', 'thanh xuân', 'vị trí', 'hồ hạ đình', 'giao thông'],
    reply: 'Dự án Động Lực Tower tọa lạc tại số 130 Hạ Đình, Phường Hạ Đình, Quận Thanh Xuân, Hà Nội.\n• Cách Hồ Hạ Đình chỉ 100m (2 phút đi bộ).\n• Cách ga Metro Thượng Đình (Cát Linh - Hà Đông) chỉ 800m.\n• Kết nối thuận tiện trục Nguyễn Trãi (500m), Vành Đai 3 (1km) và Royal City (7-10 phút).'
  },
  {
    keywords: ['tiến độ', 'khi nào giao', 'bàn giao', 'thời gian', 'cất nóc'],
    reply: 'Tiến độ Động Lực Tower thực tế:\n• Q3/2024: Đã hoàn thành 3 tầng hầm & phần móng.\n• Q4/2024: Đang thi công kết cấu phần thân tầng nổi.\n• Q2/2025: Dự kiến cất nóc toàn bộ 24 tầng.\n• Q2/2027: Bàn giao căn hộ chính thức cho cư dân về ở.'
  },
  {
    keywords: ['thời hạn', 'tháng 9', 'hạn', 'khi nào hết hạn', 'hạn chót'],
    reply: 'Chiến dịch Không Gian Sáng Tạo với mức giá từ 7x triệu/m² (đã có VAT) áp dụng ĐẾN HẾT THÁNG 9/2026. Số lượng căn hộ toàn dự án chỉ có 156 căn VIP, Quý khách nên đăng ký sớm để chọn tầng đẹp!'
  },
  {
    keywords: ['xe đưa đón', 'xem nhà', 'xem thực tế', 'tham quan', 'hotline', 'liên hệ'],
    reply: 'Dạ, Cen Land có xe ô tô chuyên dụng đưa đón Quý khách tham quan thực tế dự án 130 Hạ Đình hoàn toàn MIỄN PHÍ. Quý khách có thể bấm nút "Đăng ký xe đón xem dự án" hoặc gọi Hotline 0565 130 130 để đặt lịch ngay ạ!'
  }
];

export function formatVND(amount: number): string {
  if (amount >= 1000000000) {
    const billions = amount / 1000000000;
    return `${billions.toFixed(2).replace(/\.00$/, '')} tỷ`;
  }
  if (amount >= 1000000) {
    const millions = amount / 1000000;
    return `${millions.toFixed(1).replace(/\.0$/, '')} triệu`;
  }
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

export function formatFullVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN').format(amount) + ' VNĐ';
}
