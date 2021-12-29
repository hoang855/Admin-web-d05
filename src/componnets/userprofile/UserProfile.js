import React from "react";
import "./UserProfile.css"
import Card from "../Layouts/Card";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button, Navbar, Nav } from "react-bootstrap";

const UserProfile = () => {
  return (
    <div>
      <div className="success">
        <span className="icon-left"><i class="bi bi-check"></i></span>
        <strong>Success ! Your profile has been updated !</strong>
        <span className="icon-right" >
          <i class="bi bi-x-lg"></i>
        </span>

      </div>
      <div>
        <span>OVERVIEW</span>
        <h3>User Profile</h3>
      </div>
      <div className="full-body">
        <Card className="container-info">
          <div className="infomation">
            <div className="img-main">
              <img src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-cho-con-gai-1.jpg" />
            </div>
            <h4 style={{ marginTop: "1rem", fontFamily: "-apple-system", fontSize: "25px" }}>Seerra Brooks</h4>
            <span style={{ color: "#868e96", fontSize: "15px" }}>Project Manager</span>
            <button className="btn-follow">
              <i class="bi bi-person-plus-fill">Follow</i>
            </button>

          </div>
          <li className="group-item">
            Workload
          </li>
          <li>
            <strong>Description</strong>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit . Odio eaque.qidem,commodi soluta qui quae minima obcaecati quod dolorum sint alias , possimus illum assumenda eligendi cumque ? </span>
          </li>
        </Card>
        <Card className="main-content">
          <div>
            <div>
              <h6>Account Detail</h6>
              <div>
                <Form>
                  <Row className="mb-3">
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="fistname" placeholder="Enter First Name" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="lastname" placeholder="Enter Last Name" />
                      </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Update Account
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

    </div>
  )
};

export default UserProfile;
