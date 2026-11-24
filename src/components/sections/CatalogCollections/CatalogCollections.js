
import './catalogCollections.css'
import Slide from './Slide'
import InfiniteSlider from '../../InfiniteSlider/InfiniteSlider'
import catalog from '../../../data/catalog'
import { translateCatalogLabel } from '../../../data/catalogEnglish'
export default function CatalogCollections({ path }) {
    return (
        <section id='catalog-collections'>
            <div className='container'>
                <InfiniteSlider sliderData={catalog[path].sliderData.map((item) => ({
                    ...item,
                    name: translateCatalogLabel(item.name),
                }))}
                itemWidth={'catalog-slider-img-width'} 
                wrapper={Slide} />
            </div>
        </section>
    )
}
