interface ActionButtonsProp {
  toggleTimer: () => void,
  isRunning: boolean,
  resetTimer: () => void
}

export default function ActionButtons({ toggleTimer, isRunning, resetTimer }: ActionButtonsProp) {
  return (
    <div className="flex flex-col justify-between gap-2">
      <button
        className={ `py-2 px-3 font-bold rounded-md transition-colors hover:bg-opacity-70 delay-100 ease-in-out ${ isRunning ? 'bg-black text-white' : 'bg-black text-white' }` }
        onClick={ toggleTimer }
      >
        { isRunning ? 'Pause' : 'Start' }
      </button>
      <button className="font-bold" onClick={ resetTimer }>
        Reset
      </button>
    </div>
  );
}