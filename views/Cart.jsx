const React = require("react");
const currentCart = require("../data/cartStore");
const DefaultLayout = require("./layouts/DefaultLayout");

class Cart extends React.Component {
  render() {
    return (
      <DefaultLayout title="Cart" nav="arts">
        <div>
          Cart Page
          <hr />
          {currentCart.map((item,index) => {
            return (
              <div key={item._id}>
                {item.title}:{item.price}
                <form action={`/art/cart/delete/${index}`} method="POST">
                  <button value="delete">Delete</button>
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
