import React, { useState, useRef, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import '../styles/Registration.css';
import axios from '../api/axios';
import { ToastContainer, toast } from 'react-toastify';
const REGISTER_URL = '/api/User/register';
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


function Registration() {

    const emailRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatchPwd, setValidmatchPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const role = 'regular';

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidmatchPwd(match);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ FirstName: firstName, LastName: lastName, Email: email, Password: pwd, Role: role, Address: address, PhoneNumber: phoneNumber }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            toast.success('Congrats, '+firstName+' welcome to our kitchen!', {
                position: toast.POSITION.TOP_RIGHT
            });

            setEmail('');
            setPwd('');
            setFirstName('');
            setLastName('');
            setMatchPwd('');
            setAddress('');
            setPhoneNumber('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('email Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return <>
        <Container>
            <Row className="vh-100 d-flex justify-content-center align-items-center">
                <Col md={8} lg={6} xs={12}>
                    <div className="border border-3 border-warning"></div>
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-3 mt-md-4">
                                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                <h2 className="fw-bold mb-2 text-uppercase ">signup</h2>
                                <div className="mb-3">
                                    <Form onSubmit={handleSubmit}>

                                        <Form.Group className="mb-3" >
                                            <Form.Label className="text-center">
                                                Firstname
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                autoComplete="off"
                                                onChange={(e) => setFirstName(e.target.value)}
                                                value={firstName}
                                                required
                                                placeholder="Enter your firstname" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label className="text-center">
                                                Lastname
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                autoComplete="off"
                                                onChange={(e) => setLastName(e.target.value)}
                                                value={lastName}
                                                required
                                                placeholder="Enter your lastname" />
                                        </Form.Group>

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

                                        <Form.Group className="mb-3" >
                                            <Form.Label className="text-center">
                                                Address
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                autoComplete="off"
                                                onChange={(e) => setAddress(e.target.value)}
                                                value={address}
                                                required
                                                placeholder="Enter your address" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label className="text-center">
                                                Phone Number
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                autoComplete="off"
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                value={phoneNumber}
                                                required
                                                placeholder="Enter your phone number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>
                                                Password
                                            </Form.Label>
                                            <Form.Control
                                                type="password"
                                                onChange={(e) => setPwd(e.target.value)}
                                                value={pwd}
                                                required
                                                aria-invalid={validPwd ? "false" : "true"}
                                                aria-describedby="pwdnote"
                                                onFocus={() => setPwdFocus(true)}
                                                onBlur={() => setPwdFocus(false)}
                                                placeholder="Password"
                                            />
                                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                                8 to 24 characters.<br />
                                                Must include uppercase and lowercase letters, a number and a special character.<br />
                                                Allowed special characters: <span aria-label="exclamation mark">!</span>
                                                <span aria-label="at symbol">@</span><span aria-label="hashtag">#</span>
                                                <span aria-label="dollar sign">$</span><span aria-label="percent">%</span>
                                            </p>
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>
                                                Confirm Password
                                            </Form.Label>
                                            <Form.Control
                                                type="password"
                                                onChange={(e) => setMatchPwd(e.target.value)}
                                                value={matchPwd}
                                                required
                                                aria-invalid={validMatchPwd ? "false" : "true"}
                                                aria-describedby="confirmnote"
                                                onFocus={() => setMatchPwdFocus(true)}
                                                onBlur={() => setMatchPwdFocus(false)}
                                                placeholder="Password" />
                                            <p id="confirmnote" className={matchPwdFocus && !validMatchPwd ? "instructions" : "offscreen"}>
                                                Must match the first password input field.
                                            </p>
                                        </Form.Group>

                                        <div className="d-grid">
                                            <Button variant="warning" type="submit" disabled={!validPwd || !validMatchPwd ? true : false}>
                                                Signup
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <div>
            <ToastContainer />
        </div>
    </>
}

export default Registration;


