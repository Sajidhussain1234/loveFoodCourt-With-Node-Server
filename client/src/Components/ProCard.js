import { useState } from "react";
import { Button} from "react-bootstrap";
import { Dash, Plus } from "react-bootstrap-icons";
import { useContext } from "react";
import AddToCartContext from "../context/AddToCartContext";

const ProCard = (props) => {
  // const {image, title, description,price} = {props};
  const [qty, setQty] = useState(1);

  const ctx = useContext(AddToCartContext);
  const { BillCalculation } = ctx;

  const onClickAddToCart = () => {
    BillCalculation(qty);
    setQty(1);
  };

  return (
    <>
      <div className="pro-card">
        <div className="image">
          {/* <img src={`http://localhost:1337${props.image}`} alt={props.title} /> */}
          <img src={props.imageURL} alt={props.title} />
        </div>
        <div className="body">
          <div className="content">
            <h2>{props.title}</h2>
            <p className="for-all">{props.description?.slice(0, 65)} ...</p>
            <p className="for-mobile">{props.description?.slice(0, 20)} ...</p>
          </div>
          <div className="price">
            <h5>Rs. {props.price}/{props.discountPrice}</h5>
            <div className="qty">
              <Dash onClick={() => qty > 1 && setQty(qty - 1)} />
              <h6>{qty}</h6>
              <Plus onClick={() => qty < 12 && setQty(qty + 1)} />
            </div>
          </div>
          <Button
            style={{ width: "100%" }}
            onClick={() => onClickAddToCart(qty)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProCard;
