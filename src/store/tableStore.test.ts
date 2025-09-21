import { describe, it, expect, beforeEach } from 'vitest';
import { useTableStore } from './tableStore';
import { mockDevelopers } from '../data/mockData';

describe('tableStore', () => {
  // Сбрасываем состояние перед каждым тестом
  beforeEach(() => {
    useTableStore.setState({
      currentView: 'developers',
      selectedDeveloper: null,
      developers: [],
    });
  });

  it('should load mock data', () => {
  const { loadMockData } = useTableStore.getState();
  
  loadMockData();
  
  const { developers } = useTableStore.getState();
  expect(developers).toEqual(mockDevelopers);
  expect(developers).toHaveLength(10);
});

  it('should select developer and switch to tasks view', () => {
    const { selectDeveloper, loadMockData } = useTableStore.getState();
    loadMockData();
    const testDeveloper = mockDevelopers[0];
    
    selectDeveloper(testDeveloper);
    
    const { currentView, selectedDeveloper } = useTableStore.getState();
    expect(currentView).toBe('tasks');
    expect(selectedDeveloper).toEqual(testDeveloper);
  });

  it('should reset view to developers', () => {
    const { resetView, loadMockData, selectDeveloper } = useTableStore.getState();
    loadMockData();
    selectDeveloper(mockDevelopers[0]);
    
    resetView();
    
    const { currentView, selectedDeveloper } = useTableStore.getState();
    expect(currentView).toBe('developers');
    expect(selectedDeveloper).toBeNull();
  });

  it('should initialize with default values', () => {
    const { currentView, selectedDeveloper, developers } = useTableStore.getState();
    
    expect(currentView).toBe('developers');
    expect(selectedDeveloper).toBeNull();
    expect(developers).toEqual([]);
  });
});