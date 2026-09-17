import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import persistedData from '../data/persistedCustomImages.json';
import { 
  saveImageToDb, 
  saveAllImagesToDb,
  getAllImagesFromDb, 
  deleteImageFromDb, 
  clearAllImagesFromDb 
} from '../utils/imageDb';

export interface ImageSlotInfo {
  id: string;
  name: string;
  section: string;
  defaultUrl: string;
  description: string;
  suggestedSize: string;
}

export const DEFAULT_IMAGE_SLOTS: Record<string, ImageSlotInfo> = {
  hero_banner_full: {
    id: 'hero_banner_full',
    name: 'Banner Toàn Cảnh Key Visual (Tùy chọn tải ảnh nguyên tấm)',
    section: 'Banner Đầu Trang',
    defaultUrl: '',
    description: 'Tải ảnh nguyên tấm Key Visual ngang (như file thiết kế của bạn)',
    suggestedSize: '1920 x 700 px (Panoramic)'
  },
  hero_building: {
    id: 'hero_building',
    name: 'Tòa Tháp Động Lực Tower (Hero)',
    section: 'Banner Đầu Trang',
    defaultUrl: '/assets/dongluc_facade_matsau.jpg',
    description: 'Ảnh phối cảnh mặt ngoài tòa tháp Động Lực Tower chính thức',
    suggestedSize: '1200 x 900 px (Dọc hoặc 4:3)'
  },
  hero_creator_male: {
    id: 'hero_creator_male',
    name: 'Góc Phòng Gamer / Creator Nam (Hero)',
    section: 'Banner Đầu Trang',
    defaultUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    description: 'Nam cư dân trẻ năng động trong phòng setup sáng tạo / gaming',
    suggestedSize: '800 x 1000 px'
  },
  hero_creator_female: {
    id: 'hero_creator_female',
    name: 'Góc Sáng Tạo / Vlogger Nữ (Hero)',
    section: 'Banner Đầu Trang',
    defaultUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    description: 'Nữ cư dân trẻ chụp ảnh / làm việc tại bàn trà phong cách',
    suggestedSize: '800 x 1000 px'
  },
  creative_living: {
    id: 'creative_living',
    name: 'Không Gian Phòng Khách',
    section: 'Không Gian Sáng Tạo',
    defaultUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Ảnh không gian phòng khách hiện đại mở',
    suggestedSize: '800 x 600 px'
  },
  creative_person: {
    id: 'creative_person',
    name: 'Cư Dân Thư Giãn',
    section: 'Không Gian Sáng Tạo',
    defaultUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    description: 'Hình ảnh cô gái trẻ thưởng thức cafe bên cửa sổ căn hộ',
    suggestedSize: '600 x 600 px (Vuông)'
  },
  creative_interior: {
    id: 'creative_interior',
    name: 'Góc Bếp & Bàn Ăn',
    section: 'Không Gian Sáng Tạo',
    defaultUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Thiết kế bếp và bàn ăn tối giản phong cách Japandi',
    suggestedSize: '800 x 600 px'
  },
  audience_young: {
    id: 'audience_young',
    name: 'Dành Cho Người Trẻ',
    section: 'Khách Hàng Mục Tiêu',
    defaultUrl: '/images/target_audience_1.png',
    description: 'Người trẻ sống theo cách mình muốn (Drive ảnh 1: 1.png)',
    suggestedSize: '1254 x 1254 px'
  },
  audience_family: {
    id: 'audience_family',
    name: 'Dành Cho Gia Đình',
    section: 'Khách Hàng Mục Tiêu',
    defaultUrl: '/images/target_audience_3.png',
    description: 'Gia đình cho con nền tảng tốt đẹp (Drive ảnh 3: 3.png)',
    suggestedSize: '1254 x 1254 px'
  },
  audience_investor: {
    id: 'audience_investor',
    name: 'Dành Cho Nhà Đầu Tư',
    section: 'Khách Hàng Mục Tiêu',
    defaultUrl: '/images/target_audience_2.png',
    description: 'Nhà đầu tư mua thông minh – đầu tư giá trị (Drive ảnh 2: 2.png)',
    suggestedSize: '1254 x 1254 px'
  },
  project_overview_skyline: {
    id: 'project_overview_skyline',
    name: 'Skyline Dự Án Động Lực Tower',
    section: 'Thông Tin Dự Án',
    defaultUrl: '/assets/dongluc_facade_matsau.jpg',
    description: 'Toàn cảnh tòa tháp Động Lực Tower giữa trung tâm Thanh Xuân',
    suggestedSize: '1000 x 1350 px (Khổ dọc/đứng)'
  },
  map_location: {
    id: 'map_location',
    name: 'Bản Đồ Vị Trí 130 Hạ Đình',
    section: 'Vị Trí Tâm Điểm',
    defaultUrl: '/assets/lkv_dongluc_tower_01.jpg',
    description: 'Sơ đồ vị trí và kết nối giao thông 130 Hạ Đình (LKV ĐỘNG LỰC TOWER-01)',
    suggestedSize: '1000 x 700 px'
  },
  location_map: {
    id: 'location_map',
    name: 'Bản Đồ Kết Nối Vị Trí',
    section: 'Vị Trí Tâm Điểm',
    defaultUrl: '/assets/lkv_dongluc_tower_01.jpg',
    description: 'Sơ đồ vị trí và kết nối giao thông 130 Hạ Đình (LKV ĐỘNG LỰC TOWER-01)',
    suggestedSize: '1000 x 700 px'
  },
  infra_metro: {
    id: 'infra_metro',
    name: 'Tuyến Metro Cát Linh - Hà Đông',
    section: 'Lợi Thế Gia Tăng Giá Trị',
    defaultUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    description: 'Đoàn tàu Metro trên cao hiện đại',
    suggestedSize: '600 x 400 px'
  },
  infra_road: {
    id: 'infra_road',
    name: 'Tuyến Đường Huyết Mạch',
    section: 'Lợi Thế Gia Tăng Giá Trị',
    defaultUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80',
    description: 'Đại lộ Nguyễn Trãi và Vành Đai 3 ban đêm',
    suggestedSize: '600 x 400 px'
  },
  infra_west: {
    id: 'infra_west',
    name: 'Khu Tây Phát Triển Bứt Phá',
    section: 'Lợi Thế Gia Tăng Giá Trị',
    defaultUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    description: 'Các tòa nhà hiện đại trung tâm mới',
    suggestedSize: '600 x 400 px'
  },
  infra_mega: {
    id: 'infra_mega',
    name: 'Hệ Sinh Thái Đại Đô Thị',
    section: 'Lợi Thế Gia Tăng Giá Trị',
    defaultUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80',
    description: 'Quần thể đô thị văn minh xung quanh',
    suggestedSize: '600 x 400 px'
  },
  amenity_mall: {
    id: 'amenity_mall',
    name: 'Trung Tâm Thương Mại',
    section: 'Tiện Ích Đa Dạng',
    defaultUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=900&q=80',
    description: 'Shophouse và trung tâm thương mại khối đế sầm uất',
    suggestedSize: '800 x 600 px'
  },
  amenity_community: {
    id: 'amenity_community',
    name: 'Khu Sinh Hoạt Cộng Đồng',
    section: 'Tiện Ích Đa Dạng',
    defaultUrl: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=900&q=80',
    description: 'Clubhouse kết nối cư dân văn minh và gắn kết',
    suggestedSize: '800 x 600 px'
  },
  amenity_gym: {
    id: 'amenity_gym',
    name: 'Phòng Gym & Yoga',
    section: 'Tiện Ích Đa Dạng',
    defaultUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    description: 'Trung tâm thể thao hiện đại với thiết bị nhập khẩu',
    suggestedSize: '800 x 600 px'
  },
  amenity_kids: {
    id: 'amenity_kids',
    name: 'Khu Vui Chơi Trẻ Em',
    section: 'Tiện Ích Đa Dạng',
    defaultUrl: 'https://images.unsplash.com/photo-1596464716127-f2a829822391?auto=format&fit=crop&w=900&q=80',
    description: 'Sân chơi liên hoàn sáng tạo an toàn cho trẻ',
    suggestedSize: '800 x 600 px'
  },
  amenity_kindergarten: {
    id: 'amenity_kindergarten',
    name: 'Nhà Trẻ Thông Minh',
    section: 'Tiện Ích Đa Dạng',
    defaultUrl: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80',
    description: 'Trường mầm non chuẩn quốc tế nội khu',
    suggestedSize: '800 x 600 px'
  },
  amenity_garden: {
    id: 'amenity_garden',
    name: 'Vườn Trên Cao & Sky Garden',
    section: 'Tiện Ích Đa Dạng',
    defaultUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    description: 'Vườn dạo bộ trên cao và không gian xanh thư giãn',
    suggestedSize: '800 x 600 px'
  },
  floorplan_2pn: {
    id: 'floorplan_2pn',
    name: 'Mặt Bằng Căn 2 Phòng Ngủ (Tổng quát)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_01_2ngu.webp',
    description: 'Phối cảnh cắt lớp 3D căn 2PN (49.67 - 73.05 m²)',
    suggestedSize: '1448 x 1086 px (Bản vẽ phối cảnh 3D)'
  },
  floorplan_unit_01: {
    id: 'floorplan_unit_01',
    name: 'Căn 01 - 2 Ngủ (70.50 - 70.67 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_01_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 01 - 2 Ngủ, view Hồ Hạ Đình, ban công Nam (Drive 9.png)',
    suggestedSize: '1086 x 1448 px'
  },
  floorplan_unit_02: {
    id: 'floorplan_unit_02',
    name: 'Căn 02 - 2 Ngủ (66.48 - 66.92 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_02_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 02 - 2 Ngủ, view Hồ Hạ Đình, ban công Nam (Drive 7.png)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_unit_04: {
    id: 'floorplan_unit_04',
    name: 'Căn 04 - 2 Ngủ (72.96 - 73.05 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_04_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 04 - 2 Ngủ, view Metro Nguyễn Trãi, ban công Tây Bắc (Drive 1.png)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_unit_05: {
    id: 'floorplan_unit_05',
    name: 'Căn 05 - 2 Ngủ (72.96 - 73.05 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_05_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 05 - 2 Ngủ, view Metro Nguyễn Trãi, ban công Tây Bắc (Drive 2.png)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_unit_07: {
    id: 'floorplan_unit_07',
    name: 'Căn 07 - 2 Ngủ (49.67 - 50.20 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_07_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 07 - 2 Ngủ, view Khương Đình, ban công Đông (Drive 4.png)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_unit_08: {
    id: 'floorplan_unit_08',
    name: 'Căn 08 - 2 Ngủ (72.76 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_08_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 08 - 2 Ngủ, view Khương Đình, ban công Đông (Drive 5.png)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_2pn_1: {
    id: 'floorplan_2pn_1',
    name: 'Căn 01 - 2 Ngủ (70.50 - 70.67 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_01_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 01 - 2 Ngủ, ban công Nam, view Hồ Hạ Đình',
    suggestedSize: '1086 x 1448 px'
  },
  floorplan_2pn_2: {
    id: 'floorplan_2pn_2',
    name: 'Căn 02 - 2 Ngủ (66.48 - 66.92 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_02_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 02 - 2 Ngủ, ban công Nam, view Hồ Hạ Đình',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_2pn_3: {
    id: 'floorplan_2pn_3',
    name: 'Căn 04 - 2 Ngủ (72.96 - 73.05 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_04_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 04 - 2 Ngủ, ban công Tây Bắc, view Metro Nguyễn Trãi',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_2pn_4: {
    id: 'floorplan_2pn_4',
    name: 'Căn 05 - 2 Ngủ (72.96 - 73.05 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_05_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 05 - 2 Ngủ, ban công Tây Bắc, view Metro Nguyễn Trãi',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_2pn_5: {
    id: 'floorplan_2pn_5',
    name: 'Căn 07 - 2 Ngủ (49.67 - 50.20 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_07_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 07 - 2 Ngủ, ban công Đông, view Khương Đình',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_2pn_6: {
    id: 'floorplan_2pn_6',
    name: 'Căn 08 - 2 Ngủ (72.76 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_08_2ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 08 - 2 Ngủ, ban công Đông, view Khương Đình',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_3pn: {
    id: 'floorplan_3pn',
    name: 'Mặt Bằng Căn 3 Phòng Ngủ (Tổng quát)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_03_3ngu.webp',
    description: 'Bản vẽ phối cảnh cắt lớp 3D căn 3PN (91 - 98 m²)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_unit_03: {
    id: 'floorplan_unit_03',
    name: 'Căn 03 - 3 Ngủ (91.69 - 91.97 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_03_3ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 03 - 3 Ngủ, ban công Tây Nam & Tây Bắc (Drive 3.png)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_unit_06: {
    id: 'floorplan_unit_06',
    name: 'Căn 06 - 3 Ngủ (93.96 - 93.87 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_06_3ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 06 - 3 Ngủ, ban công Tây Bắc & Đông Bắc (Drive 6.png)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_unit_09: {
    id: 'floorplan_unit_09',
    name: 'Căn 09 - 3 Ngủ (96.98 - 97.38 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_09_3ngu.webp',
    description: 'Phối cảnh cắt lớp Căn 09 - 3 Ngủ, ban công Đông Nam view Hồ Hạ Đình (Drive 8.png)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_3pn_1: {
    id: 'floorplan_3pn_1',
    name: 'Căn 03 - 3 Ngủ (91.69 - 91.97 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_03_3ngu.webp',
    description: 'Bản vẽ phối cảnh cắt lớp Căn 03 (91.69 - 91.97 m²)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_3pn_2: {
    id: 'floorplan_3pn_2',
    name: 'Căn 06 - 3 Ngủ (93.96 - 93.87 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_06_3ngu.webp',
    description: 'Bản vẽ phối cảnh cắt lớp Căn 06 (93.96 - 93.87 m²)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_3pn_3: {
    id: 'floorplan_3pn_3',
    name: 'Căn 09 - 3 Ngủ (96.98 - 97.38 m²)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/units/can_09_3ngu.webp',
    description: 'Bản vẽ phối cảnh cắt lớp Căn 09 (96.98 - 97.38 m²)',
    suggestedSize: '1448 x 1086 px'
  },
  floorplan_building: {
    id: 'floorplan_building',
    name: 'Sơ Đồ Mặt Bằng Tầng Điển Hình',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_05.png',
    description: 'Sơ đồ định vị vị trí các căn trên tầng',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_unit_01: {
    id: 'floorplan_level_unit_01',
    name: 'Mặt Bằng Tầng - Căn 01 (2PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_01.png',
    description: 'Sơ đồ mặt bằng tầng định vị Căn 01 (70.50 m²)',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_unit_02: {
    id: 'floorplan_level_unit_02',
    name: 'Mặt Bằng Tầng - Căn 02 (2PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_02.png',
    description: 'Sơ đồ mặt bằng tầng định vị Căn 02 (66.48 m²)',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_unit_03: {
    id: 'floorplan_level_unit_03',
    name: 'Mặt Bằng Tầng - Căn 03 (3PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_03.png',
    description: 'Sơ đồ mặt bằng tầng định vị Căn 03 (91.69 m²)',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_unit_04: {
    id: 'floorplan_level_unit_04',
    name: 'Mặt Bằng Tầng - Căn 04 (2PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_04.png',
    description: 'Sơ đồ mặt bằng tầng định vị Căn 04 (72.96 m²)',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_unit_05: {
    id: 'floorplan_level_unit_05',
    name: 'Mặt Bằng Tầng - Căn 05 (2PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_05.png',
    description: 'Sơ đồ mặt bằng tầng định vị Căn 05 (72.96 m²)',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_unit_06: {
    id: 'floorplan_level_unit_06',
    name: 'Mặt Bằng Tầng - Căn 06 (3PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_06.png',
    description: 'Sơ đồ mặt bằng tầng định vị Căn 06 (93.96 m²)',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_unit_07: {
    id: 'floorplan_level_unit_07',
    name: 'Mặt Bằng Tầng - Căn 07 (2PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_07.png',
    description: 'Sơ đồ mặt bằng tầng định vị Căn 07 (49.67 m²)',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_unit_08: {
    id: 'floorplan_level_unit_08',
    name: 'Mặt Bằng Tầng - Căn 08 (2PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_08.png',
    description: 'Sơ đồ mặt bằng tầng định vị Căn 08 (72.76 m²)',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_unit_09: {
    id: 'floorplan_level_unit_09',
    name: 'Mặt Bằng Tầng - Căn 09 (3PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_09.png',
    description: 'Sơ đồ mặt bằng tầng định vị Căn 09 (96.98 m²)',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_2pn_1: {
    id: 'floorplan_level_2pn_1',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-01 (2PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_01.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn CH-01',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_2pn_2: {
    id: 'floorplan_level_2pn_2',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-02 (2PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_02.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn CH-02',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_2pn_3: {
    id: 'floorplan_level_2pn_3',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-07 (2PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_07.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn CH-07',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_2pn_4: {
    id: 'floorplan_level_2pn_4',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-04 (2PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_04.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn CH-04',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_2pn_5: {
    id: 'floorplan_level_2pn_5',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-05 (2PN Căn Góc)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_05.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn góc CH-05',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_2pn_6: {
    id: 'floorplan_level_2pn_6',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-06 (2PN+1)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_08.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn CH-08',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_3pn_1: {
    id: 'floorplan_level_3pn_1',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-03 (3PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_03.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn 3PN CH-03',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_3pn_2: {
    id: 'floorplan_level_3pn_2',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-06 (3PN Căn Góc)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_06.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn góc 3PN CH-06',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_3pn_3: {
    id: 'floorplan_level_3pn_3',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-09 (3PN VIP)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_09.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn VIP 3PN CH-09',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_3pn_6: {
    id: 'floorplan_level_3pn_6',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-06 (3PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_06.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn 3PN CH-06',
    suggestedSize: '410 x 410 px'
  },
  floorplan_level_3pn_9: {
    id: 'floorplan_level_3pn_9',
    name: 'Mặt Bằng Tầng - Vị Trí Căn CH-09 (3PN)',
    section: 'Mặt Bằng Căn Hộ',
    defaultUrl: '/assets/floorplates/floor_unit_09.png',
    description: 'Sơ đồ mặt bằng tầng đánh dấu vị trí Căn 3PN CH-09',
    suggestedSize: '410 x 410 px'
  },
  construction_site: {
    id: 'construction_site',
    name: 'Hình Ảnh Thực Tế Công Trường',
    section: 'Tiến Độ Hoàn Thiện',
    defaultUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1000&q=80',
    description: 'Ảnh thi công thực tế tại 130 Hạ Đình',
    suggestedSize: '1000 x 650 px'
  },
  timeline_photo_1: {
    id: 'timeline_photo_1',
    name: 'Tiến độ Q3/2024 - Móng & 3 Hầm',
    section: 'Tiến Độ Hoàn Thiện',
    defaultUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=800&q=80',
    description: 'Hoàn thành móng & hầm tiêu chuẩn cao',
    suggestedSize: '800 x 500 px'
  },
  timeline_photo_2: {
    id: 'timeline_photo_2',
    name: 'Tiến độ Q4/2024 - Thi Công Thân Tầng Nổi',
    section: 'Tiến Độ Hoàn Thiện',
    defaultUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    description: 'Thi công kết cấu bê tông phần thân',
    suggestedSize: '800 x 500 px'
  },
  timeline_photo_3: {
    id: 'timeline_photo_3',
    name: 'Tiến độ Q2/2025 - Cất Nóc 24 Tầng',
    section: 'Tiến Độ Hoàn Thiện',
    defaultUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description: 'Hoàn thành kết cấu 24 tầng Động Lực Tower',
    suggestedSize: '800 x 500 px'
  },
  timeline_photo_4: {
    id: 'timeline_photo_4',
    name: 'Tiến độ Q2/2027 - Bàn Giao Căn Hộ',
    section: 'Tiến Độ Hoàn Thiện',
    defaultUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Bàn giao không gian sáng tạo đúng cam kết',
    suggestedSize: '800 x 500 px'
  },
  legal_handover: {
    id: 'legal_handover',
    name: 'Hồ Sơ Pháp Lý Dự Án',
    section: 'Pháp Lý Dự Án',
    defaultUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    description: 'Văn bản phê duyệt quy hoạch và mẫu HĐMB',
    suggestedSize: '800 x 500 px'
  },
  legal_documents: {
    id: 'legal_documents',
    name: 'Hồ Sơ Pháp Lý Đầy Đủ',
    section: 'Pháp Lý Dự Án',
    defaultUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    description: 'Giấy phép xây dựng 28/GPXD và hồ sơ pháp lý',
    suggestedSize: '800 x 500 px'
  }
};

export interface ImageStyleConfig {
  positionX: number; // 0 to 100% (default 50)
  positionY: number; // 0 to 100% (default 50)
  zoom: number;      // 100 to 200% (default 100)
  fit: 'cover' | 'contain';
}

const DEFAULT_IMAGE_STYLES: Record<string, ImageStyleConfig> = {
  hero_building: {
    positionX: 20, // Perfectly centers the building tower in the frame
    positionY: 50,
    zoom: 105,
    fit: 'cover'
  },
  project_overview_skyline: {
    positionX: 30,
    positionY: 20,
    zoom: 100,
    fit: 'cover'
  },
  ...((persistedData?.styles as Record<string, ImageStyleConfig>) || {})
};

interface ImageContextType {
  images: Record<string, string>;
  imageStyles: Record<string, ImageStyleConfig>;
  getImageUrl: (slotId: string) => string;
  getImageStyle: (slotId: string) => ImageStyleConfig;
  setImage: (slotId: string, url: string) => void;
  setImageStyle: (slotId: string, style: Partial<ImageStyleConfig>) => void;
  resetImage: (slotId: string) => void;
  resetImageStyle: (slotId: string) => void;
  resetAllImages: () => void;
  openImageUploader: (slotId: string, initialTab?: 'upload' | 'url' | 'samples' | 'adjust') => void;
  currentEditingSlot: string | null;
  activeUploaderTab: 'upload' | 'url' | 'samples' | 'adjust';
  setActiveUploaderTab: (tab: 'upload' | 'url' | 'samples' | 'adjust') => void;
  closeImageUploader: () => void;
  isManagerOpen: boolean;
  setIsManagerOpen: (open: boolean) => void;
  lockAndPersistImages: () => Promise<{ success: boolean; count: number; message: string }>;
  isPersisting: boolean;
  lastPersistStatus: string | null;
  exportConfigJson: () => void;
  importConfigJson: (jsonString: string) => Promise<{ success: boolean; message: string }>;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    const persistedImgs = (persistedData?.images as Record<string, string>) || {};

    Object.values(DEFAULT_IMAGE_SLOTS).forEach((slot) => {
      // 1. Prefer permanently persisted images from server files
      if (persistedImgs[slot.id]) {
        initial[slot.id] = persistedImgs[slot.id];
      } else {
        initial[slot.id] = slot.defaultUrl;
      }
    });

    try {
      const saved = localStorage.getItem('dongluc_custom_images');
      if (saved) {
        const parsed = JSON.parse(saved);
        const safeMerged = { ...initial };
        const heavyToMigrate: Record<string, string> = {};

        (Object.entries(parsed) as [string, unknown][]).forEach(([k, v]) => {
          if (typeof v === 'string') {
            if (v.startsWith('data:') && v.length >= 10000) {
              heavyToMigrate[k] = v;
            } else {
              safeMerged[k] = v;
            }
          }
        });

        // Migrate any previous heavy base64 strings to IndexedDB & free localStorage immediately
        if (Object.keys(heavyToMigrate).length > 0) {
          saveAllImagesToDb(heavyToMigrate).catch(() => {});
          try {
            const onlyLight: Record<string, string> = {};
            Object.entries(safeMerged).forEach(([k, v]) => {
              if (v && v !== DEFAULT_IMAGE_SLOTS[k]?.defaultUrl) {
                onlyLight[k] = v;
              }
            });
            localStorage.setItem('dongluc_custom_images', JSON.stringify(onlyLight));
          } catch {
            localStorage.removeItem('dongluc_custom_images');
          }
        }

        // Ensure swapped audience images take effect immediately
        if (safeMerged.audience_family === '/images/target_audience_2.png') {
          safeMerged.audience_family = '/images/target_audience_3.png';
        }
        if (safeMerged.audience_investor === '/images/target_audience_3.png') {
          safeMerged.audience_investor = '/images/target_audience_2.png';
        }

        // Clean up any stale unsplash URLs accidentally cached in user's browser for floorplans
        Object.keys(safeMerged).forEach((k) => {
          if (k.startsWith('floorplan_') && typeof safeMerged[k] === 'string' && safeMerged[k].includes('unsplash.com')) {
            if (DEFAULT_IMAGE_SLOTS[k]?.defaultUrl) {
              safeMerged[k] = DEFAULT_IMAGE_SLOTS[k].defaultUrl;
            }
          }
        });
        if (!safeMerged.floorplan_unit_03 || safeMerged.floorplan_unit_03.includes('unsplash')) {
          safeMerged.floorplan_unit_03 = '/assets/units/can_03_3ngu.webp';
        }
        if (!safeMerged.floorplan_unit_06 || safeMerged.floorplan_unit_06.includes('unsplash')) {
          safeMerged.floorplan_unit_06 = '/assets/units/can_06_3ngu.webp';
        }
        if (!safeMerged.floorplan_unit_09 || safeMerged.floorplan_unit_09.includes('unsplash')) {
          safeMerged.floorplan_unit_09 = '/assets/units/can_09_3ngu.webp';
        }

        const floorplateOverrides: Record<string, string> = {
          floorplan_building: '/assets/floorplates/floor_unit_05.png',
          floorplan_level_unit_01: '/assets/floorplates/floor_unit_01.png',
          floorplan_level_unit_02: '/assets/floorplates/floor_unit_02.png',
          floorplan_level_unit_03: '/assets/floorplates/floor_unit_03.png',
          floorplan_level_unit_04: '/assets/floorplates/floor_unit_04.png',
          floorplan_level_unit_05: '/assets/floorplates/floor_unit_05.png',
          floorplan_level_unit_06: '/assets/floorplates/floor_unit_06.png',
          floorplan_level_unit_07: '/assets/floorplates/floor_unit_07.png',
          floorplan_level_unit_08: '/assets/floorplates/floor_unit_08.png',
          floorplan_level_unit_09: '/assets/floorplates/floor_unit_09.png',
          floorplan_level_2pn_1: '/assets/floorplates/floor_unit_01.png',
          floorplan_level_2pn_2: '/assets/floorplates/floor_unit_02.png',
          floorplan_level_2pn_3: '/assets/floorplates/floor_unit_07.png',
          floorplan_level_2pn_4: '/assets/floorplates/floor_unit_04.png',
          floorplan_level_2pn_5: '/assets/floorplates/floor_unit_05.png',
          floorplan_level_2pn_6: '/assets/floorplates/floor_unit_08.png',
          floorplan_level_3pn_1: '/assets/floorplates/floor_unit_03.png',
          floorplan_level_3pn_2: '/assets/floorplates/floor_unit_06.png',
          floorplan_level_3pn_3: '/assets/floorplates/floor_unit_09.png',
          floorplan_level_3pn_6: '/assets/floorplates/floor_unit_06.png',
          floorplan_level_3pn_9: '/assets/floorplates/floor_unit_09.png',
        };
        Object.entries(floorplateOverrides).forEach(([k, path]) => {
          if (!safeMerged[k] || safeMerged[k].includes('unsplash.com')) {
            safeMerged[k] = path;
          }
        });

        return safeMerged;
      }
    } catch {
      try {
        localStorage.removeItem('dongluc_custom_images');
      } catch {}
    }
    return initial;
  });

  const [imageStyles, setImageStyles] = useState<Record<string, ImageStyleConfig>>(() => {
    try {
      const saved = localStorage.getItem('dongluc_custom_image_styles');
      if (saved) {
        return { ...DEFAULT_IMAGE_STYLES, ...JSON.parse(saved) };
      }
    } catch {
      try {
        localStorage.removeItem('dongluc_custom_image_styles');
      } catch {}
    }
    return { ...DEFAULT_IMAGE_STYLES };
  });

  const [currentEditingSlot, setCurrentEditingSlot] = useState<string | null>(null);
  const [activeUploaderTab, setActiveUploaderTab] = useState<'upload' | 'url' | 'samples' | 'adjust'>('upload');
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [isPersisting, setIsPersisting] = useState(false);
  const [lastPersistStatus, setLastPersistStatus] = useState<string | null>(null);
  const autoPersistTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to permanently lock and persist all custom images to server filesystem
  const lockAndPersistImages = async (
    targetImages?: Record<string, string>,
    targetStyles?: Record<string, ImageStyleConfig>
  ): Promise<{ success: boolean; count: number; message: string }> => {
    setIsPersisting(true);
    try {
      const activeImgs = targetImages || images;
      const activeStls = targetStyles || imageStyles;

      // Extract all custom images (including any from IndexedDB)
      const dbImages = await getAllImagesFromDb().catch(() => ({}));
      const mergedForSave = { ...activeImgs, ...dbImages };

      const customImgs: Record<string, string> = {};
      (Object.entries(mergedForSave) as [string, unknown][]).forEach(([k, v]) => {
        if (typeof v === 'string' && v && v !== DEFAULT_IMAGE_SLOTS[k]?.defaultUrl) {
          customImgs[k] = v;
        }
      });

      const res = await fetch('/api/save-custom-images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images: customImgs, styles: activeStls }),
      });

      if (!res.ok) {
        throw new Error(`Máy chủ trả về mã lỗi: ${res.status}`);
      }

      const resData = await res.json();
      const savedImgs = resData?.data?.images || {};
      
      // Update state with clean server URLs (e.g. /uploads/location_map.png)
      if (Object.keys(savedImgs).length > 0) {
        setImages((prev) => ({ ...prev, ...savedImgs }));
      }

      const count = resData.count || Object.keys(customImgs).length;
      const msg = `✅ Đã cố định vĩnh viễn ${count} hình ảnh vào mã nguồn dự án!`;
      setLastPersistStatus(msg);
      return { success: true, count, message: msg };
    } catch (err: any) {
      console.warn('Lỗi khi cố định ảnh lên máy chủ:', err);
      const errorMsg = 'Chưa thể lưu file lên máy chủ: ' + (err?.message || 'Lỗi mạng');
      setLastPersistStatus(errorMsg);
      return { success: false, count: 0, message: errorMsg };
    } finally {
      setIsPersisting(false);
    }
  };

  // Load custom images from IndexedDB (supports large base64 data URLs without 5MB quota limit)
  useEffect(() => {
    let active = true;
    getAllImagesFromDb().then((dbImages) => {
      if (active && dbImages && Object.keys(dbImages).length > 0) {
        setImages((prev) => {
          const updated = { ...prev, ...dbImages };
          // Automatically trigger background persist to server if there are unpersisted custom images
          const unpersisted = Object.entries(dbImages).some(
            ([k, v]) => v && v.startsWith('data:')
          );
          if (unpersisted) {
            lockAndPersistImages(updated).catch(() => {});
          }
          return updated;
        });
      }
    }).catch((err) => {
      console.warn('IndexedDB initial load skipped:', err);
    });
    return () => { active = false; };
  }, []);

  // Sync images to storage and debounce auto-persist to server
  useEffect(() => {
    // 1. Identify custom images that differ from default
    const customImages: Record<string, string> = {};
    (Object.entries(images) as [string, string][]).forEach(([key, val]) => {
      if (val && val !== DEFAULT_IMAGE_SLOTS[key]?.defaultUrl) {
        customImages[key] = val;
      }
    });

    // 2. Persist to IndexedDB (virtually unlimited quota for large images / base64)
    if (Object.keys(customImages).length > 0) {
      saveAllImagesToDb(customImages).catch(() => {});
    }

    // 3. For localStorage, ONLY save lightweight URLs (no big data: URLs) to prevent QuotaExceededError
    try {
      const safeForLocalStorage: Record<string, string> = {};
      (Object.entries(customImages) as [string, string][]).forEach(([key, val]) => {
        if (typeof val === 'string' && (!val.startsWith('data:') || val.length < 10000)) {
          safeForLocalStorage[key] = val;
        }
      });
      localStorage.setItem('dongluc_custom_images', JSON.stringify(safeForLocalStorage));
    } catch {
      try {
        localStorage.removeItem('dongluc_custom_images');
      } catch {}
    }

    // 4. Auto-persist to server with debounce (1.2 seconds)
    if (Object.keys(customImages).length > 0) {
      if (autoPersistTimerRef.current) clearTimeout(autoPersistTimerRef.current);
      autoPersistTimerRef.current = setTimeout(() => {
        lockAndPersistImages(images, imageStyles).catch(() => {});
      }, 1200);
    }
  }, [images]);

  useEffect(() => {
    try {
      localStorage.setItem('dongluc_custom_image_styles', JSON.stringify(imageStyles));
    } catch {
      try {
        localStorage.removeItem('dongluc_custom_image_styles');
      } catch {}
    }
  }, [imageStyles]);

  const setImage = (slotId: string, url: string) => {
    setImages((prev) => {
      const next = { ...prev, [slotId]: url };
      return next;
    });
    // Immediately persist to IndexedDB
    saveImageToDb(slotId, url).catch(() => {});
  };

  const setImageStyle = (slotId: string, styleUpdate: Partial<ImageStyleConfig>) => {
    setImageStyles((prev) => {
      const current = prev[slotId] || DEFAULT_IMAGE_STYLES[slotId] || {
        positionX: 50,
        positionY: 50,
        zoom: 100,
        fit: 'cover'
      };
      return {
        ...prev,
        [slotId]: { ...current, ...styleUpdate }
      };
    });
  };

  const resetImageStyle = (slotId: string) => {
    setImageStyles((prev) => {
      const copy = { ...prev };
      if (DEFAULT_IMAGE_STYLES[slotId]) {
        copy[slotId] = { ...DEFAULT_IMAGE_STYLES[slotId] };
      } else {
        delete copy[slotId];
      }
      return copy;
    });
  };

  const resetImage = (slotId: string) => {
    if (DEFAULT_IMAGE_SLOTS[slotId]) {
      setImages((prev) => ({
        ...prev,
        [slotId]: DEFAULT_IMAGE_SLOTS[slotId].defaultUrl
      }));
      resetImageStyle(slotId);
      deleteImageFromDb(slotId).catch(() => {});
    }
  };

  const resetAllImages = () => {
    const initial: Record<string, string> = {};
    Object.values(DEFAULT_IMAGE_SLOTS).forEach((slot) => {
      initial[slot.id] = slot.defaultUrl;
    });
    setImages(initial);
    setImageStyles({ ...DEFAULT_IMAGE_STYLES });
    clearAllImagesFromDb().catch(() => {});
    try {
      localStorage.removeItem('dongluc_custom_images');
      localStorage.removeItem('dongluc_custom_image_styles');
    } catch {}
  };

  const exportConfigJson = () => {
    const exportData = {
      images,
      styles: imageStyles,
      exportedAt: new Date().toISOString(),
      appName: 'Dong Luc Tower'
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `dongluc_tower_images_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importConfigJson = async (jsonString: string): Promise<{ success: boolean; message: string }> => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.images && typeof parsed.images === 'object') {
        setImages((prev) => ({ ...prev, ...parsed.images }));
        if (parsed.styles && typeof parsed.styles === 'object') {
          setImageStyles((prev) => ({ ...prev, ...parsed.styles }));
        }
        await lockAndPersistImages(parsed.images, parsed.styles);
        return { success: true, message: `Đã khôi phục thành công ${Object.keys(parsed.images).length} hình ảnh!` };
      }
      return { success: false, message: 'File JSON không hợp lệ hoặc thiếu trường images.' };
    } catch (err: any) {
      return { success: false, message: 'Lỗi đọc file JSON: ' + (err?.message || '') };
    }
  };

  const getImageUrl = (slotId: string) => {
    return images[slotId] || DEFAULT_IMAGE_SLOTS[slotId]?.defaultUrl || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80';
  };

  const getImageStyle = (slotId: string): ImageStyleConfig => {
    if (imageStyles[slotId]) return imageStyles[slotId];
    if (DEFAULT_IMAGE_STYLES[slotId]) return DEFAULT_IMAGE_STYLES[slotId];
    if (slotId.startsWith('floorplan_')) {
      return {
        positionX: 50,
        positionY: 50,
        zoom: 100,
        fit: 'contain'
      };
    }
    return {
      positionX: 50,
      positionY: 50,
      zoom: 100,
      fit: 'cover'
    };
  };

  const openImageUploader = (slotId: string, initialTab: 'upload' | 'url' | 'samples' | 'adjust' = 'upload') => {
    setCurrentEditingSlot(slotId);
    setActiveUploaderTab(initialTab);
  };

  const closeImageUploader = () => {
    setCurrentEditingSlot(null);
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        imageStyles,
        getImageUrl,
        getImageStyle,
        setImage,
        setImageStyle,
        resetImage,
        resetImageStyle,
        resetAllImages,
        openImageUploader,
        currentEditingSlot,
        activeUploaderTab,
        setActiveUploaderTab,
        closeImageUploader,
        isManagerOpen,
        setIsManagerOpen,
        lockAndPersistImages,
        isPersisting,
        lastPersistStatus,
        exportConfigJson,
        importConfigJson
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};
