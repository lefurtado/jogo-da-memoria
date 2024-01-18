/* eslint-disable react/prop-types */
import "./styles.css";

export default function Card({ flipped = false, back, handleClick, id }) {
  const cardContentClassNames = ["card__content"];
  flipped && cardContentClassNames.push("card__content--flipped");

  const handleClickFn = (id) => {
    if (handleClick) {
      handleClick(id);
    }
  };

  return (
    <div onClick={() => handleClickFn(id)} className={`${cardContentClassNames.join(' ')} card__content w-40 h-40 bg-dark-10 rounded-lg cursor-pointer`}>
      <div className="absolute backface-hidden size-full flex items-center justify-center text-8xl rounded-lg card__face--front">
        ?
      </div>
      <div className="absolute backface-hidden size-full flex items-center justify-center rounded-lg card__face--back">
        <img src={back} alt="" />
      </div>
    </div>
  );
}
