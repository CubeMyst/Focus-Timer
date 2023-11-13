interface DisplayProps {
  minutes: number,
  seconds: number
}

export default function TimeDisplay({ minutes: mmTimer, seconds: ssTimer }: DisplayProps) {
  return (
    <div className="text-center text-7xl font-bold w-full">
      <span>{mmTimer < 10 ? `0${mmTimer}` : mmTimer}</span>:
      <span>{ssTimer < 10 ? `0${ssTimer}` : ssTimer}</span>
    </div>
  )
}