import React, { useState } from 'react';
import styles from './Login.module.scss';
import { Button, Divider, Form, Grid, Segment, Radio } from 'semantic-ui-react';
import axios from 'axios';


const Login = props => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");

    return (
        <div>
            <Segment placeholder>
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
                        <Button 
                            style={{margin:"10px auto"}} 
                            content='User Login' 
                            primary
                            onClick={e => {
                                e.preventDefault();
                                const credentials = {
                                    username: userName,
                                    password: password,
                                    type: "users"
                                }
                                axios.post('https://buildtipease.herokuapp.com/auth/users/login',credentials)
                                    .then(res => console.log(res))
                                    .catch(err => console.log(err));
                            }}
                        />
                        <Button 
                            content='Service Worker Login' 
                            primary 
                            onClick={e => {
                                e.preventDefault();
                                const credentials = {
                                    username: userName,
                                    password: password,
                                    type: "serviceWorkers"
                                }
                                console.log(credentials);
                                axios.post('https://buildtipease.herokuapp.com/auth/users/login',credentials)
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
            </Segment>
        </div>
    )
}

export default Login;