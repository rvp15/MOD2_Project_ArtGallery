

const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Index extends React.Component {
  render() {
    const {arts} = this.props
    // console.log(arts)
    return (
      <DefaultLayout title="Home Page" nav="arts">
        <div>
          <ul>
            {arts.map((art) => {
              return (
                <li key={art._id}>
                  <a href={`/arts/${art._id}`}>{art.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
