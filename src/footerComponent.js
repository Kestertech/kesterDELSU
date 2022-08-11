import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon from './images/icon.png';
import SubmissionForm from './submissionComponent';

const FooterComponent = () => {
    return ( 
        <footer className='bg-dark p-2'>
            <Row className='container-fluid mt-3 mb-3'>
            <Col xs={12} md={4} lg={3}>
                <div className='p-3'>
                    <img src={icon} style={{maxWidth:'80px'}} alt='Company Logo'/>
                    <p className='text-light'>This is the official website of Delta State University Abraka. Developed by Excellent Kester Obi with REACT</p>
                </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
                <div className='p-3'>
                   <h3 className="text-light head">Contact Us</h3>
                    <p className='text-light'>Delta State University. PMB 1, Abraka, Delta State, Nigeria.</p>
                </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
                <div className='p-3'>
                    <h3 className="text-light head">Our Mission</h3>
                    <p className='text-light'>Equipping students with the 21st Century skills and techniques needed solve real life problems and to compete with academic giants across the globe</p>
                </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
                <div className='p-3'>
                <h3 className="text-light head">Send Us a Mail</h3>
                <SubmissionForm></SubmissionForm>
                </div>
            </Col>

            </Row>
            
        </footer>
     );
}
 
export default FooterComponent;