
import MainButton from "../../ui/buttons/MainButton/MainButton";
import useProductActions from "../../../hooks/useProductActions";
import { formatZar } from "../../../utils/currency";
export default function ConfigSummary({ totalPrice, configuration }) {

    const { handleAddToCart } = useProductActions()
    return (
        <form action="#" onSubmit={(e) => handleAddToCart(e, configuration)} className="output column center-y">

            <span className="text-main small-text text-black up-case">Total:</span>
            <span className="text-main small-text text-black">
                {formatZar(totalPrice)}
            </span>
            <MainButton type="submit">
                Add to cart
            </MainButton>
        </form>
    );
}
