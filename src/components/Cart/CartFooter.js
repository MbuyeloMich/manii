
import MainButton from "../ui/buttons/MainButton/MainButton";
import { useNavigate } from "react-router-dom";
import { formatZar } from "../../utils/currency";
export default function CartFooter({ totalPrice }) {
  const navigate = useNavigate();
  return (
    <div className="output">
      <div className="row s-between wrap gap-20 up-case text-light text-main small-text">
        <span>Total</span>
        <span>{formatZar(totalPrice())}</span>
      </div>
      <MainButton onClick={() => navigate("/order")} type="button">
        Proceed to checkout
      </MainButton>
    </div>
  );
}
