
import DimensionItems from './DimensionItems';
import { translateCatalogLabel } from '../../../../data/catalogEnglish';

export default function Dimensions({ dimensions }) {
    return (
        dimensions &&
        dimensions.map((el, i) => {
            const [key, values] = Object.entries(el)[0];

            if (key === "ширина") {
                const heightDimension = dimensions.find(
                    (dim) => Object.keys(dim)[0] === "высота"
                );
                const height = heightDimension?.высота || [];

                return (
                    <DimensionItems
                        key={i}
                        label={"Size"}
                        values={values}
                        height={height}
                    />
                );
            } else if (key === "высота") {
                return null;
            } else {
                return (
                    <DimensionItems
                        key={i}
                        label={translateCatalogLabel(key)}
                        values={values}
                    />
                );
            }
        })
    )
}
