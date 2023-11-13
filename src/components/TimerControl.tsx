import TimeDisplay from "./TimeDisplay"

interface TimerControlProp
{
  minutes: number,
  seconds: number,
  adjustTime: ( count: number ) => void
}

export default function TimerControl ( { adjustTime, minutes, seconds }: TimerControlProp )
{
  return (
    <div className="flex justify-center items-center gap-6">
      <button className="h-9 w-14 text-xl font-bold flex justify-center items-center rounded-full border-2 border-black" onClick={ () => adjustTime( -5 ) }>
        -
      </button>
      <TimeDisplay minutes={ minutes } seconds={ seconds } />
      <button className="h-9 w-14 text-xl font-bold flex justify-center items-center rounded-full border-2 border-black" onClick={ () => adjustTime( 5 ) }>
        +
      </button>
    </div>
  )
}