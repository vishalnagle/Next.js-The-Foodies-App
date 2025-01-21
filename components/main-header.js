import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";


const MainHeader = () => {

    return <header>
        <Link href="/">
            <img src={logoImg.src} alt="A plate of food in it" />
            NextLevel Food
        </Link>

        <nav>
            <ul>
                <li>
                    <Link href="/meals">Browse Meals</Link>
                </li>
                <li>
                    <Link href="/community">Community</Link>
                </li>
            </ul>
        </nav>

    </header>
}

export default MainHeader;