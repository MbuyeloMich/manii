
import FilterParam from '../FilterParams/FilterParam'
import Accordion from '../../../ui/Accordion/Accordion'
import { translateCatalogLabel } from '../../../../data/catalogEnglish'
export default function ExtraFilter({ isOpen=true, data, headline, filterParam }) {
    return (
        <div className={`${filterParam}-filter xxsmall-text text-main text-black`}>
            <Accordion
                headline={translateCatalogLabel(headline)}
                dataLength={data.length}
                elHeight={20}
                isOpen={isOpen}
            >
                <FilterParam
                    filterParam={filterParam}
                    data={data}
                />
            </Accordion>
        </div>
    )
}
