import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
const ContactsSections = React.lazy(() => import("./ContactsSections"));
function ContactsPage() {
  return (
    <div id="contacts-page">
      {/* <Suspense fallback={<ChunkLoading />}> */}
      <ContactsSections />
      {/* </Suspense> */}
    </div>
  );
}
export default PageTransition(React.memo(ContactsPage));
