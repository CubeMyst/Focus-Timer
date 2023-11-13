import { MagicMotion, MagicExit } from 'react-magic-motion'
import useFocusTimer from './hooks/useFocusTimer'
import Header from './components/Header'
import TimerControl from './components/TimerControl'
import TimerButtons from './components/TimerButtons'
import ActionButtons from './components/ActionButtons'
import Footer from './components/Footer'
import './App.css'

export default function App ()
{
  const {
    adjustTime,
    breakTime,
    isRunning,
    mmTimer,
    resetTimer,
    rounds,
    selectTimer,
    selectedOption,
    ssTimer,
    toggleTimer
  } = useFocusTimer()

  return (
    <MagicMotion>
      <main className="h-screen flex justify-center items-center outline-none font-poppins">
        <section className="w-80 flex flex-col gap-5">
          <Header />
          <MagicExit>
            <section className="flex flex-col justify-center gap-8">
              <TimerControl adjustTime={ adjustTime } minutes={ mmTimer } seconds={ ssTimer } />
              <TimerButtons selectTimer={ selectTimer } selectedOption={ selectedOption } />
              <ActionButtons isRunning={ isRunning } resetTimer={ resetTimer } toggleTimer={ toggleTimer } />
            </section>
          </MagicExit>
          <Footer rounds={ rounds } breakTime={ breakTime } />
        </section>
      </main>
    </MagicMotion>
  )
}
