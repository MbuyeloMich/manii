import img1 from '../../../assets/img_11.webp'
import img2 from '../../../assets/img_12.webp'
import Advantages from './Advantages'
 
export default function About() {

    return (
        <section id='about'>
            <div className='container' >
                <div className='text-center'>
                    <h2>About the brand</h2>
                    <span className='small-text text-main text-black up-case'>Get to know us</span>
                </div>
                <div className='section-layout'>

                    <div className='xsmall-text text-main text-black self-end-x'>
                        <p>
                            <span style={{ width: '210px', position: 'absolute', fontFamily: 'font-main-cursive', fontSize: '36px' }} aria-label='Mani logo'>Mani</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Mani is a design studio with a close-knit team who love what they do. For each of us, this is more than a job: it is a way of life. We create distinctive, high-quality pieces for the home and garden.</p>
                        <p>There is much more to discover on the pages of our website.</p>
                    </div>
                    <div className='row end-x'>
                        <div className='image'>
                            <img src={img1} alt='img-11' />
                        </div>
                        <div className='image'>
                            <img src={img2} alt='img-12' />
                        </div>
                    </div>
                </div>
                <Advantages/>
            </div>
        </section>
    )
}
