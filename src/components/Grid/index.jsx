/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { duplicateRegenerateSortArray } from "../../utils/card-utils";
import Card from "../Card";
import Modal from "../Modal";
import "./styles.css";

export default function Grid({ cards }) {
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });

  const first = useRef(null);
  const second = useRef(null);
  const unflip = useRef(false);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  const handleReset = () => {
    setStateCards(duplicateRegenerateSortArray(cards));
    first.current = null;
    second.current = null;
    unflip.current = false;
    setMatches(0);
    setMoves(0);
  };

  const handleClick = (id) => {
    const newStateCards = stateCards.map((card) => {
      // Se o id do cartão não for o id clicado, não faz nada
      if (card.id !== id) return card;
      // Se o cartão já estiver virado, não faz nada
      if (card.flipped) return card;

      // Desviro possíveis cartas erradas
      if (unflip.current && first.current && second.current) {
        first.current.flipped = false;
        second.current.flipped = false;
        first.current = null;
        second.current = null;
        unflip.current = false;
      }

      // Virar o card
      card.flipped = true;

      // Configura primeiro e segundo cartão clicados
      if (first.current === null) {
        first.current = card;
      } else if (second.current === null) {
        second.current = card;
      }

      // Se eu tenho os dois cartão virados
      // Posso checar se estão corretos
      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          // A pessoa acertou
          first.current = null;
          second.current = null;
          setMatches((m) => m + 1);
        } else {
          // A pessoa errou
          unflip.current = true;
        }

        setMoves((m) => m + 1);
      }

      return card;
    });

    setStateCards(newStateCards);
  };

  return (
    <>
      <div className="background_style h-[1080px] sm:h-screen">
        <div className="relative bg-gradient-to-t from-transparent to-black h-screen">
          <main className="max-w-7xl mx-auto text-center">
            <div className="flex flex-col items-center xl:gap-5">
              <p className="text-5xl sm:text-8xl text-brand-color-light mt-10">
                Jogo da memória
              </p>
              {/* <select
                className="font-sans bg-brand-color-alt text-brand-color border-2 border-brand-color rounded p-2 w-72"
                name="select-nivel"
                id="select-nivel"
              >
                <option value="easy">Nível fácil</option>
                <option value="medium">Nível médio</option>
                <option value="hard">Nível difícil</option>
              </select> */}

              {/* IMPLEMENTAR SELEÇÃO DE NÍVEL DE DIFICULDADE */}

              <p className="xl:text-3xl text-brand-color-light">
                Movimentos: {moves} | Acertos: {matches} |{"    "}
                <button
                  onClick={handleReset}
                  className="border-2 p-1 border-brand-color bg-brand-color-alt rounded"
                >
                  Reiniciar
                </button>
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 xl:gap-5 2xl:gap-8 mt-5">
                {stateCards.map((card) => {
                  return (
                    <Card {...card} key={card.id} handleClick={handleClick} />
                  );
                })}
              </div>
              {matches === 9 ? <Modal handleReset={handleReset} /> : null}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
