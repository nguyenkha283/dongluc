import React, { useState } from 'react';
import { LayoutGrid, Table, RotateCcw, Sparkles, SlidersHorizontal, ChevronDown, ChevronUp } from 'lucide-react';
import { UnitType } from '../types';

interface ApartmentFilterProps {
  selectedType: UnitType | 'all';
  onTypeChange: (type: UnitType | 'all') => void;
  priceRange: string;
  onPriceRangeChange: (range: string) => void;
  directionFilter: string;
  onDirectionFilterChange: (direction: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  viewMode: 'grid' | 'table';
  onViewModeChange: (mode: 'grid' | 'table') => void;
  onReset: () => void;
  hasActiveFilters: boolean;
  totalCount: number;
}

export const ApartmentFilter: React.FC<ApartmentFilterProps> = ({
  selectedType,
  onTypeChange,
  priceRange,
  onPriceRangeChange,
  directionFilter,
  onDirectionFilterChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  onReset,
  hasActiveFilters,
  totalCount,
}) => {
  // Mobile accordion toggle for detailed filters (avoids pushing units off-screen on phones)
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Count active secondary filters
  const activeSecondaryCount = (priceRange !== 'all' ? 1 : 0) + (directionFilter !== 'all' ? 1 : 0) + (sortBy !== 'price-asc' ? 1 : 0);

  return (
    <div className="mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-slate-800/80">
      {/* Top Row: Unit Type Tabs & View Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-3 sm:pb-4">
        {/* Horizontal scrollable unit type tabs (clean, modern, mobile-friendly) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {[
            { id: 'all', label: 'Tất cả căn hộ', count: 156 },
            { id: '2PN', label: 'Căn 2 PN (50 - 73m²)', count: null },
            { id: '3PN', label: 'Căn 3 PN (91 - 98m²)', count: null },
          ].map((tab) => {
            const isActive = selectedType === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTypeChange(tab.id as any)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 scale-[1.02]'
                    : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Counter & Mobile Filter Toggle / Desktop View Modes */}
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto text-xs">
          <span className="text-slate-300 font-medium">
            Mở bán: <strong className="text-amber-400 font-black">{totalCount}</strong> căn
          </span>

          <div className="flex items-center gap-2">
            {/* Mobile Filter Toggle Button (Keeps mobile clean by default) */}
            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className={`sm:hidden px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                isMobileFiltersOpen || activeSecondaryCount > 0
                  ? 'bg-amber-400/15 border-amber-400 text-amber-300'
                  : 'bg-slate-900 border-slate-800 text-slate-300'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
              <span>Bộ lọc</span>
              {activeSecondaryCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black flex items-center justify-center">
                  {activeSecondaryCount}
                </span>
              )}
              {isMobileFiltersOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {/* View Mode Toggle: Grid vs Table */}
            <div className="hidden sm:flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Xem dạng thẻ căn hộ"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => onViewModeChange('table')}
                className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Xem dạng bảng tổng hợp"
              >
                <Table className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Dropdown Filters: Always visible on desktop, expandable on mobile */}
      <div className={`${isMobileFiltersOpen ? 'grid' : 'hidden sm:grid'} grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-3 items-center text-xs animate-in fade-in duration-200`}>
        {/* Price Range */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 mb-1">
            Khoảng tài chính (Đã có VAT)
          </label>
          <select
            value={priceRange}
            onChange={(e) => onPriceRangeChange(e.target.value)}
            className="w-full bg-slate-900/95 border border-slate-800 focus:border-amber-400 rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none transition-colors"
          >
            <option value="all">Tất cả mức giá</option>
            <option value="under5">Dưới 5 tỷ (Căn 2PN tiêu chuẩn)</option>
            <option value="5to6">Từ 5 tỷ - 6 tỷ (Căn 2PN góc)</option>
            <option value="above6">Trên 6 tỷ (Căn 3PN VIP)</option>
          </select>
        </div>

        {/* Direction */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 mb-1">
            Hướng ban công
          </label>
          <select
            value={directionFilter}
            onChange={(e) => onDirectionFilterChange(e.target.value)}
            className="w-full bg-slate-900/95 border border-slate-800 focus:border-amber-400 rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none transition-colors"
          >
            <option value="all">Tất cả hướng nhà</option>
            <option value="Đông Nam">Đông Nam (Mát mẻ quanh năm)</option>
            <option value="Chính Nam">Chính Nam (Đón gió vượng khí)</option>
            <option value="Đông Bắc">Đông Bắc (View phố Nguyễn Trãi)</option>
            <option value="Tây Nam">Tây Nam (View hoàng hôn Panorama)</option>
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-[11px] font-semibold text-slate-400 mb-1">
            Sắp xếp danh sách
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full bg-slate-900/95 border border-slate-800 focus:border-amber-400 rounded-xl px-3 py-2 text-xs font-medium text-white focus:outline-none transition-colors"
          >
            <option value="price-asc">Giá: Thấp đến cao</option>
            <option value="price-desc">Giá: Cao đến thấp</option>
            <option value="area-desc">Diện tích: Lớn nhất</option>
            <option value="floor-asc">Tầng: Thấp đến cao</option>
          </select>
        </div>

        {/* Reset Filters / Note */}
        <div className="pt-1 sm:pt-4">
          {hasActiveFilters ? (
            <button
              onClick={() => {
                onReset();
                setIsMobileFiltersOpen(false);
              }}
              className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-amber-400 border border-amber-400/40 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Đặt lại bộ lọc</span>
            </button>
          ) : (
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Đơn giá từ 7x triệu/m² (VAT)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
