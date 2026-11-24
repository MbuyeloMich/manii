
import mail from '../../../assets/icons/mail.svg'
import phone from '../../../assets/icons/phone.svg'
import location from '../../../assets/icons/location.svg'

export default function Contacts() {
    return (
        <div className='footer-contacts column gap-30'>
            <div className='row start-y gap-15'>
                <img src={phone} alt='phone-icon' style={{ marginTop: '4px' }} />
                <div>
                    <a href="tel:+27110000000" className='text-main text-light xxsmall-text'>+27 11 000 0000</a>
                    <br />  <a href="tel:+27100000000" className='text-main text-light xxsmall-text'>+27 10 000 0000</a>
                </div>
            </div>
            <div className='row start-y gap-15'>
                <img src={location} alt='location-icon' />
                <span className='text-main text-light xxsmall-text'>
                    Sandton,
                    <br /> Johannesburg,
                    <br /> Gauteng, South Africa
                </span>
            </div>
            <div className='row center-y gap-15'>
                <img src={mail} alt='mail-icon' />
                <a className='text-main text-light xxsmall-text'
                    href="mailto:info@mani.ru">
                    mailto:info@mani.ru</a>
            </div>
        </div>
    )
}
