import "../styles/global.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <div className="fullheight">
      <div className="mainpage float-child">
        <div className="test">
          <h1 className="text">Grant Konkel</h1>
        </div>
        <div className="component">
          <Component {...pageProps} />
        </div>
      </div>

      <div className="sidebar float-child">
        <div className="float2-child link">
          <Link className={router.pathname == "/" ? "active" : ""} href="/">
            <p className="side-text">Home</p>
          </Link>
        </div>

        <div className="float2-child link">
          <Link
            className={router.pathname == "/about" ? "active" : ""}
            href="/about"
          >
            <p className="side-text"> About Me</p>
          </Link>
        </div>

        <div className="float2-child link">
          <Link
            className={router.pathname == "/projects" ? "active" : ""}
            href="/projects"
          >
            <p className="side-text">Projects</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
