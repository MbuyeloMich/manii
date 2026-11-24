import arrow from "../../../assets/icons/arrow-down.svg";
import AnimatedText from "../../scroll/TextAnimation";

export default function ProjectHeader() {
    return (
        <div className="row center-x">
            <div className="text-center">
                <AnimatedText text={"Let's bring your furniture project to life"} as="big-heading" center={true}/>
                <p className="small-text text-main text-black up-case">
                    We welcome collaborations and new ideas
                </p>
                <p className="xsmall-text text-main text-black">
                    The Mani team loves working with architects, designers and creative professionals. We would be delighted to collaborate. Visit our showroom to explore materials and access our digital model collection. If you have a custom brief or need a distinctive solution for your home or garden, we would love to help.
                </p>
                <div className="arrow">
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
    );
}
