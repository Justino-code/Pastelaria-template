// src/components/FilterButtons.tsx
import { FC } from 'react';
import { FilterCategory } from '../types';
import { Pizza, Cake, CakeSlice, Coffee, LayoutGrid } from 'lucide-react';

interface FilterButtonsProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

const filters: { label: string; value: FilterCategory; icon: React.ReactNode }[] = [
  { label: 'Todos', value: 'todos', icon: <LayoutGrid size={18} /> },
  { label: 'Salgados', value: 'salgados', icon: <Pizza size={18} /> },
  { label: 'Doces', value: 'doces', icon: <Cake size={18} /> },
  { label: 'Bolos', value: 'bolos', icon: <CakeSlice size={18} /> },
  { label: 'Bebidas', value: 'bebidas', icon: <Coffee size={18} /> },
];

const FilterButtons: FC<FilterButtonsProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="filter-bar">
      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
        >
          {filter.icon}
          <span>{filter.label}</span>
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;