import { useState, useEffect } from 'react'
import { calculateTimeRemaining } from '@/lib/utils'

export function useCountdown(targetDate) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return timeRemaining
}