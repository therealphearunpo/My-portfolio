import { useState, useEffect, useRef } from 'react'

const GREETINGS = ['Hello!', 'Hi there!', 'Welcome!', 'Hey!', 'Beep boop!'];

function MyRobot({ className = "" }) {
  const [isWaving, setIsWaving] = useState(false)
  const [message, setMessage] = useState('')
  const waveTimeoutRef = useRef(null)
  const msgTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsWaving(true)
      clearTimeout(waveTimeoutRef.current)
      waveTimeoutRef.current = setTimeout(() => setIsWaving(false), 800)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(waveTimeoutRef.current)
    }
  }, [])

  const handleRobotClick = () => {
    // Trigger wave
    setIsWaving(true)
    clearTimeout(waveTimeoutRef.current)
    waveTimeoutRef.current = setTimeout(() => setIsWaving(false), 800)

    // Show random message
    const randomMsg = GREETINGS[Math.floor(Math.random() * GREETINGS.length)]
    setMessage(randomMsg)
    
    clearTimeout(msgTimeoutRef.current)
    msgTimeoutRef.current = setTimeout(() => setMessage(''), 2500)
  }

  return (
    <div className={`floating-robot ${className}`} onClick={handleRobotClick}>
      {message && (
        <div className="robot-speech-bubble">
          {message}
        </div>
      )}
      <img 
        src="/robot_transparent.png" 
        alt="Floating Robot" 
        className={isWaving ? 'waving' : ''}
      />
    </div>
  )
}

export default MyRobot
