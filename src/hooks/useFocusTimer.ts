import { SetStateAction, useEffect, useState } from 'react'

export default function useFocusTimer() {
  const [ mmTimer, setMmtimer ] = useState( 25 )
  const [ ssTimer, setSstimer ] = useState( 0 )
  const [ isRunning, setIsRunning ] = useState( false )
  const [ rounds, setRounds ] = useState( 1 )
  const [ breakTime, setBreakTime ] = useState( 5 )
  const [ isBreak, setIsBreak ] = useState( false )
  const [ selectedOption, setSelectedOption ] = useState( 'Focus Time' )

  useEffect( () =>
  {
    let timer: number | undefined

    if ( isRunning && mmTimer >= 0 && ssTimer >= 0 )
    {
      timer = setInterval( () =>
      {
        if ( ssTimer === 0 )
        {
          if ( mmTimer === 0 )
          {
            if ( isBreak )
            {
              setMmtimer( 25 )
              setSstimer( 0 )
              setIsBreak( false )
              setRounds( rounds + 1 )
            } else
            {
              setMmtimer( 0 )
              setSstimer( breakTime )
              setIsBreak( true )
            }
          } else
          {
            setMmtimer( mmTimer - 1 )
            setSstimer( 59 )
          }
        } else
        {
          setSstimer( ssTimer - 1 )
        }
      }, 1000 )
    }

    return () =>
    {
      clearInterval( timer )
    }
  }, [ isRunning, mmTimer, ssTimer, rounds, breakTime, isBreak ] )

  const toggleTimer = () =>
  {
    setIsRunning( !isRunning )
  }

  const resetTimer = () =>
  {
    setMmtimer( 25 )
    setSstimer( 0 )
    setIsRunning( false )
    setIsBreak( false )
  }

  const adjustTime = ( minutes: number ) =>
  {
    if ( !isRunning && mmTimer + minutes >= 0 )
    {
      setMmtimer( ( prevMmTimer ) => ( prevMmTimer + minutes <= 55 ? prevMmTimer + minutes : prevMmTimer ) )
    }
  }

  const selectTimer = ( timerType: SetStateAction<string> ) =>
  {
    setSelectedOption( timerType )
    switch ( timerType )
    {
      case 'Focus Time':
        setMmtimer( 25 )
        setSstimer( 0 )
        setIsBreak( false )
        setIsRunning( false )
        break
      case 'Short Break':
        setMmtimer( 5 )
        setSstimer( 0 )
        setIsBreak( true )
        setIsRunning( false )
        break
      case 'Long Break':
        setMmtimer( 30 )
        setSstimer( 0 )
        setIsBreak( true )
        setIsRunning( false )
        break
      default:
        break
    }
  }

  return {
    mmTimer,
    ssTimer,
    isRunning,
    rounds,
    breakTime,
    isBreak,
    setBreakTime,
    selectedOption,
    toggleTimer,
    resetTimer,
    adjustTime,
    selectTimer,
  }
}
