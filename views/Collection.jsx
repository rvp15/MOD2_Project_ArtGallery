const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Index extends React.Component {
  render() {
    const { arts } = this.props;
    // console.log(arts);
    return (
      <DefaultLayout title="Home Page" nav="arts">
        <div className="collectioncontainer">
          {arts.map((art) => {
            return (
              <div className="eachpic" key={art._id}>
                {art.image && art.imageFullname && (
                  <img
                    src={`/uploads/images/${art.imageFullname}`}
                    alt={art.image}
                    className="collection-image"
                  ></img>
                )}
                <br />
                <div className="belowpiccontainer">
                {/* <img src={art.imageurl} alt={art.imageurl} className="collection-image"/> */}
                <a className="title" href={`/arts/${art._id}`}>{art.title}</a> <span className="price">-${art.price}</span> <br />
                <span className="size">{art.size}inch</span> <br />
               

                <form action={`/arts/cart/${art._id}`} method='POST'>
                  <button className="addtocart-btn">
                    <a >Add to cart</a>
                  </button>
                </form>
                </div>
              </div>
            );
          })}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
