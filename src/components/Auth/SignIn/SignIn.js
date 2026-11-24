import FormWrapper from "../../FormWrapper/FormWrapper";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import Input from "../../ui/inputs/Input/Input";
import CloseButton from "../CloseButton";
 export default function SignIn({ setAuth }) {
 
  return (
    <FormWrapper formkey={"signinForm"}>
      <div className="text-center">
        <span className="form-heading text-heading text-black up-case">
          Sign in
        </span>
      </div>
      <Input type="email" placeholder="E-mail*" name="email" />
      <Input type="password" placeholder="Password" name="password" />
      <AnimButton type="submit">Sign in</AnimButton>
      <p className="xxxsmall-text text-main text-gray">
        Don't have an account yet?{" "}
        <span onClick={() => setAuth("sign-up")}>Create an account</span>
      </p>
      <CloseButton setAuth={setAuth} />
    </FormWrapper>
  );
}
