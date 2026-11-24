
import Selection from "../../../ui/inputs/Selection/Selection";
import { translateCatalogLabel } from "../../../../data/catalogEnglish";
export default function OptionItems({ label, style, data }) {

  return (
    <div style={style}>
      <span className="option-key xsmall-text text-main text-black-secondary">
        {translateCatalogLabel(label)}
      </span>
      <Selection name={label} data={data} />
    </div>
  );
}
