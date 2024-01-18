/* eslint-disable react/prop-types */
export default function Modal({ handleReset }) {
  return (
    <div className="bg-black bg-opacity-80 fixed w-[100%] h-[100vh] top-0 left-0">
      <div className="bg-brand-color-alt w-56 sm:w-96 sm:h-[520px] h-72 mx-auto mt-20 rounded-xl flex flex-col items-center justify-center gap-5">
        <p className="sm:text-8xl text-5xl text-brand-color">Buuuu! parabéns você ganhou!</p>
        <button onClick={handleReset} className="border-2 p-1 sm:text-3xl text-sm text-brand-color border-brand-color bg-brand-color-alt rounded">Reiniciar</button>
      </div>
    </div>
  );
}
