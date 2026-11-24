import React, { useState } from "react";
import Input from "../../../ui/inputs/Input/Input";
import SmoothAppearance from "../../../ui/SmoothAppearance";
import Checkbox from "../../../ui/inputs/Checkbox/Checkbox";
import Selection from "../../../ui/inputs/Selection/Selection";
import AnimButton from "../../../ui/buttons/AnimButton/AnimButton";
import { formStore } from "../../../../stores/formStore";
import { modalStore } from "../../../../stores/modalStore";
export default function Information({ setActiveTab }) {
  const [subscribe, setSubscribe] = useState(false);
  const [saveInfo, setSaveInfo] = useState(false);
  const { clearErrors, forms, updateFormData, validateFormData } = formStore();
  function handleSubmit(e) {
    e.preventDefault();

    const el = document.querySelector('.wrap-cart + div')
    el.scrollIntoView({ behavior: 'smooth' })
    
    const fd = new FormData(e.target);
    const formDataObject = Object.fromEntries(fd.entries());
    clearErrors("infoForm");
    if (validateFormData("infoForm", formDataObject)) {
      updateFormData("infoForm", formDataObject);
      setActiveTab("delivery");
    }
  }
  const { setAuth } = modalStore()

  return (
    <SmoothAppearance blur={true}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        spellCheck={false}
        className="form-info text-black-secondary"
        action="#"
        data-formkey="infoForm"
      >
        <div className="row center-y s-between">
          <span className="text-main xsmall-text up-case">Contact</span>
          <p className="text-main xxsmall-text text-gray">
            Already have an account?{" "}
            <span className="text-black" onClick={() => setAuth('sign-in')}>Sign in</span>
          </p>
        </div>
        <Input type="email" name="email" placeholder="Email address" />
        <div className="row gap-10">
          <Checkbox
            checked={subscribe}
            onChange={() => setSubscribe((prev) => !prev)}
            label={true}
            name="subscribe"
            id="subscribe"
          >
            Email me with news and special offers
          </Checkbox>
        </div>
        <span className="text-main xsmall-text up-case">Shipping address</span>
        <Selection
          defaultValue={forms?.infoForm?.formData?.country}
          name="country"
          data={["South Africa", "Other country"]}
        />
        <div className="row wrap gap-20">
          <Input type="text" placeholder="First name" name="name" />
          <Input type="text" placeholder="Last name" name="surname" />
          <Input type="text" placeholder="City" name="city" />
          <Input type="number" placeholder="Postal code" name="index" />
          <Input type="text" placeholder="Street" name="street" />
          <Input type="number" placeholder="Street number" name="homeAddress" />
        </div>
        <Input type="tel" placeholder="Phone" name="phone" />
        <div className="row gap-10">
          <Checkbox
            label={true}
            checked={saveInfo}
            onChange={() => setSaveInfo((prev) => !prev)}
            name="save"
            id={"save"}
          >
            Save this information for next time
          </Checkbox>
        </div>
        <div className="line"></div>
        <AnimButton type="submit">Continue</AnimButton>
      </form>
    </SmoothAppearance>
  );
}
