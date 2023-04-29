import { Col, Container, Row, FloatingLabel, Form, Button } from "react-bootstrap";
import { Facebook, Instagram, Linkedin, Youtube } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="main-footer">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="about-col">
                                <a href="/">
                                    <img src="/images/love-logo.png" alt="Love Food Court" className="footer-logo"/>
                                </a>
                                <p><strong>LFC</strong> is a global chicken restaurant brand with a rich, decades-long history of success and innovation. It all started with one cook, Colonel Harland Sanders, who created a finger lickin’ good recipe more than 25 years ago—a list of 11 secret herbs and spices scratched out on the back of his kitchen door.</p>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Payment Method</a></li>
                                    <li><a href="/">Delivery Policy</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="footer-news-letter">
                                <h2>Newsletter</h2>
                                <Row className="g-2">
                                    <Col xs={9}>
                                        <FloatingLabel controlId="floatingInputGrid" label="Enter Email">
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <Button style={{'height':'100%', 'width':'100%'}}>Submit</Button>
                                    </Col>
                                </Row>
                                <Row className="app-downloader">
                                    <Col xs={6}>
                                        <a href="/">
                                            <img src="/images/Android-Store-logos.png" alt="Android App" />
                                        </a>
                                    </Col>
                                    <Col xs={6}>
                                        <a href="/">
                                            <img src="/images/App-Store-logos.png" alt="Apple App" />
                                        </a>
                                    </Col>
                                </Row>
                                <div className="footer-social-icon">
                                    <ul>
                                        <li><a href="/"><Facebook /></a></li>
                                        <li><a href="/"><Instagram /></a></li>
                                        <li><a href="/"><Youtube /></a></li>
                                        <li><a href="/"><Linkedin /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <Container>
                    <div className="copy-right">Copyright  © 2023</div>
                </Container>
            </div>
        </div>
    )
}

export default Footer;