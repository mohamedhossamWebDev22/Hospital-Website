import Card from 'react-bootstrap/Card';

function SCard(props) {
  return (
    <Card className='my-2 mx-5 hovCard'>
      <Card.Body className='text-center'>
        <Card.Img className='ImgCard mb-5 ' variant="top" src={props.src} />
        <Card.Title className='text-dark'>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SCard;