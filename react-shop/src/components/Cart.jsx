export function Card(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;
  return (
    <div className="cart teal white-text lighten-2" onClick={handleBasketShow}>
      <i className="material-icons">shopping_basket</i>
      {quantity ? <span className="card-quantity">{quantity}</span> : null}
    </div>
  );
}