const React = require("react");
const currentCart = require("../data/cartStore");
const DefaultLayout = require("./layouts/DefaultLayout");

class Cart extends React.Component {
  render() {
    return (
      <DefaultLayout title="Cart" nav="arts">
        <div className="cart-item">
          Your Cart
          <hr />
          {currentCart.map((item,index) => {
            return (
              <div className="cart-align" key={item._id}>
                {item.title}:${item.price}
                <form action={`/art/cart/delete/${index}`} method="POST">
                  <button className='all-btn' value="delete">Delete</button>
                </form>
              </div>
            );
          })}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Cart;
