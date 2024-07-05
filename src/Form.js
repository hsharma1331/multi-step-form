import React, { useState } from "react";
import {
  Container,
  Button,
  Modal,
  Form,
  Tabs,
  Tab,
} from "react-bootstrap";
//container is used to keep everything responsive
//tab and tabs are used for the tab view
//modal is used to show the saved data in local storage

export default function MainForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState([]);
  const [namee, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [addLine1, setAddLine1] = useState("");
  const [addLine2, setAddLine2] = useState("");
  const [city, setCiy] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [localData, setLocalData] = useState([]);
  const [errors, setErrors] = useState({});



  const handleNext = () => {
    if (step === 1 && validate1()) {
      setStep(step + 1);
    } else if (step === 2 && validate2()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newArr = [...formData];
    let newObj = {
      namee,
      email,
      phone,
      addLine1,
      addLine2,
      city,
      state,
      zipCode,
    };
    newArr.push(newObj);
    setFormData(newArr);
    localStorage.setItem("formData", JSON.stringify(newArr));

    setTimeout(() => {
      alert("Form submitted successfully😄");
      setName("");
      setEmail("");
      setPhone("");
      setAddLine1("");
      setAddLine2("");
      setCiy("");
      setState("");
      setZipCode("");
      setStep(1);
    }, 1000);
  };

  const handleShowData = () => {
    setLocalData(JSON.parse(localStorage.getItem("formData")));
    setShowModal(true);
  };


  //validating errors
  const validate1 = () => {
    const error1 = {};
    if (!namee) error1.namee = 'Name is required';
    if (!email) error1.email = 'Email is required';
    if (!phone) error1.phone = 'Phone is required';
    setErrors(error1);
    return Object.keys(error1).length === 0;
  };

  const validate2 = () => {
    const error1 = {};
    if (!addLine1) error1.addLine1 = 'Address 1 is required';
    if (!addLine2) error1.addLine2 = 'Address 2 is required';
    if (!city) error1.city = 'City is required';
    if (!state) error1.state = 'State is required';
    if (!zipCode) error1.zipCode = 'Zip code is required';
    setErrors(error1);
    return Object.keys(error1).length === 0;
  };

  return (
    <Container>
      <Tabs activeKey={step}>
        <Tab eventKey={1} title="Personal Information">
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="namee"
                type="text"
                value={namee}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                 isInvalid={!!errors.namee}
              />
               <Form.Control.Feedback type="invalid">
                {errors.namee}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                 isInvalid={!!errors.email}
              />
               <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
                 isInvalid={!!errors.phone}
              />
               <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="btn btn-success" onClick={handleNext}>
              Next
            </Button>
            <Button className="btn btn-primary" onClick={handleShowData}>
              Show Data
            </Button>
          </Form>
        </Tab>
        <Tab eventKey={2} title="Address Information">
          <Form>
            <Form.Group>
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                name="addLine1"
                type="text"
                value={addLine1}
                onChange={(e) => {
                  setAddLine1(e.target.value);
                }}
                required
                 isInvalid={!!errors.addLine1}
              />
               <Form.Control.Feedback type="invalid">
                {errors.addLine1}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                name="addLine2"
                type="text"
                value={addLine2}
                onChange={(e) => {
                  setAddLine2(e.target.value);
                }}
                required
                 isInvalid={!!errors.addLine2}
              />
               <Form.Control.Feedback type="invalid">
                {errors.addLine2}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                type="text"
                value={city}
                onChange={(e) => {
                  setCiy(e.target.value);
                }}
                required
                 isInvalid={!!errors.city}
              />
               <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control
                name="state"
                type="text"
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                }}
                required
                 isInvalid={!!errors.state}
              />
               <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                name="zipCode"
                type="text"
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
                required
                 isInvalid={!!errors.zipCode}
              />
               <Form.Control.Feedback type="invalid">
                {errors.zipCode}
              </Form.Control.Feedback>
            </Form.Group>
            <Button className="btn btn-warning" onClick={handleBack}>
              Back
            </Button>
            <Button className="btn btn-success" onClick={handleNext}>
              Next
            </Button>
          </Form>
        </Tab>
        <Tab eventKey={3} title="Confirmation">
          <Form onSubmit={handleSubmit}>
            <h3>Name : {namee}</h3>
            <h3>Email : {email}</h3>
            <h3>Phone : {phone}</h3>
            <h3>Address Line 1 : {addLine1}</h3>
            <h3>Address Line 2 : {addLine2}</h3>
            <h3>City : {city}</h3>
            <h3>State : {state}</h3>
            <h3>Zip Code : {zipCode}</h3>
            <Button className="btn btn-warning" onClick={handleBack}>
              Back
            </Button>
            <Button className="btn btn-dark" type="submit">
              Submit
            </Button>
          </Form>
        </Tab>
      </Tabs>
      {/* creating modal here to show the data */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Saved Form Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {localData ? (
            <pre>{JSON.stringify(localData, null, 2)}</pre>
          ) : (
            <p>No data found.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
