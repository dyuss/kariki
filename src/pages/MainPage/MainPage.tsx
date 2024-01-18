import { useEffect, useMemo, useState } from 'preact/hooks';
import { Filters } from '../../components/Filters/Filters';
import { List } from '../../components/List/List';
import { AppStateContext, getDefaultAppState } from '../../contexts/AppState';

import './MainPage.css';
import { Game } from '../../types/Game';

type DB = {
  games: Game[];
  date: string;
};

export const MainPage = () => {
  const [db, setDb] = useState<DB | null>(null);
  useEffect(() => {
    const fetchDB = async () => {
      const response = await fetch('/db.json');
      setDb(await response.json());
    };
    fetchDB();
  }, []);

  console.log(db);

  if (!db) {
    return null;
  }

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
