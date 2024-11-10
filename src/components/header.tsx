import Link from "next/link";
              
import "../style/header.css";
export default function Header(){
    return(
        <div className="header">
            <div>
                <h2 className="logo"> PORTFOLIO</h2>
            </div>
            <div className="header-right">
                <ul className="header-left">
                    <li className="nav-links">
                        <Link href="/"> HOME</Link>
                    </li>
                    <li className="nav-links">
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li className="nav-links">
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}