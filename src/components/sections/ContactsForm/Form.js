import Input from "../../ui/inputs/Input/Input";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import mailIcon from "../../../assets/icons/mail.svg";
import FormWrapper from "../../FormWrapper/FormWrapper";
export default function Form() {
 
  return (
    <FormWrapper 
     formkey="contactsForm"
      
    
    >
      <div className="row gap-15">
        <div className="column gap-10">
          <Input type="text" placeholder="Name" name="name" />
          <Input type="tel" placeholder="Phone" name="phone" />
          <Input type="email" placeholder="Email" name="email" />
        </div>
        <div className="column gap-10">
          <Input type="text" placeholder="Website / social media link" name="social"/>
          <Input tag={"textarea"} placeholder="Message" name="message"/>
        </div>
      </div>
      <AnimButton type="submit">
        <img src={mailIcon} alt="mail" /> Send
      </AnimButton>
    </FormWrapper>
  );
}

// up to March)

// next js
// react + zustand / redux / mobX / reactQ
// js;
// git, gitHub,  
// tailwind
// vite, webpack
