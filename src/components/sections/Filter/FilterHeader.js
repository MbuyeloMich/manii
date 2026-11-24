import { Link, useParams } from 'react-router-dom'
import filter from '../../../assets/icons/filter.svg'
import Sort from './Sort/Sort';
import { useEffect, useState } from 'react';
import Backdrop from '../../ui/Backdrop/Backdrop';
import MobileFilter from './MobileFilter';
import { getCatalogEnglish } from '../../../data/catalogEnglish';
export default function FilterHeader({   setShowParams, query, isMobile }) {

    const {  catalog: path} = useParams()

    const [showMobileParams, setShowMobileParams] = useState(false)

    function handleMedia() {
        if (isMobile) {
            setShowMobileParams(true)
            return
        }
        if (query) {
            setShowParams((prev) => !prev)
        } else {
            return
        }
    }

    useEffect(() => {
        if (!isMobile) {
            setShowMobileParams(false)
        } else {
            setShowParams(false)
        }
    }, [isMobile])

    return (
        <>
            <div className='filter-header'>
                <div className='row gap-10 xxxsmall-text text-main text-black up-case'>
                    <Link className='text-gray' to={'/'}>
                        Home
                    </Link>
                    <span>/</span>
                    <span>{getCatalogEnglish(path).headline}</span>
                </div>
                <div className='row s-between gap-10 xxsmall-text text-main text-black'>
                    <div className='filters row gap-5 center-y' onClick={() => handleMedia()}>
                        <img src={filter} alt='filter' />
                        <span>
                            Filters
                        </span>
                    </div>
                    <Sort />
                </div>
            </div>
            <MobileFilter
                setShowMobileParams={setShowMobileParams}
                showMobileParams={showMobileParams} />
            <Backdrop root={'modal-root'} value={showMobileParams} />
        </>

    )
}
