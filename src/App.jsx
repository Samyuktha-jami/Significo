import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Home from './components/Home/Index'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 90%',
        end: 'bottom 90%',
        onEnter: () => {
          document.body.setAttribute(
            'theme',
            section.getAttribute('data-color') || 'light'
          )
        },
      })
    })

    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="section main w-full">
      <Home />
    </div>
  )
}

export default App
