import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { propTypes } from 'react-bootstrap/esm/Image';

export default function SellerMenuOrderListItem(props) {
  const { image, seller_fn, seller_ln, item_name, quantity, description, price, addCartItem, id } = props;
  console.log("THIS IS THE PROPS>>>>>", props)
  return (
    <tr>
      <td><img src={image}/>Image Here</td>
      <td>
        <h3>{seller_fn} {seller_ln}'s {item_name}</h3>
        <h5></h5>

        <Button onClick={() => addCartItem(props)} variant="dark" type="submit">
          Add to Cart
        </Button>
      </td>
      <td colSpan="2">{description}</td>
      <td>$ {price / 100}</td>
    </tr>
  );
}