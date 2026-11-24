
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='footer-menu row wrap s-between gap-50'>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link to={"catalog/bedsheets"}>Bedding</Link>
                </li>
                <li>
                    <Link to={"catalog/decor"}>Felt accessories</Link>
                </li>
                <li>
                    <Link to={"catalog/curtains"}>Curtains</Link>
                </li>
                <li>
                    <Link>Home</Link>
                </li>
            </ul>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link to={"catalog/sofas"}>Sofas</Link>
                </li>
                <li>
                    <Link to={"catalog/beds"}>Beds</Link>
                </li>
                <li>
                    <Link to={"catalog/frameless"}>Frameless furniture</Link>
                </li>
            </ul>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link to={"catalog/armchairs"}>Armchairs</Link>
                </li>
                <li>
                    <Link to={"catalog/chairs"}>Chairs</Link>
                </li>
                <li>
                    <Link to={"catalog/poufs"}>Poufs and benches</Link>
                </li>
                <li>
                    <Link to={"catalog/outdoor"}>Outdoor furniture</Link>
                </li>
            </ul>
            <ul className='column gap-20 text-main text-light xxsmall-text up-case'>
                <li>
                    <Link to={"/order"}>Payment</Link>
                </li>
                <li>
                    <Link to={"/order"}>Delivery</Link>
                </li>
                <li>
                    <Link to={"/order"}>Company details</Link>
                </li>
            </ul>
        </div>
    )
}
