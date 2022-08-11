//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import ContentColumn from './contentColumn';
//import Card from 'react-bootstrap/Card';


const HomeComponent = () => {

    return (
        <div>
            <Row className='container-fluid mt-5'>
                <div>
                    <ContentColumn></ContentColumn>
                </div>
            </Row>
        </div>
    );
}

export default HomeComponent;