import { Row, Col } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <div className="d-flex">
        <HeartFill
          color="red"
          className="me-2"
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch({
              type: "Add_To_Favorite",
              payload: data.company_name,
            });
          }}
        />
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </div>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>;
};

export default Job;
