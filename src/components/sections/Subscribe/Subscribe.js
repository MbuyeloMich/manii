
import "./subscribe.css";
import mockup from "../../../assets/Mockup.png";
import AnimatedText from "../../scroll/TextAnimation";
import Input from "../../ui/inputs/Input/Input";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import mailIcon from "../../../assets/icons/mail.svg";
import FormWrapper from "../../FormWrapper/FormWrapper";
export default function Subscribe() {

  return (
    <section id="subscribe">
      <div className="container">
        <div className="row center-y">
          <div className="text-wrapper">
            <AnimatedText
              text={"Subscribe to our newsletter"}
              as={"small-heading"}
              canter={false}
            />
            <p className="small-text text-main text-black up-case">
              Get <b>discounts</b> and special offers
            </p>
            <FormWrapper
              formkey="subscribeForm">
              <div className="row wrap gap-15">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
                <AnimButton type="submit">
                  <img src={mailIcon} alt="mail" /> SUBSCRIBE
                </AnimButton>
              </div>
            </FormWrapper>
          </div>

          <div className="mockup">
            <img src={mockup} alt="mobile-app" />
          </div>
        </div>
      </div>
    </section>
  );
}
