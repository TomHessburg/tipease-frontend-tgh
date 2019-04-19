import React, { useState } from 'react';
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
                        <a href="#">home</a>
                        <a href="#">about us</a>
                        <a href="#">FAQ</a>
                    </ul>
                </div>
                <Button.Group size='small'>
                    <Button><Link to="/login">Login</Link></Button>
                    <Button.Or />
                    <Button><Link to="/login">Sign up</Link></Button>
                </Button.Group>
            </header>
        </div>
    )
}

export default LandingPage;