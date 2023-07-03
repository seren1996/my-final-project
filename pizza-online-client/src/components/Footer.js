import React from 'react';
import '../styles/Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <>
            <MDBFooter className='text-center text-lg-start text-muted Footer' color='white' bgColor='dark' >
                <section className='d-flex justify-content-center'>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-3" />
                                    Tamra, Main street, IL
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    Seeren_assadi@outlook.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> +972 55-2375949
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Opening Hours</h6>
                                <p>
                                    Sunday - Thursday: 10:30-20:30
                                </p>
                                <p>
                                    Friday: 10:00-22:00
                                </p>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>

                </section>

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright: Seren Bokaiey
                </div>
            </MDBFooter>
        </>
    );
}

export default Footer;


