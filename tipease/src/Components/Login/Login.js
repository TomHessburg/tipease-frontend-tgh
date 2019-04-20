import React, { useState } from 'react';
import styles from './Login.module.scss';
import { Button, Divider, Form, Grid, Segment, Icon, Radio } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Login = props => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("users");

    return (
        <div 
        className={styles.login}
        >
            <Segment placeholder className={styles.loginForm}>
                <Grid columns={2} relaxed='very' stackable>
                <Grid.Column>
                    <Form>
                        <Form.Input 
                            icon='user' 
                            iconPosition='left' 
                            label='Username' 
                            placeholder='Username' 
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />
                        <Form.Input 
                            icon='lock' 
                            iconPosition='left' 
                            label='Password' 
                            type='password' 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <div className={styles.radioBtns}>
                            <Form.Field>
                                <Radio
                                    
                                    label='Service Worker'
                                    name='radioGroup'
                                    value='serviceWorkers'
                                    checked={type === "serviceWorkers"}
                                    onChange={e => setType("serviceWorkers")}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Radio
                                    label='User'
                                    name='radioGroup'
                                    value='users'
                                    checked={type === "users"}
                                    onChange={e => setType("users")}
                                />
                            </Form.Field>
                        </div>
                        <Button 
                            content='Login' 
                            primary
                            onClick={e => {
                                e.preventDefault();
                                const credentials = {
                                    username: userName,
                                    password: password,
                                    type: type
                                }
                                axios.post(`https://buildtipease.herokuapp.com/auth/users/login`,credentials)
                                    .then(res => console.log(res))
                                    .catch(err => console.log(err));
                            }}
                        />
                    </Form>
                </Grid.Column>

                <Grid.Column verticalAlign='middle'>
                    <Button content='Sign up' icon='signup' size='big' />
                </Grid.Column>
                </Grid>

                <Divider 
                className={styles.divider}
                vertical>Or</Divider>
                <Link to="/home"><Icon className={styles.close} name="window close" size="big" /></Link>
            </Segment>
        </div>
    )
}

export default Login;