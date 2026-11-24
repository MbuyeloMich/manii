
import logo from "../../../assets/logo.svg";
import arrowLeft from "../../../assets/icons/arrow-cursive-left.svg";
import arrowRight from "../../../assets/icons/arrow-cursive-right.svg";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row center-x">
        <div className="center-y gap-50">
          <p className="xsmall-text text-main text-black up-case text-center">
            Are you a designer with a project ready to bring to life? Get in touch with us.
          </p>
          <div className="row center-y center-x gap-50">
            <div className="arrow-left">
              <img src={arrowLeft} alt="arrow-left" />
            </div>
            <div
              className="circle center-gr"
              onClick={() => navigate("/project")}
            >
              <img src={logo} alt="logo" />
            </div>
            <div className="arrow-right">
              <img src={arrowRight} alt="arrow-right" />
            </div>
          </div>
          <p className="xsmall-text text-main text-black up-case text-center">
            Looking for an interior design project? We would be happy to connect you with a professional designer.
          </p>
        </div>
      </div>
    </div>
  );
}
