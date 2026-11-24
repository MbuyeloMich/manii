import Contacts from "../../components/sections/Contacts/Contacts";
import ContactForm from "../../components/sections/ContactsForm/ContactsForm";
function ContactsSections() {
  return (
    <>
      <Contacts />
      <ContactForm />
      <section id="company-info">
        <div className="container">
          <div className="row">
            <p className="xxxsmall-text text-main text-gray">
              Mani Furniture
              <br /> Sandton, Johannesburg
              <br /> Gauteng, South Africa
              <br /> Sample business details — replace with your registered company information before launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default ContactsSections;
