import { FaFacebook, FaHashtag, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <FaHashtag></FaHashtag>
          <p>
            Residential Company Ltd.
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaYoutube />
            </a>
            <a>
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
