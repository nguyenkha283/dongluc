import React from 'react';
import { ApartmentUnit } from '../types';
import { ApartmentCard } from './ApartmentCard';
import { formatVND } from '../data/mockData';
import { AlertCircle, FileText, ArrowRight, Compass } from 'lucide-react';

interface ApartmentListProps {
  units: ApartmentUnit[];
  viewMode: 'grid' | 'table';
  onSelectUnit: (unit: ApartmentUnit) => void;
  onBookViewing: (unit: ApartmentUnit) => void;
  onResetFilters: () => void;
}

export const ApartmentList: React.FC<ApartmentListProps> = ({
  units,
  viewMode,
  onSelectUnit,
  onBookViewing,
  onResetFilters,
}) => {
  if (units.length === 0) {
    return (
      <div className="py-12 px-4 text-center max-w-md mx-auto">
        <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto text-amber-400 mb-3 border border-amber-400/30">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h3 className="font-serif-luxury text-base sm:text-lg font-bold text-white mb-1.5">
          Không tìm thấy căn hộ phù hợp bộ lọc
        </h3>
        <p className="text-slate-400 text-xs mb-4">
          Quý khách vui lòng chọn lại khoảng giá hoặc loại căn hộ khác để tra cứu thêm.
        </p>
        <button
          onClick={onResetFilters}
          className="px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 text-xs font-black transition-all shadow-md cursor-pointer"
        >
          Xem Toàn Bộ 156 Căn Hộ
        </button>
      </div>
    );
  }

  // If viewMode === 'table', render responsive table (Compact card rows on mobile, full table on desktop)
  if (viewMode === 'table') {
    return (
      <div className="space-y-4">
        {/* Mobile Compact List View (Friendly alternative to horizontal table scroll on mobile) */}
        <div className="sm:hidden divide-y divide-slate-800 border-y border-slate-800">
          {units.map((unit) => (
            <div key={unit.id} className="py-3.5 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-xs font-black text-white">{unit.code}</span>
                  <span className="text-[10px] text-amber-400 font-semibold">• {unit.tower}</span>
                  <span className="text-[10px] text-slate-400 font-medium">• Tầng {unit.floor}</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  {unit.bedrooms}PN / {unit.bathrooms}WC • {unit.carpetArea}m² TT
                </div>
                <div className="text-xs font-bold text-amber-300 mt-1">
                  {formatVND(unit.price)} <span className="text-[10px] text-slate-400 font-normal">({unit.pricePerSqm} tr/m²)</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 shrink-0">
                <button
                  onClick={() => onSelectUnit(unit)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="w-3 h-3" />
                  <span>Mặt bằng</span>
                </button>
                <button
                  onClick={() => onBookViewing(unit)}
                  className="px-2.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-[11px] font-black flex items-center gap-1 cursor-pointer"
                >
                  <span>Báo giá</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Full Table View */}
        <div className="hidden sm:block rounded-2xl border border-slate-800/80 overflow-hidden bg-slate-900/60">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-white uppercase text-[11px] tracking-wider font-semibold border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">Mã Căn & Tòa</th>
                  <th className="py-3.5 px-3">Loại căn</th>
                  <th className="py-3.5 px-3">Tầng</th>
                  <th className="py-3.5 px-3">Thông thủy</th>
                  <th className="py-3.5 px-3">Đơn giá / m²</th>
                  <th className="py-3.5 px-3">Tổng giá (Có VAT)</th>
                  <th className="py-3.5 px-3">Hướng ban công</th>
                  <th className="py-3.5 px-3">Tiêu chuẩn</th>
                  <th className="py-3.5 px-4 text-center">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {units.map((unit) => {
                  return (
                    <tr key={unit.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-white">
                        <div className="text-amber-400 font-bold">{unit.code}</div>
                        <div className="text-[10px] text-slate-400 font-normal">{unit.tower}</div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="font-semibold text-white">{unit.type}</span>
                        <div className="text-[10px] text-slate-400">{unit.bedrooms}PN / {unit.bathrooms}WC</div>
                      </td>
                      <td className="py-3 px-3 font-semibold text-slate-200">
                        Tầng {unit.floor}
                      </td>
                      <td className="py-3 px-3 font-bold text-white">
                        {unit.carpetArea} m²
                      </td>
                      <td className="py-3 px-3 font-bold text-amber-400">
                        {unit.pricePerSqm} tr/m²
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-serif-luxury font-black text-white text-sm">
                          {formatVND(unit.price)}
                        </div>
                        <div className="text-[10px] text-emerald-400">
                          ~{formatVND(unit.monthlyEstimate)}/tháng
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-medium text-slate-200">{unit.direction}</div>
                        <div className="text-[10px] text-slate-400 max-w-[130px] truncate" title={unit.view}>
                          {unit.view}
                        </div>
                      </td>
                      <td className="py-3 px-3">
                        <span className="text-[10px] text-slate-300">
                          Thô / Hoàn thiện
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => onSelectUnit(unit)}
                            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                          >
                            Mặt bằng
                          </button>
                          <button
                            onClick={() => onBookViewing(unit)}
                            className="px-2.5 py-1.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors cursor-pointer"
                          >
                            Báo giá
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
      {units.map((unit) => (
        <ApartmentCard
          key={unit.id}
          unit={unit}
          onSelectUnit={onSelectUnit}
          onBookViewing={onBookViewing}
        />
      ))}
    </div>
  );
};
