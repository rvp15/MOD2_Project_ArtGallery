
const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Home extends React.Component {
  render() {
    const {arts} = this.props
    // console.log(arts)
    return (
      <DefaultLayout title="Home Page" nav="arts">
        <div className="homecontainer">
        “Great things are done by a series of small things brought together.” – Vincent Van Gogh
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;
