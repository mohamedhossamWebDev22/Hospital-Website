import Card from 'react-bootstrap/Card';

function DCard(props) {
  return (
    <Card className='my-2 mx-3 hovCard'>
      <Card.Body className='text-center'>
        <Card.Img className='ImgCard mb-5 ' variant="top" src={props.src} />
        <Card.Title className='text-dark'>Dr/{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default DCard;