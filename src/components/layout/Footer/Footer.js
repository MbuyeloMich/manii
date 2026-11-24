
import './footer.css'
import Menu from './Menu'
import Socials from './Socials'
import Contacts from './Contacts'
export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row s-between center-y gap-60'>
          <Socials/>
          <Menu/>
          <Contacts/>
        </div>
      </div>

      <div className='rights'>
        <div className='container'>
          <p className='xxxsmall-text text-main'>
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  )
}
