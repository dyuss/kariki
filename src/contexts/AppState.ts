import { createContext } from 'preact';
import { Signal, signal } from '@preact/signals';

type Filters = {
  statuses: string[];
  title: string;
};

type AppState = {
  availableStatuses: string[];
  filters: Signal<Filters>;
};

const getDefaultFilters = (): Filters => ({
  statuses: [],
  title: '',
});

export const getDefaultAppState = (): AppState => {
  const filters = signal<Filters>(getDefaultFilters());

  return {
    filters,
    availableStatuses: [],
  };
};

export const AppStateContext = createContext<AppState>(getDefaultAppState());
