import Dropdown from "./DropDown/Dropdown";
import Logo from "./Logo/Logo";
import styles from './Navbar.module.css';

/**
 * Navbar component renders the navigation bar with a logo, navigation links, and a dropdown menu.
 *
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 */
const Navbar = () => {
    return (
        <nav className={styles.navbarWrapper}>
            <Logo />
            <ul className={styles.navlinks}>
                <li>Dashboard</li>
                <li>FAQs</li>
                <li>Support</li>
                <li><Dropdown /></li>
            </ul>
        </nav>
    );
}

export default Navbar;
