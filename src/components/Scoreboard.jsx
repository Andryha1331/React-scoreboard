import React, { useState } from 'react';


const Scoreboard = function () {
  const [pointsHome, addPointsHome] = useState(0);
  const [pointsGuest, addPointsGuest] = useState(0);

  function reStart() {
    console.log(pointsHome);
    console.log(pointsGuest);

    addPointsHome(0);
    addPointsGuest(0);

    console.log(pointsHome);
    console.log(pointsGuest);
  }

  function scoreBoardMain() {
    document
      .querySelectorAll(".scoreboard-event-temp")
      .forEach((element) => {
        element.addEventListener("click", (event) => {
          if (!event.target.dataset.score) return;

          const score = Number(event.target.dataset.score);

          const scoreElement = event.target
            .closest(".scoreboard-temp")
            .querySelector(".scoreboard-score-temp");

          if (scoreElement.classList.contains('home-scoreboard-score')) {
            addPointsHome(pointsHome + score);
          }
          else {
            addPointsGuest(pointsGuest + score);
          }
        });
      })
  }

  return (
    <><div className="scoreboard" onClick={scoreBoardMain}>
      <div className="home-scoreboard scoreboard-temp">
        <p className="home-scoreboard-title">HOME</p>

        <div className="home-scoreboard-view">
          <p className="home-scoreboard-score scoreboard-score-temp">{pointsHome}</p>
        </div>

        <div className="home-scoreboard-addscore scoreboard-event-temp">
          <button className="button-addscore" data-score="1">
            + 1
          </button>

          <button className="button-addscore" data-score="2">
            + 2
          </button>

          <button className="button-addscore" data-score="3">
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
          <button className="button-addscore" data-score="1">
            + 1

          </button>

          <button className="button-addscore" data-score="2">
            + 2
          </button>

          <button className="button-addscore" data-score="3">
            + 3
          </button>
        </div>
      </div>
    </div>

      <button className="new-game" onClick={reStart}> New Game </button></>
  )
}

export default Scoreboard;