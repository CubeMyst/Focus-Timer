interface TimerButtonsProps {
  selectedOption: string,
  selectTimer: (timerTyper: string) => void
}

export default function TimerButtons({ selectedOption, selectTimer }: TimerButtonsProps) {
  return (
    <aside className="flex justify-between font-bold gap-4">
      <button className={ selectedOption === 'Focus Time' ? 'text-black' : 'opacity-50' } onClick={ () => selectTimer( 'Focus Time' ) }>
        Focus Time
      </button>
      <button className={ selectedOption === 'Short Break' ? 'text-black' : 'opacity-50' } onClick={ () => selectTimer( 'Short Break' ) }>
        Short Break
      </button>
      <button className={ selectedOption === 'Long Break' ? 'text-black' : 'opacity-50' } onClick={ () => selectTimer( 'Long Break' ) }>
        Long Break
      </button>
    </aside>
  )
}