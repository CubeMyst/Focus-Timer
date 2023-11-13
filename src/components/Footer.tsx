interface FooterProp {
  rounds: number,
  breakTime: number
}

export default function Footer({ rounds, breakTime }: FooterProp) {
  return (
    <footer className="flex justify-between items-center">
      <div className="flex flex-col font-bold items-center">
        <p>{rounds}</p>
        <p className="opacity-50">rounds</p>
      </div>
      <div className="flex flex-col font-bold items-center">
        <p>{breakTime < 10 ? `0${breakTime}` : breakTime}:00</p>
        <p className="opacity-50">time</p>
      </div>
    </footer>
  )
}