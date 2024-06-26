
import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { UserAuth } from '../context/AuthContext';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signInWithGoogle} = UserAuth();

    const handleLogin = () => {
        // Perform login logic here
    };
    return (
        <Container>
            <h1>Login</h1>
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button color="primary" onClick={handleLogin}>Login</Button>
                <Button color="danger" onClick={signInWithGoogle}>Login with Google</Button>
            </Form>
        </Container>
    );
}

export default Login;