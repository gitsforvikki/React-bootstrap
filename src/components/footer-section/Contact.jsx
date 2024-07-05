import { Button, FloatingLabel, Form } from "react-bootstrap";
function Contact() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className=" w-75 bg-light p-2 p-md-5 ">
        <div className="">
          <h4 className="pink-color">Enjoy the <span className="paid-text">Paid</span> services</h4>
          <p>
            Select the best plan available consectetur adipisicing elit.
            Consequuntur, aliquid!
          </p>
        </div>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Your name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Vicky" required />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="vicky@example.com"
              required
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control type="password" placeholder="Password" required />
          </FloatingLabel>

          <Form.Select
            aria-label="Default select example"
            required
            className="mb-3"
          >
            <option>Select your plan</option>
            <option value="1">One month</option>
            <option value="2">Two month</option>
            <option value="6">six month</option>
            <option value="12">One Years</option>
          </Form.Select>

          <div className="d-flex items-start">
            <Form.Check
              type="checkbox"
              id={`default-checkbox`}
              label="Accept terms & Conditions"
              className="mb-3 ml-3"
              required
            />
          </div>
          <div className="d-flex gap-3 Items-start">
            <Button type="submit">Submit</Button> 
            <Button type="reset" className="bg-info">Reset</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
