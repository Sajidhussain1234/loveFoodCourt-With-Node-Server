import { Button } from 'react-bootstrap';
import { XLg } from 'react-bootstrap-icons';

const MiniCart = (props) => {
    return(
        <>
            <div className={props.active ? 'mini-cart-overlay active' : 'mini-cart-overlay'} onClick={() => props.click()}></div>
            <div className={props.active ? 'mini-cart active' : 'mini-cart' }>
                <div className="mini-cart-x" onClick={() => props.click()}><XLg/></div>
                <h2 className="mini-cart-title">Your Bucket</h2>
                <div className="view-cart-btn">
                    <hr />
                    <Button>Place Order</Button>
                    <Button variant='danger'>Cancel Order</Button>
                </div>
            </div>
        </>
    )
}

export default MiniCart;