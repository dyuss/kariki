import { createContext } from 'preact';
import { Signal, signal } from '@preact/signals';

type Filters = {
  statuses: string[];
  title: string;
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
