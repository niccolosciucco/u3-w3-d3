import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

const Favorities = () => {
  const favorites = useSelector((state) => state.favorite.companies);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="mt-5">
          <h1>Aziende Preferite</h1>
          <ListGroup>
            {favorites.map((company, i) => (
              <ListGroup.Item
                key={i}
                className="d-flex justify-content-between"
              >
                <span>{company}</span>
                <Button
                  variant="danger"
                  onClick={() =>
                    dispatch({ type: "Remove_From_Favorite", payload: company })
                  }
                >
                  <Trash />
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorities;
