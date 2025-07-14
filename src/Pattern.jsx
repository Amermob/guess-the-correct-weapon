import { useState } from "react";
import "./style.css";
import { cards } from "./box";

export default function Pattern() {
  const [boxes, setBoxes] = useState(cards);
  const [prev, setPrev] = useState(-1);

  function handleClick(index) {
    if (prev === -1) {
      boxes[index].state = "active";
      setBoxes([...boxes]);
      setPrev(index);
    } else {
      check(index);
    }
  }

  function check(index) {
    if (boxes[index].title === boxes[prev].title) {
      boxes[index].state = "correct";
      boxes[prev].state = "correct";
      setBoxes([...boxes]);
      setPrev(-1);
    } else {
      boxes[index].state = "wrong";
      boxes[prev].state = "wrong";
      setBoxes([...boxes]);
      setTimeout(() => {
        boxes[index].state = "";
        boxes[prev].state = "";
        setPrev(-1);
      }, 1000);
    }
  }

  return (
    <>
      <header>
        <img src="icon.png" alt="" />
        <p>Guess the Correct Weapon</p>
      </header>
      <div className="container">
        <main>
          {boxes.map((box, index) => {
            return (
              <div
                className={box.state}
                onClick={() => handleClick(index)}
                key={box.id}
                id={box.title}
              >
                <img
                  className={box.state ? "turned" : ""}
                  src={box.img}
                  alt={box.title}
                />
              </div>
            );
          })}

        </main>
      </div>
    </>
  );
}
