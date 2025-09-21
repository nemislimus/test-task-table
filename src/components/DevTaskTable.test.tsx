import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DevTaskTable } from './DevTaskTable';
import { useTableStore } from '@/store/tableStore';
import { mockDevelopers } from '@/data/mockData';

// Мокаем store
vi.mock('@/store/tableStore');

describe('DevTaskTable', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

it('should render developers table', () => {
  vi.mocked(useTableStore).mockReturnValue({
    currentView: 'developers',
    developers: mockDevelopers,
    selectedDeveloper: null,
    selectDeveloper: vi.fn(),
    resetView: vi.fn(),
    loadMockData: vi.fn(),
  });

  render(<DevTaskTable />);
  
  expect(screen.getByText('Developers')).toBeInTheDocument();
  expect(screen.getByRole('table')).toBeInTheDocument();
  
  // Проверяем что есть таблица с данными
  const rows = screen.getAllByRole('row');
  expect(rows).toHaveLength(mockDevelopers.length + 1); // +1 для заголовка
  
  // Проверяем что отобразились какие-то данные (не пустая таблица)
  const cells = screen.getAllByRole('cell');
  expect(cells.length).toBeGreaterThan(0);
});

it('should render tasks table when developer is selected', () => {
  vi.mocked(useTableStore).mockReturnValue({
    currentView: 'tasks',
    developers: mockDevelopers,
    selectedDeveloper: mockDevelopers[0],
    selectDeveloper: vi.fn(),
    resetView: vi.fn(),
    loadMockData: vi.fn(),
  });

  render(<DevTaskTable />);
  
  expect(screen.getByText(/Tasks of:/)).toBeInTheDocument(); // Частичное совпадение
  expect(screen.getByRole('table')).toBeInTheDocument();
  
  const rows = screen.getAllByRole('row');
  expect(rows).toHaveLength(mockDevelopers[0].tasks.length + 1);
});
});