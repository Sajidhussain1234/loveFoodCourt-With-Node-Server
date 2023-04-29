// import { Products } from '../JSON/products';
import { Col, Row } from "react-bootstrap";
import ProCard from "./ProCard";

const ProCategory = (props) => {
  return (
    <div className="pro-cate">
      <div className="cate-title">
        <a href="/" className="btn btn-primary float-end">
          See More
        </a>
        <h1>{props.categoryWiseData.attributes.name}</h1>
        <hr />
      </div>
      <Row>
        {props.productData
          .filter(
            (product) =>
            product.attributes.category ===
              props.categoryWiseData.attributes.name
          )
          .map((product) => (
            <Col lg={3} md={4} key={product.id}>
              <ProCard
                key={product.id}
                description={product.attributes.description}
                title={product.attributes.title}
                price={product.attributes.price}
                discountPrice={product.attributes.discountPrice}
                imageURL={product.attributes?.imageURL}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default ProCategory;
