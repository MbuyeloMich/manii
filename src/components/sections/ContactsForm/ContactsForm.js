
import AnimatedText from '../../scroll/TextAnimation'
import mockup from '../../../assets/Mockup.png';
import './contactForm.css'
 
import Form from './Form';

export default function ContactsForm() {
  return (
    <section id='contact-form'>
      <div className='container'>
        <div className='row gap-50 center-y s-between'>

          <div className='text-wrapper'>
            <AnimatedText text={'Free access to the 3D model library'} as={'small-heading'} canter={false} />
            <p className='xsmall-text text-main text-black'>
              As part of our designer partnership program, we offer free access to our 3D model library. Fill out the form to use Mani furniture models in your projects.
            </p>
            <Form />
          </div>

          <div className='mockup'>
            <img src={mockup} alt='mobile-app' />
          </div>

        </div>

      </div>
    </section>
  )
}
