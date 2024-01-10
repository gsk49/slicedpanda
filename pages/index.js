import Image from "next/image";
import grant from "../img/grant.jpg";
import puzzle from "../img/8puzzle.gif";
import clustering from "../img/clustering.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="float-container">
      <div className="float-container float2-child">
        <div className="float-child">
          <Image src={grant} width={200} className="img" />
        </div>
        <div className="float-child2">
          <p className="main-text">
            My name is Grant Konkel and I am a Junior at Case Western
            Reserve University in Cleveland, Ohio. I am majoring in Computer
            Science with a concentration in Artificial Intelligence and a Secondary Major
            in Mathematics.
          </p>
          <p>
            Outside of school, I am a big sports lover, in part, because of my
            love for statistics and trivial facts.
          </p>
          <p className="link">
            Get to know more about me by going to my{" "}
            <Link
              href="/about"
              className={router.pathname == "/about" ? "active" : ""}
            >
              About Me
            </Link>{" "}
            page!
          </p>
        </div>
      </div>

      <div className="projects link">
        <p>
          As a full time student, most of my computer science projects have been
          through school, and a few of these projects can be seen below. Even
          more can be seen by going to my{" "}
          <Link
            href="/projects"
            className={router.pathname == "/projects" ? "active" : ""}
          >
            Projects
          </Link>{" "}
          page.
        </p>
        <div className="projects2">
          <Link href="/puzzle">
            <div className="project">
              <Image src={puzzle} width={200} />
              <p className="disclaimer pic">8-Puzzle</p>
            </div>
          </Link>
          <Link href="/classify">
            <div className="project">
              <Image src={clustering} width={200} />
              <p className="disclaimer pic">Classification</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
