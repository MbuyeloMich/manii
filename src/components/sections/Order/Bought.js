
import SmoothAppearance from '../../ui/SmoothAppearance'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function Bought() {
    return (
        <SmoothAppearance blur={true} className="bought column gap-60">
            <div className='row center-x wrap'>
                <div>
                    <LazyLoadImage effect="blur"
                        style={{ objectViewBox: 'inset(0% 17% 0% 0%)', WebkitObjectViewBox: 'inset(0% 17% 0% 0%)' }}
                        width="254px"
                        height="254px"
                        src='https://i.ibb.co/pjv1Wds/img-1.jpg' alt='vase' />


                </div>
                <div className='self-end-y'>
                    <h2 className='text-black-secondary'>Thank you for your order</h2>
                    <p className='text-main small-text text-black-secondary'>
                        You can track your order at any time in your <span>
                            account
                        </span>
                    </p>
                </div>
            </div>
            <div className='row center-x'>
                <div style={{ maxWidth: '460px' }}>
                    <LazyLoadImage effect="blur"
                        width="100%"
                        height="282px"
                        src='https://i.ibb.co/gVZ6NWL/img-5.jpg' alt='vase' />
                </div>
            </div>
        </SmoothAppearance>
    )
}
