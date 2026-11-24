

import Slider from './Slider/Slider'
import Sketch from './Sketch'
import Contact from './Contact'

export default function Projects() {
  return (
    <section id='projects'>
      <div className='container'>
        <div className='text-center'>
          <h2>Our projects</h2>
          <span className='small-text text-main text-black up-case'>Ideas brought to life with care</span>
        </div>
        <Slider />
      </div>
      <div className='background'>
        <div className='play'></div>
      </div>
      <Sketch />
      <Contact />
    </section>
  )
}
