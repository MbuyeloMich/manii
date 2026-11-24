import { Link, NavLink } from "react-router-dom";
import arrow from "../../../assets/icons/arrow-up.svg";
import Backdrop from "../../ui/Backdrop/Backdrop";

export default function NestedList({ menu, setMenu }) {
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (isTouchDevice()) {
      if (window.innerWidth > 777) {
        setMenu((prev) => ({
          ...prev,
          backdrop: !prev.backdrop,
          nested: !prev.nested,
        }));
      } else {
        setMenu((prev) => ({ ...prev, nested: !prev.nested }));
      }
    } else if (window.innerWidth <= 777) {
      setMenu((prev) => ({ ...prev, nested: !prev.nested }));
    }
  };

  return (
    <>
      <li
        onClick={handleClick}
        onMouseEnter={() => {
          if (!isTouchDevice() && window.innerWidth > 777) {
            setMenu((prev) => ({ ...prev, backdrop: true, nested: true }));
          }
        }}
        onMouseLeave={() => {
          if (!isTouchDevice() && window.innerWidth > 777) {
            setMenu((prev) => ({ ...prev, backdrop: false, nested: false }));
          }
        }}
      >
        <NavLink
          onClick={(e) => e.preventDefault()}
          to={"catalog"}
          className="row-inline center-y gap-10"
        >
          Catalog
          <img
            className="arrow-up"
            style={{ transform: menu.nested ? "rotate(180deg)" : "none" }}
            src={arrow}
            alt="arrow"
          />
        </NavLink>
        <ul
          id="catalog-list"
          className={`row s-between ${menu.nested ? "active" : "inactive"}`}
        >
          <li>
            <ul>
              <li>
                <NavLink to={"catalog/sofas"}>Sofas </NavLink>
              </li>
              <li>
                <NavLink to={"catalog/beds"}>Beds </NavLink>
              </li>
              <li>
                <NavLink to={"catalog/poufs"}>Poufs and benches </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <NavLink to={"catalog/armchairs"}>Armchairs </NavLink>
              </li>
              <li>
                <NavLink to={"catalog/chairs"}>Chairs </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <NavLink to={"catalog/frameless"}>Frameless furniture </NavLink>
              </li>
              <li>
                <NavLink to={"catalog/outdoor"}>Outdoor furniture </NavLink>
              </li>
              <li>
                <NavLink to={"catalog/bedsheets"}>Bedding </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <NavLink to={"catalog/decor"}>Decor</NavLink>
              </li>
              <li>
                <NavLink to={"catalog/curtains"}>Curtains </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <Backdrop
        value={menu.backdrop}
        style={{ zIndex: menu.open ? "1" : "-1" }}
        root={"header"}
      />
    </>
  );
}
