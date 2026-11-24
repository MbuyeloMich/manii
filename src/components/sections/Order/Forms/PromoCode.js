import AnimButton from "../../../ui/buttons/AnimButton/AnimButton";
import Input from "../../../ui/inputs/Input/Input";
import { userCartStore } from "../../../../stores/cartStore";
import FormWrapper from "../../../FormWrapper/FormWrapper";
import { formatZar } from "../../../../utils/currency";

export default function PromoCode() {
  const { totalPrice } = userCartStore();
 
  return (
    <div className="promo-code">
      <FormWrapper formkey={"codeForm"}>
        <div className="row gap-15">
          <Input
            type="text"
            placeholder="Gift card or promo code"
            name="code"
          />
          <AnimButton style={{ minWidth: "170px" }} type="submit">
            Apply
          </AnimButton>
        </div>
        <div className="row s-between wrap gap-10 text-main text-black xsmall-text ">
          <span className="up-case">Subtotal</span>
          <span>{formatZar(totalPrice())}</span>
        </div>
        <div className="row s-between gap-15 text-main text-black xsmall-text ">
          <span className="up-case">Delivery</span>
          <span className="text-gray">Calculated at the next step</span>
        </div>
        <div className="row s-between wrap gap-15 text-main text-black small-text">
          <span className="up-case">Total</span>
          <span>{formatZar(totalPrice())}</span>
        </div>
      </FormWrapper>
    </div>
  );
}
