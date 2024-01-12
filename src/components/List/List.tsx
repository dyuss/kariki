import { useContext } from 'preact/hooks';
import { Game } from '../../types/Game';
import { AppStateContext } from '../../contexts/AppState';

interface Props {
  games: Game[]
}

export const List = ({ games }: Props) => {
  const { filters } = useContext(AppStateContext);

  const filterGame = (game: Game) => {
    const { statuses, title } = filters.value;

    const isStatus = statuses.length > 0
      ? statuses.includes(game.status)
      : true;

    const isTitle = title.length > 0
      ? game.title.toLowerCase().includes(title.toLowerCase().trim())
      : true;

    return isStatus && isTitle;
  };

  return (
    <div className="games-list">
      <table role="grid">
        <tbody>
          {
            games
              .filter(filterGame)
              .sort((a, b) => (+a.price > +b.price ? -1 : 1))
              .map((game) => (
                <tr key={game.id}>
                  <td className="game_title">
                    <a href={game.link} target="_blank" rel="noreferrer">
                      {game.title}
                    </a>
                  </td>
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
