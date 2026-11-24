
import { formStore } from "../../../stores/formStore";

export default function DeliveryOutput({ setActiveTab, children }) {
  const { forms } =
    formStore();
  const formData = forms?.infoForm?.formData;
  return (
    <div className="form-output">
      <div className="row center-y s-between wrap gap-10">
        <div className="row center-y wrap gap-10">
          <span className="xxsmall-text text-main text-black-secondary up-case">
            <b> Contact</b>
          </span>
          <span className="xsmall-text text-main text-black">
            {formData.email}
          </span>
        </div>
        <span
          className="edit xxsmall-text text-main text-gray"
          onClick={() => setActiveTab("information")}
        >
          Edit
        </span>
      </div>
      <div className="row center-y s-between wrap gap-10">
        <div className="row center-y wrap gap-10">
          <span className="xxsmall-text text-main text-black-secondary up-case">
            <b>Address</b>
          </span>
          <span className="xsmall-text text-main text-black">
            {formData.street} {formData.homeAddress}, {formData.index},{" "}
            {formData.city}, {formData.country}
          </span>
        </div>
        <span
          className="edit xxsmall-text text-main text-gray"
          onClick={() => setActiveTab("information")}
        >
          Edit
        </span>
      </div>
      {children}
    </div>
  );
}
