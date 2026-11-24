import Input from "../../ui/inputs/Input/Input";
import Upload from "../../ui/inputs/Upload/Upload";
import AnimButton from "../../ui/buttons/AnimButton/AnimButton";
import mailIcon from "../../../assets/icons/mail.svg";
import FormWrapper from "../../FormWrapper/FormWrapper";
export default function ProjectForm({ includeUpload = false, id }) {
     return (
        <div className="form-container">
            <p className="xsmall-text text-main text-black text-center up-case">
                Are you a designer with a project ready to bring to life? Get in touch using the form below.
            </p>
             <FormWrapper formkey={`projectForm ${id}`}>
                <div className="row gap-15">
                    <div className="column gap-10">
                        <Input type="text" placeholder="Name" name="name" />
                        <Input type="tel" placeholder="Phone" name="phone" />
                        <Input type="email" placeholder="Email" name="email" />
                    </div>
                    <div className="column gap-10">
                        {includeUpload && <Upload text="Upload your project*" />}
                        <Input tag={"textarea"} placeholder="Message" name="message"/>
                    </div>
                </div>
                <AnimButton type="submit">
                    <img src={mailIcon} alt="mail" /> Send
                </AnimButton>
            </FormWrapper>
        </div>
    );
}
