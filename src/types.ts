export type UnitType = '2PN' | '3PN';
export type UnitStatus = 'available' | 'reserved' | 'selling_fast' | 'last_units';

export interface ApartmentUnit {
  id: string;
  code: string; // e.g. "DL-12.06"
  tower: string; // "Tháp A" | "Tháp B"
  floor: number;
  type: UnitType;
  bedrooms: number;
  bathrooms: number;
  logia?: number;
  carpetArea: number; // Diện tích thông thủy (m2) e.g. 70.5, 72.96
  builtUpArea: number; // Diện tích tim tường (m2)
  floorRange?: string; // "Tầng 7 - 15" | "Tầng 16 - 21"
  driveUrl?: string;
  direction: string; // "Đông Nam" | "Tây Nam" | "Đông Bắc" | "Tây Bắc" | "Chính Nam"
  view: string;
  pricePerSqm: number; // in million VND e.g. 72 (từ 7x triệu/m2 ĐÃ GỒM VAT)
  price: number; // in VND (e.g. 4.65 tỷ)
  originalPrice: number;
  discountRate: number; // %
  monthlyEstimate: number;
  status: UnitStatus;
  statusLabel: string;
  image: string;
  floorPlanUrl: string;
  features: string[];
  description: string;
  handoverType: 'raw_creative'; // "Bàn giao thô - Không gian sáng tạo"
  furnishingStandard: string;
}

export interface Amenity {
  id: string;
  name: string;
  category: 'relax' | 'sport' | 'family' | 'commercial';
  description: string;
  image: string;
  highlight: string;
}

export interface PaymentStage {
  stage: number;
  milestone: string;
  percentage: number;
  note: string;
}

export interface LocationConnection {
  place: string;
  time: string;
  distance: string;
  type: 'transport' | 'education' | 'shopping' | 'medical';
}

export interface ProjectMilestone {
  time: string;
  title: string;
  status: 'completed' | 'ongoing' | 'upcoming';
}

