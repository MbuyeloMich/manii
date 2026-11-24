
import sketh from '../../../assets/sketch.jpg'
import { Link } from 'react-router-dom';
import AnimatedText from '../../scroll/TextAnimation';

export default function Sketch() {


  return (
    <div className='container'>
      <div className='row center-x wrap '>
        <div className='sketch'>
          <img alt='sketch' src={sketh} />
        </div>
        <div className='column center-x gap-40 text-center'>

          <AnimatedText text={"Let's bring your furniture project to life"} as={'middle-heading'} center={true} />


          <p className='xsmall-text text-main text-black'>
            The Mani team loves working with architects, designers and creative professionals. We would be delighted to collaborate. Visit our showroom to explore materials and access our digital model collection.
          </p>
          <p className='xsmall-text text-main text-black'>
            Have a custom brief or need a distinctive solution for your home or garden? <span>—</span>
            <Link className='xsmall-text text-main text-black'>
              Start here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
