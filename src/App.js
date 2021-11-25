import "./App.css";
import Navbarapp from "@components-navbar";
import Logic from "@components-task1";
import API from "@components-task2";
import { Card, CardBody, Row, Col, Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <Navbarapp />
      <Container>
        <Col>
          <Row className="py-4">
            <Col sm={6}>
              <Card
                style={{
                  Maxwidth: "20rem",
                  height: "auto",
                  borderRadius: 8,
                  backgroundColor: "lightBlue",
                }}
              >
                <div
                  className="py-2 bodycard1"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Logic Test
                </div>
                <CardBody>
                  <Logic />
                </CardBody>
              </Card>
            </Col>

            <Col sm={6}>
              <Card
                style={{
                  Maxwidth: "20rem",
                  height: "auto",
                  borderRadius: 8,
                  backgroundColor: "lightBlue",
                }}
              >
                <div
                  className="py-2 bodycard1"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  API Test
                </div>
                <CardBody>
                  <API />
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Col>
      </Container>
    </div>
  );
}

export default App;
