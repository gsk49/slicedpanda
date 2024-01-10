import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="projects link">
        <h1 className="title">Projects</h1>
        <p className="main-text">
          This page is mostly homework assignments/projects that I have done for
          classes while being enrolled at Case Western Reserve University. Many
          of these took a lot of time and effort though, so I feel they are
          worth sharing. Anyone can feel free to use code or be inspired by
          these projects, but please dont steal or submit for similar
          assignments as it would look bad for me.
        </p>
        <p>
          The AI links both have pages on this website with the writeup used for
          submission. The other assignments are links to my gitHub page. For
          both ML projects, I highly recommend reading the pdf files, for the
          rest, the readme files give a solid description of the project.
        </p>
        <div className="float-container float2-child">
          <div className="float-child">
            <h3>Artificial Intelligence</h3>
            <div className="project-list">
              <Link href="/puzzle">
                8 puzzle solver using A* search and Beam Search
              </Link>
            </div>
            <div>
              <Link href="/classify">KMeans and NN Iris Classifier</Link>
            </div>
          </div>
          <div className="float-child ml">
            <h3>Machine Learning</h3>
            <div className="project-list">
              <Link
                href={
                  "https://github.com/gsk49/machine-learning/tree/main/SpamFiltering"
                }
              >
                Spam Email Filtering (Random Forest)
              </Link>
            </div>
            <div>
              <Link
                href={
                  "https://github.com/gsk49/machine-learning/tree/main/VesselClassification"
                }
              >
                Vessel Classification (Time based Agglomerative Clustering)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
