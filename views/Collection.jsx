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
              <div key={art._id}>
                {art.image && art.imageFullname && (
                  <img
                    src={`/uploads/images/${art.imageFullname}`}
                    alt={art.image}
                    className="collection-image"
                  ></img>
                )}
                <br />
                {/* <img src={art.imageurl} alt={art.imageurl} className="collection-image"/> */}
                <a href={`/arts/${art._id}`}>{art.title}</a> <br />
                <span>{art.size}inch</span> <br />
                <span>${art.price}</span> <br />

                <form action={`/arts/cart/${art._id}`} method='POST'>
                  <button >
                    <a >Add to cart</a>
                  </button>
                </form>

              </div>
            );
          })}
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
