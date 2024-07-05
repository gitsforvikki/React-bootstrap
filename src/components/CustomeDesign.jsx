import {
  Badge,
  Button,
  ButtonGroup,
  Col,
  Container,
  Image,
  Row,
  Stack,
} from "react-bootstrap";

import facility from "../assets/facility.svg";

function CustomeDesign() {
  return (
    <div className="">
      {/* <Stack gap={2} className="col-md-5 mx-auto mt-10">
        <Button variant="secondary">Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
      </Stack> */}

      <Container>
        <Row>
          <Col>
            <Image
              src={facility}
              className="custome-image"
              fleid
              roundedCircle
            />
          </Col>
          <Col>
            <Image src={facility} className="custome-image" fleid rounded />
          </Col>
          <Col>
            <Image src={facility} className="custome-image" fleid thumbnail />
          </Col>
        </Row>
      </Container>

      <Badge className="bg-info">home</Badge>
      <Badge pill className=" bg-secondary">
        About
      </Badge>
    </div>
  );
}

export default CustomeDesign;
