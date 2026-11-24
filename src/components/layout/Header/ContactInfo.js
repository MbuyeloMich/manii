
export default function ContactInfo() {
    return (
        <div className='info'>
            <div className='container'>
                <div className='row s-between'>
                    <span className='text-main text-light xxxsmall-text'>
                        Have a question? <a href="mailto:info@mani.ru">Contact us</a>
                    </span>
                    <div className='row gap-15'>
                        <a href="tel:+27110000000" className='text-main text-light xxxsmall-text'>+27 11 000 0000</a>
                        <a href="tel:+27100000000" className='text-main text-light xxxsmall-text'>+27 10 000 0000</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
