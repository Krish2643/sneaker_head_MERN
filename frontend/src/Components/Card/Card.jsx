import { React, useContext } from "react";
import "./Card.css";
import { useCart } from "react-use-cart";
import { NavLink} from "react-router-dom";
import { LoginContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const Card = ({ img, title, prevPrice, price, company, category, item }) => {
  const { addItem } = useCart();
  const {isLogin} = useContext(LoginContext);
  const navigate = useNavigate();

  return (
    <div className="men-product-card">
      <NavLink to={`/men/${item.id}`}>
        <div className="men-product-image">
          <img src={img} className="men-product-img" alt="shoes" />
        </div>
      </NavLink>
      <div className="product-description">
        <h3 className="product-title">{title}</h3>
        <div className="product-price">
          Price :<del className="product-price-1"> {prevPrice}</del>
          <span className="product-price-2">${price}</span>
        </div>
        <p className="product-company-name">
          Company : {company} - {category}
        </p>
        <div className="product-btn">
          <NavLink to={`/men/${item.id}`}>
            <button className="btn">Shop Now</button>
          </NavLink>
          <div key={item.id}>
            <button
              // onClick={() => {
              //   addItem(item);
              // }}
              onClick={ isLogin === "true" ? ()=> addItem(item) :
              ()=> navigate('/signin', {replace: true}) }
              className="btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
