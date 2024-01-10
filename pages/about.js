import Link from "next/link";
import Image from "next/image";
import rohan from "../img/rohan.jpg";
import progressive from "../img/progressive.jpg";
import owls from "../img/owls.jpg";

export default function About() {
  return (
    <>
      <div className="projects link">
        <div className="float-container float2-child">
          <div className="float-child2">
            <h1 className="title">About Me</h1>
            <p className="main-text">
              I am a 20 year old student studying Computer Science and
              Mathematics at Case Western Reserve University. Born and raised in
              St. Louis, MO, I have now lived in Cleveland, OH for the past 3
              years while at CWRU.
            </p>

            <h3 className="title">Academics</h3>
            <p className="main-text">
              At CWRU, I am working toward my Bachelor of Science in Computer
              Science with a Concentration in Artificial intelligence and a
              Secondary Major in Mathematics (Bachelor of Arts)
            </p>
          </div>
          <div className="float-child">
            <Image src={rohan} width={200} className="img" />
          </div>
        </div>
      </div>
      <div className="projects link">
        <div className="float-container float2-child">
          <div className="float-child">
            <Image src={progressive} width={200} className="img img4" />
          </div>
          <div className="float-child2">
            <p className="main-text">
              I am very gradually starting to near the end of both programs and
              have completed classes such as Machine Learning, Sequential
              Decision Making, Intro to Artificial Intelligence, Algorithms,
              Numerical Linear Algebra and Statistics (A short and incomplete
              list, but one that highlights a lot of the classes I am proudest
              of, as well as ones that will be most relevant going forward).
            </p>
            <p className="main-text">
              In the upcoming semester I will take classes such as Computational
              Perception, Computer Vision and Quantum Computing.
            </p>
          </div>
        </div>
        <div className="float-container float2-child">
          <div className="float-child2">
            <h3 className="title">Personal Life</h3>

            <p className="main-text">
              Outside of classes, I love sports (baseball particularly), fantasy
              sports (baseball and football), board/card games, as well as
              playing video games with my roommates.
            </p>
            <p className="main-text">
              Being from St. Louis, I am a diehard Cardinals fan, but now that I
              live in Cleveland I have also gotten into the Cavs, Browns and
              Guardians.
            </p>
            <p className="main-text">
              I have played a number of sports (all at a low skill level), but
              enjoy playing catch, soccer, and tossing the football or frisbee
              the most.
            </p>
          </div>
          <div className="float-child">
            <Image src={owls} width={200} className="img img3" />
          </div>
        </div>
      </div>
    </>
  );
}
