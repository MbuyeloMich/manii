import React from "react";
import PageTransition from "../../../components/PageTransition/PageTransition";

const ArticleSections = React.lazy(() => import("./ArticleSections"));

function ArticlePage() {
    return (
        <div id="article-page">
            {/* <Suspense fallback={<ChunkLoading />}> */}
            <ArticleSections />
            {/* </Suspense>   */}
        </div>
    );
}

export default PageTransition(React.memo(ArticlePage));

