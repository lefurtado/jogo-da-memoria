/* eslint-disable react/prop-types */
import web from '../../assets/images/Web.png';

export default function Modal({ handleReset }) {
  return (
    <div className="bg-black bg-opacity-80 fixed w-[100%] h-[100vh] top-0 left-0">
      <div className="relative bg-dark-10 w-60 h-72 sm:w-[700px] sm:h-[520px] mx-auto mt-20 rounded-xl flex flex-col items-center justify-center gap-5 sm:gap-28">
        <img className='absolute top-[-10%] left-[85%] w-16 sm:w-24 sm:left-[93%]' src={web} alt="" />
        <p className="sm:text-8xl text-5xl text-brand-color">Buuh!!</p>
        <p className="font-sans text-white p-2 sm:text-xl">Parabéns, você terminou o jogo da memória, aperte o botao reiniciar para jogar novamente</p>
        <button onClick={handleReset} className="border-2 p-1 sm:text-3xl text-sm text-brand-color border-brand-color bg-brand-color-alt rounded">Reiniciar</button>
      </div>
    </div>
  );
}
