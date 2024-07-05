import { Button, Card } from "react-bootstrap";
import facility from "../assets/card/facility.svg";
import dining from "../assets/card/dining.svg";
import meeting from "../assets/card/meeting.svg";
import Stack from "react-bootstrap/Stack";
const Mycard = () => {
  return (
    <div className="mt-4">
      <div className="">
        <h3>Best offer of the month</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, aliquid!</p>

      </div>

      <Stack direction="vertical" className=" mt-5 " gap={5}>
        <div className="d-md-flex flex-md-nowrap justify-content-center ">
          <div className="col-12 col-md-6 col-lg-4 mb-3 m-2">
            <Card className="w-100 md-w-10 w-m  bg-light  rounded-4 mx-auto  ">
              <Card.Img variant="top" src={facility} className="" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="text-start">
                  Some quick example text to build on the card title and make up
                  the.
                </Card.Text>
                <Button>click here</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3 m-2">
            <Card className="w-100 w-md-25   bg-light  rounded-4 mx-auto ">
              <Card.Img variant="top" src={meeting} className="" />
              <Card.Body>
                <Card.Title>Meeting facility</Card.Title>
                <Card.Text className="text-start">
                  Some quick example text to build on the card title and make up
                  the.
                </Card.Text>
                <Button>click here</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3 m-2">
            <Card className="w-100 w-md-25   bg-light  rounded-4 mx-auto">
              <Card.Img variant="top" src={dining} className="" />
              <Card.Body>
                <Card.Title>Dining Area</Card.Title>
                <Card.Text className="text-start">
                  Some quick example text to build on the card title and make up
                </Card.Text>
                <Button>click here</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Mycard;
