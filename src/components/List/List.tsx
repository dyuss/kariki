import { useContext, useMemo } from 'preact/hooks';
import { Game } from '../../types/Game';
import { AppStateContext } from '../../contexts/AppState';

import './List.css';

interface Props {
  games: Game[];
  date: string;
}

const sortById = (first: Game, second: Game) => {
  if (first.id === second.id) {
    return 0;
  }
  return first.id > second.id ? -1 : 1;
};

const sortByPrice = (first: Game, second: Game) => {
  if (first.price === second.price) {
    return 0;
  }
  return first.price < second.price ? -1 : 1;
};

const sortByTitle = (first: Game, second: Game) => {
  if (first.title === second.title) {
    return 0;
  }
  return first.title < second.title ? -1 : 1;
};

export const translateCondition = (condition: Game['condition']) => {
  switch (condition) {
    case 'new':
      return 'Новый';
    case 'used':
      return 'Б/У';
    default:
      return condition;
  }
};

export const List = ({ games, date }: Props) => {
  const { filters, sorting } = useContext(AppStateContext);

  const filterGame = (game: Game) => {
    const { statuses, title, conditions } = filters.value;

    const isStatus = statuses.length > 0
      ? statuses.includes(game.status)
      : true;

    const isCondition = conditions.length > 0
      ? conditions.includes(game.condition)
      : true;

    const isTitle = title.length > 0
      ? game.title.toLowerCase().includes(title.toLowerCase().trim())
      : true;

    return isStatus && isTitle && isCondition;
  };

  const sortGames = (first: Game, second: Game) => {
    switch (sorting.value) {
      case 'price':
        return sortByPrice(first, second);
      case 'title':
        return sortByTitle(first, second);
      case 'id':
      default:
        return sortById(first, second);
    }
  };

  const filteredGames = useMemo(() => games
    .filter(filterGame)
    .sort(sortGames), [sorting.value, JSON.stringify(filters.value)]);

  return (
    <div className="games-list">
      <div className="games-list__header">
        <div className="games-list__count">
          Найдено:
          {' '}
          {filteredGames.length}
          /
          {games.length}
        </div>
        <div className="games-list__date">
          Обновление:
          {' '}
          {new Date(date).toLocaleString()}
        </div>
      </div>
      <table role="grid">
        <tbody>
          {
            filteredGames
              .map((game) => (
                <tr key={game.id}>
                  <td className="game_title">
                    <a href={game.link} target="_blank" rel="noreferrer">
                      {game.title}
                    </a>
                  </td>
                  <td className="game_condition">{translateCondition(game.condition)}</td>
                  <td className="game_status">{game.status}</td>
                  <td className="game_price">{game.price}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
};
