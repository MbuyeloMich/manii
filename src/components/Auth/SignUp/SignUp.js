import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import Input from "../../ui/inputs/Input/Input";
import CloseButton from "../CloseButton";
import FormWrapper from "../../FormWrapper/FormWrapper"; 
export default function SignUp({ setAuth }) {
   return (
    <FormWrapper formkey={"signinForm"}>
      <div className="text-center">
        <span className="form-heading text-heading text-black up-case">
          Create an account
        </span>{" "}
      </div>
      <Input type="email" placeholder="E-mail*" name="email" />
      <p className="xxxsmall-text text-main text-gray">
        A password will be sent to the email address you provide.
      </p>
      <AnimButton type="submit">Create account</AnimButton>
      <p className="xxxsmall-text text-main text-gray">
        Already have an account?
        <span onClick={() => setAuth("sign-in")}> Sign in</span>
      </p>
      <CloseButton setAuth={setAuth} />
    </FormWrapper>
  );
}
