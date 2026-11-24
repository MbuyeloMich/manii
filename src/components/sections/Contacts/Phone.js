
import phone from '../../../assets/icons/phone.svg'

export default function Phone() {
  return (
      <div className='row start-y gap-15'>
          <img src={phone} alt='phone-icon' />
          <div>
              <a href="tel:+27110000000" className='text-main text-black xxsmall-text'>+27 11 000 0000</a>
              <br />  <a href="tel:+27100000000" className='text-main text-black xxsmall-text'>+27 10 000 0000</a>
          </div>
      </div>
  )
}
