import { createContext } from 'preact';
import { Signal, signal } from '@preact/signals';
import { Game } from '../types/Game';

type Filters = {
  statuses: string[];
  title: string;
  conditions: Game['condition'][];
};

export type SortType = 'id' | 'price' | 'title';

type AppState = {
  availableStatuses: string[];
  filters: Signal<Filters>;
  sorting: Signal<SortType>;
};

const getDefaultFilters = (): Filters => ({
  statuses: [],
  title: '',
  conditions: [],
});

export const getDefaultAppState = (): AppState => {
  const filters = signal<Filters>(getDefaultFilters());
  const sorting = signal<SortType>('id');

  return {
    filters,
    sorting,
    availableStatuses: [],
  };
};

export const AppStateContext = createContext<AppState>(getDefaultAppState());
