import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function OurTeam({title, des, img}) {
  return (
    <Card>
      <Card.Img variant="top" src={`/src/assets/images/ourteam/${img}`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {des}
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default OurTeam;