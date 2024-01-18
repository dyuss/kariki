import { useMemo } from 'preact/hooks';
import { Filters } from '../../components/Filters/Filters';
import { List } from '../../components/List/List';
import { AppStateContext, getDefaultAppState } from '../../contexts/AppState';

import './MainPage.css';

import db from './db.json';

export const MainPage = () => {
  const state = useMemo(() => ({
    ...getDefaultAppState(),
    availableStatuses: [...new Set(db.games.map((item) => item.status))],
  }), [db.date]);

  return (
    <AppStateContext.Provider value={state}>
      <div className="main-page">
        <Filters />
        <List
          games={db.games}
          date={db.date}
        />
      </div>
    </AppStateContext.Provider>
  );
};
