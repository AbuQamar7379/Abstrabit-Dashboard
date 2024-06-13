import styles from './Logo.module.css';

/**
 * Logo component renders the logo of the application with specific styles.
 *
 * @component
 * @example
 * return (
 *   <Logo />
 * )
 */
const Logo = () => {
    return (
        <div className={styles.logoWrapper}>
            <span className={styles.logoHeading}>Re</span>
            <span className={styles.logoText}>Rack Extension</span>
        </div>
    );
}

export default Logo;
