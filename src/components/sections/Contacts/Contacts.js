
import './contacts.css'
import Map from './Map'
import location from '../../../assets/icons/location.svg'
import Socials from './Socials'
import Mail from './Mail'
import Phone from './Phone'
export default function Contacts() {



    return (
        <section id='contacts'>
            <div className='text-center'>
                <h2>Contact</h2>
                <span className='small-text text-main text-black up-case'>We welcome collaborations and proposals</span>
            </div>
            <div className='section-layout'>
                <div className='column s-between'>
                    <div>
                        <p className='text-main text-black xsmall-text up-case'>
                            Get in touch if you have any questions:
                        </p>
                        <div className='column gap-20'>
                           <Phone/>
                            <div className='row start-y gap-15'>
                                <img src={location} alt='location-icon' />
                                <span className='text-main text-black xxsmall-text'>
                                    Sandton, Johannesburg, Gauteng, South Africa
                                    <br />
                                    <b>
                                        {`(Please let us know before your visit.)`}
                                    </b>
                                </span>
                            </div>
                            <Mail />
                        </div>
                    </div>
                    <div>
                        <p className='text-main text-black xsmall-text up-case'>
                            Our Johannesburg office:
                        </p>
                        <div className='column gap-20'>
                            <Phone/>
                            <Mail />
                        </div>
                    </div>
                </div>
                <Socials />
                <div>
                    <Map />
                </div>
            </div>

        </section>
    )
}
