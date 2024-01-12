import { useMemo } from 'preact/hooks';
import { Filters } from '../../components/Filters/Filters';
import { List } from '../../components/List/List';
import './MainPage.css';

import db from './db.json';
import { AppStateContext, getDefaultAppState } from '../../contexts/AppState';

export const MainPage = () => {
  const state = useMemo(() => ({
    ...getDefaultAppState(),
    availableStatuses: [...new Set(db.games.map((item) => item.status))],
  }), [db.games]);

  return (
    <AppStateContext.Provider value={state}>
      <div className="main-page">
        <Filters />
        <List
          games={db.games}
        />
      </div>
    </AppStateContext.Provider>
  );
};
