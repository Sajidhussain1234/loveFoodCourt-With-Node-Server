import { Col, Container, Row } from "react-bootstrap";

const FooterTop = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <div className="footer-top">
                        <h2>We Care Your Health</h2>
                        <p>Healthiest dishes at LFC, opt for the grilled chicken wings, which deliver 70 calories per wing thanks to the cooking method. We have upped our already stringent standards of safety and hygiene with increased focus on Screening, Sanitization, Social Distancing and Contactless service. </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="footer-top">
                        <h2>We Care Your Guests</h2>
                        <p>We use natural, high-quality materials and have all the conveniences to make our guests feel welcome and comfortable. From our table designs to the sounds in our restaurants, we create a friendly and lively place that makes you want to stay and enjoy your time with friends or family. </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="footer-top last">
                        <h2>We Care Your Privacy</h2>
                        <p>We and our partners store and/or access information on a device, such as unique IDs in cookies to process personal data. You may accept or manage your choices by clicking below, including your right to object where legitimate interest is used, or at any time in the privacy policy page. </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default FooterTop;