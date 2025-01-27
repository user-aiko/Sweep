import "./App.css";

import { SweepWrapper, useSweep } from "../../src/index";

function App() {
  return (
    <>
      <SweepWrapper backgroundColor="rgb(26, 26, 26)" foregroundColor="black">
        <AppBody />
      </SweepWrapper>
    </>
  );
}

export default App;

const AppBody = () => {
  const sweep = useSweep();
  return (
    <div className="size-full bg-red">
      <div className="flex flex-col gap-3 justify-center size-full items-center">
        <span className="text-2xl font-bold tracking-wide">Sweep test</span>
        <button
          className="bg-white/10 text-white border border-white/10 px-4 py-1.5 rounded-md cursor-pointer hover:bg-white/15 transition-all duration-100"
          onClick={() => sweep.open(<Squares number={1} key={1} />)}
        >
          Try Sweep
        </button>
      </div>
    </div>
  );
};

const Square = () => {
  return (
    <div className="bg-white/5 border border-white/10 w-full h-36 rounded-md max-w-xl"></div>
  );
};

const Squares = ({ number }: { number: number }) => {
  const sweep = useSweep();
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-4 w-full">
      {[...Array(number)].map((_, index) => (
        <Square key={index} />
      ))}
      <div className="w-full max-w-xl py-0.5 px-1">
        <hr className="border-white/10" />
      </div>
      <div className="flex gap-1 w-full max-w-xl">
        {number != 1 && (
          <button
            className="bg-white/10 text-white border border-white/10 px-6 py-1.5 rounded-md cursor-pointer hover:bg-white/15 transition-all duration-100 flex-1"
            onClick={() => sweep.open(<Squares number={1} key={1} />)}
          >
            Back
          </button>
        )}
        <button
          className="bg-white/10 text-white border border-white/10 px-6 py-1.5 rounded-md cursor-pointer hover:bg-white/15 transition-all duration-100 flex-1"
          onClick={() => sweep.close()}
        >
          Close
        </button>
        {number != 2 && (
          <button
            className="bg-white/10 text-white border border-white/10 px-6 py-1.5 rounded-md cursor-pointer hover:bg-white/15 transition-all duration-100 flex-1"
            onClick={() => sweep.open(<Squares number={2} key={2} />)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
