import { create } from 'zustand';
import type { Developer } from '../types/developer';
import { mockDevelopers } from '../data/mockData';

interface TableStore {
    currentView: 'developers' | 'tasks';
    selectedDeveloper: Developer | null;
    developers: Developer[];
    selectDeveloper: (developer: Developer) => void;
    resetView: () => void;
    loadMockData: () => void;
}

export const useTableStore = create<TableStore>((set) => ({
    currentView: 'developers',
    selectedDeveloper: null,
    developers: [],
    selectDeveloper: (developer) => set({
        currentView: 'tasks',
        selectedDeveloper: developer
    }),
    resetView: () => set({
        currentView: 'developers',
        selectedDeveloper: null
    }),
    loadMockData: () => set({
        developers: mockDevelopers
    }),
}));