import { useState, useEffect } from 'react'

function MyRobot() {
  const [isWaving, setIsWaving] = useState(false)

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setIsWaving(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => setIsWaving(false), 800) // wave for 800ms
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="floating-robot d-none d-sm-block">
      <img 
        src="/robot_transparent.png" 
        alt="Floating Robot" 
        className={isWaving ? 'waving' : ''}
      />
    </div>
  )
}

export default MyRobot
