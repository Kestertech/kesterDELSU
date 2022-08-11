import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import okowa from './images/okowa.jpg'
import bms from './images/bms.jpeg'
import vc from './images/vc.jpeg'


const ContentColumn = () => {
    return ( 
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={okowa} style={{padding:'10px'}} />
        <Card.Body>
          <Card.Title>Senator Dr Ifeanyi A. Okowa</Card.Title>
          <Card.Text>
            The Visitor of Delta State University, Gov Dr Ifeanyi Okowa on an Official Visit to the University
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={bms} style={{padding:'10px'}} />
        <Card.Body>
          <Card.Title>Basic Medical Science (BMS)</Card.Title>
          <Card.Text>
            A Cross Section of 500 Level Medicine and Surgery students in their Medical Lab Coat after a Practical exam
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={vc} style={{padding:'10px'}} />
        <Card.Body>
          <Card.Title>Prof Andy Egwunyenga and Prof Austine Anigala</Card.Title>
          <Card.Text>
            The Vice Chancellor of Delta State University, Prof Andy Egwunyenga and the Dean of faculty of Art, Prof Austine Anigala during a Convocation ceremony
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        </Card.Footer>
      </Card>
    </CardGroup>
    );
}
 
export default ContentColumn;