import React, { useState, useRef, useEffect, useContext } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import axios from '../api/axios';
const LOGIN_URL = '/api/User/login';



function Login() {

    const emailRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const loggedInUserKey = "user";


    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [email, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ Email: email, Password: pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            ).then(response => {
                localStorage.setItem(loggedInUserKey, JSON.stringify(response.data));
                location.pathname = "/home";
            });
            setEmail('');
            setPwd('');
            setSuccess(true);

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status == 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

    }

    return <>

        <section>
            <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
            >
                {errMsg}
            </p>
            <div>
                <Container>
                    <Row className="vh-100 d-flex justify-content-center align-items-center">
                        <Col md={8} lg={6} xs={12}>
                            <div className="border border-3 border-warning"></div>
                            <Card className="shadow">
                                <Card.Body>
                                    <div className="mb-3 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                                        <p className=" mb-5">Please enter your login and password!</p>
                                        <div className="mb-3">
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label className="text-center">
                                                        Email address
                                                    </Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        ref={emailRef}
                                                        autoComplete="off"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email}
                                                        required
                                                        placeholder="Enter email"
                                                    />
                                                </Form.Group>

                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicPassword"
                                                >
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        onChange={(e) => setPwd(e.target.value)}
                                                        value={pwd}
                                                        required
                                                        placeholder="Password"
                                                    />
                                                </Form.Group>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicCheckbox"
                                                >
                                                    <p className="small">
                                                        <a className="text-warning" href="#!">
                                                            Forgot password?
                                                        </a>
                                                    </p>
                                                </Form.Group>
                                                <div className="d-grid">
                                                    <Button variant="warning" type="submit">
                                                        Login
                                                    </Button>
                                                </div>
                                            </Form>
                                            <div className="mt-3">
                                                <p className="mb-0  text-center">
                                                    Don't have an account?{" "}
                                                    <a href={'http://localhost:3000/registration'} className="text-warning fw-bold">
                                                        Sign Up
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    </>

}

export default Login;