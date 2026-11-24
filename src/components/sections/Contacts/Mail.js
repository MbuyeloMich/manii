
import mail from '../../../assets/icons/mail.svg'

export default function Mail() {
  return (
    <div className='row center-y gap-15'>
      <img src={mail} alt='mail-icon' />
      <a className='text-main text-black xxsmall-text'
        href="mailto:info@mani.ru">
        mailto:info@mani.ru</a>
    </div>
  )
}
