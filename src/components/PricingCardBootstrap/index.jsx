import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Row,
  Col,
} from 'reactstrap';

export function PricingCardBootstrap() {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content. asdasddas asdasdasd asdasd With supporting text below as a
            natural lead-in to additional content. asdasddas asdasdasd asdasd
            With supporting text below as a natural lead-in to additional
            content. asdasddas asdasdasd asdasd
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
}
