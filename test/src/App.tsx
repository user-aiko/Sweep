import "./App.css";
import { X, MoveRight } from "lucide-react";

import { SweepWrapper, useSweep } from "../../src/index";

function App() {
  return (
    <>
      <SweepWrapper backgroundColor="rgb(15, 10, 10)" foregroundColor="black">
        <MainPage />
      </SweepWrapper>
    </>
  );
}

export default App;

const MainPage = () => {
  const sheet = useSweep();

  return (
    <div className="w-full h-full flex items-center justify-center text-secondary-foreground flex-col gap-4">
      <div className="px-[calc(1rem-1px)] flex justify-center items-center flex-col gap-2">
        <span className="text-[30px] font-semibold ">Sweep.</span>
        <span className="opacity-50">A Slide-up panel made using react.</span>
      </div>
      <div className="flex flex-col gap-2 pb-10 sm:pb-0">
        <div className="flex gap-1 w-full justify-center">
          <button
            onClick={() => sheet.open(<Hey key={1} />)}
            className="border border-gray-100/50  opacity-60 text-sm font-normal bg-gray-100/10  hover:bg-gray-100/20 cursor-pointer duration-150  px-4 py-2 rounded-full"
          >
            Try Sweep.
          </button>
        </div>
      </div>
    </div>
  );
};

const Hey = () => {
  const sheet = useSweep();

  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex flex-col justify-between items-center gap-4 p-4 py-8  max-w-screen-sm">
        <div className="flex flex-col justify-center items-start w-full gap-2">
          <span className="font-bold text-3xl">Hey</span>
          <span className="opacity-60">This is Sweep, made by Aiko.</span>
        </div>
        <div className="flex justify-center items-center gap-2 w-full">
          <button
            onClick={() => sheet.close()}
            className="bg-gray-100/20 opacity-80 hover:bg-gray-100/30 active:bg-gray-100/40 cursor-pointer duration-150 px-3.5 py-3 rounded-full h-full aspect-square"
          >
            <X size={20} />
          </button>
          <button
            onClick={() => {
              sheet.open(<Usage key={2} />);
            }}
            className="bg-white/80 text-black  hover:bg-white/90 active:bg-white/60 duration-150 cursor-pointer px-10 py-3 rounded-full flex flex-1 justify-center items-center gap-2"
          >
            Next <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const Usage = () => {
  const sheet = useSweep();

  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex flex-col justify-between items-center p-4 py-8 gap-4 max-w-screen-sm">
        <div className="flex flex-col justify-center items-start w-full gap-2">
          <span className="font-bold text-3xl">Ease of use</span>
          <span className="opacity-60">
            Just wrap your app with a SweepWrapper component, and call Sweep
            wherever you want within your app.
          </span>
        </div>
        <div className="flex justify-center items-center gap-2 w-full">
          <button
            onClick={() => sheet.open(<Hey key={1} />)}
            className="bg-gray-100/20 opacity-80 hover:bg-gray-100/30 active:bg-gray-100/40 cursor-pointer duration-150  px-6 py-3 rounded-full"
          >
            Previous
          </button>
          <button
            onClick={() => sheet.open(<Menu key={3} />)}
            className="bg-white/80 text-black  hover:bg-white/90 active:bg-white/60 duration-150 cursor-pointer px-10 py-3 rounded-full flex  justify-center items-center gap-2 flex-1"
          >
            Note <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const sheet = useSweep();

  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex flex-col justify-between items-center p-4 py-8 gap-4 max-w-screen-sm">
        <div className="flex flex-col justify-center items-start w-full gap-2">
          <ul className="flex flex-col justify-center items-start w-full gap-3">
            <li className=" w-full mb-2">
              <div className="w-full flex justify-between items-center">
                <span className="font-bold text-3xl">Note</span>
                <button
                  onClick={() => sheet.close()}
                  className="bg-gray-100/20 opacity-80 hover:bg-gray-100/30 active:bg-gray-100/40 cursor-pointer duration-150 px-3.5 py-3 rounded-full h-full aspect-square"
                >
                  <X size={20} />
                </button>
              </div>
            </li>
            <li className="font-semibold text-secondary-foreground/60 sm:text-xl text-base">
              <span className="block leading-normal">
                Sweep is a slide-up panel for displaying additional content,
                featuring:
              </span>
            </li>
            <li className="sm:text-xl text-base sm:font-semibold font-normal text-secondary-foreground/60 ">
              <span className="opacity-60">
                <pre />
                • &nbsp;Openning, closing, and switching animations.
                <pre />
                • &nbsp;Gestures for devices with touch support.
                <pre />• &nbsp;Exceptional ease of use.
              </span>
            </li>
            <li className="sm:text-xl text-base font-semibold text-secondary-foreground/60 pt-2">
              <span className="flex justify-center items-center gap-2">
                Made by{" "}
                <a
                  href="https://twitter.com/username_aiko"
                  target="_blank"
                  className="inline"
                >
                  <span className="flex justify-center items-center gap-2">
                    <img
                      className="h-8 w-8 aspect-square rounded-full"
                      src="https://pbs.twimg.com/profile_images/1776575814621892608/ckPe17E7_400x400.jpg"
                      alt="twitterpfp"
                    />{" "}
                    Aiko.
                  </span>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
