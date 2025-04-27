import { useState } from "react";
import racingCar from "/form1.png";
import "./App.css";
import Modal from "./modal";

function App() {
  const [count, setCount] = useState(0);
  const [currentScore, setScore] = useState(0);
  const [clickPerOne, setClickPerOne] = useState(1);
  const [modalActive, setModalActive] = useState(false);
  const [upgradeCosts, setUpgradeCosts] = useState([50, 150, 1000, 10000]); 
  const [upgradeIncrements] = useState([1, 2, 3, 4]); 

  const handleClick = () => {
    setScore(currentScore + clickPerOne); 
  };

  const upgradeClickPower = (index) => {
    const cost = upgradeCosts[index];
    if (currentScore >= cost) {
      setScore(currentScore - cost);
      setClickPerOne(clickPerOne + upgradeIncrements[index]);

      
      const newCosts = [...upgradeCosts];
      newCosts[index] *= 1.5; 
      setUpgradeCosts(newCosts);
    }
  };

  return (
    <>
      <h1>RACING CAR</h1>

      <div className="conteiner">
        <div className="res">
          <span>Сила клика: {clickPerOne}</span>
          <div className="res-score">{currentScore}</div>
        </div>
      </div>

      <div className="card">
        <button onClick={handleClick}>
          <img src={racingCar} className="logo" alt="Race car" />
          {/* count is {count} */}
        </button>
      </div>
      <p className="read-the-docs">Click on the CAR</p>
      <div className="upgrade">
        <button id="open-modal-btn" onClick={() => setModalActive(true)}>
          МАГАЗИН
        </button>
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <h2>Магазин улучшений</h2>

        <button onClick={() => upgradeClickPower(0)} disabled={currentScore < upgradeCosts[0]}>
        Тормоза +1 <p>цена: {upgradeCosts[0]}</p>
      </button>
      <button onClick={() => upgradeClickPower(1)} disabled={currentScore < upgradeCosts[1]}>
        Колёса +2 <p>цена: {upgradeCosts[1]}</p>
      </button>
      <button onClick={() => upgradeClickPower(2)} disabled={currentScore < upgradeCosts[2]}>
        Подвеска +3 <p>цена: {upgradeCosts[2]}</p>
      </button>
      <button onClick={() => upgradeClickPower(3)} disabled={currentScore < upgradeCosts[3]}>
        Двигатель +4 <p>цена: {upgradeCosts[3]}</p>
      </button>
      </Modal>
    </>
  );
}

export default App;
