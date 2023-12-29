import './MainPage.css';

import db from './db.json'

export const MainPage = () => {

  return (
    <div class="home">
      <div class="list">
        {
          db.games.map(game => (
            <div key={game.id} class="list_item">
              <div class="game_title">
                <a href={game.link} target="_blank">
                {game.title} 
                </a>
                </div>
              <div class="game_status">{game.status}</div>
              <div class="game_price">{game.price}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}