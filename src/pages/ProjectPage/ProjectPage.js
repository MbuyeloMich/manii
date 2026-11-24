import React from "react";
import PageTransition from "../../components/PageTransition/PageTransition";
const ProjectSections = React.lazy(() => import("./ProjectSections"));
function ProjectPage() {
  return (
    <div id="contacts-page">
      {/* <Suspense fallback={<ChunkLoading />}> */}
      <ProjectSections />
      {/* </Suspense> */}
    </div>
  );
}
export default PageTransition(React.memo(ProjectPage));
