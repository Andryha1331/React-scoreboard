import React, { useState } from 'react';


const Scoreboard = function () {
  const [pointsHome, addPointsHome] = useState(0);
  const [pointsGuest, addPointsGuest] = useState(0);

  function reStart() {
    addPointsHome(0);
    addPointsGuest(0);
  }

  return (
    <><div className="scoreboard">
      <div className="home-scoreboard scoreboard-temp">
        <p className="home-scoreboard-title">HOME</p>

        <div className="home-scoreboard-view">
          <p className="home-scoreboard-score scoreboard-score-temp">{pointsHome}</p>
        </div>

        <div className="home-scoreboard-addscore scoreboard-event-temp">
          <button className="button-addscore" onClick={() => addPointsHome(pointsHome + 1)}>
            + 1
          </button>

          <button className="button-addscore" onClick={() => addPointsHome(pointsHome + 2)}>
            + 2
          </button>

          <button className="button-addscore" onClick={() => addPointsHome(pointsHome + 3)}>
            + 3
          </button>
        </div>

      </div>

      <div className="guest-scoreboard scoreboard-temp">
        <p className="guest-scoreboard-title">GUEST</p>

        <div className="guest-scoreboard-view">
          <p className="guest-scoreboard-score scoreboard-score-temp">{pointsGuest}</p>
        </div>

        <div className="guest-scoreboard-addscore scoreboard-event-temp">
          <button className="button-addscore" onClick={() => addPointsGuest(pointsGuest + 1)}>
            + 1

          </button>

          <button className="button-addscore" onClick={() => addPointsGuest(pointsGuest + 2)}>
            + 2
          </button>

          <button className="button-addscore" onClick={() => addPointsGuest(pointsGuest + 3)}>
            + 3
          </button>
        </div>
      </div>
    </div><button className="new-game" onClick={reStart}> New Game </button></>
  )
}

export default Scoreboard;