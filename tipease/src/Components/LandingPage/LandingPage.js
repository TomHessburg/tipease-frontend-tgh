import React from 'react';
import styles from './landingPage.module.scss';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LandingPage = props => {
    return (
        <div className={styles.hero}>
            <header className={styles.lpHeader}>
                <div className={styles.headerLeft}>
                    <h1>tipease</h1>
                    <ul className={styles.navLinks}>
                        <a href="https://www.facebook.com/">home</a>
                        <a href="https://www.facebook.com/">about us</a>
                        <a href="https://www.facebook.com/">FAQ</a>
                    </ul>
                </div>
            </header>
            <div className={styles.centerPage}>
                <div className={styles.logSignMedia}>
                    <h2>Try it for Free</h2>
                    <Button.Group className={styles.logsign} size='small'>
                        <Button><Link to="/home/login">Login</Link></Button>
                        <Button.Or />
                        <Button><Link className={styles.farRight} to="/home/login">Sign up</Link></Button>
                    </Button.Group>
                </div>
            </div>
            <div className={styles.bottomLeft}>
                <h2>A Better Way to Tip</h2>
            </div>
        </div>
    )
}

export default LandingPage;