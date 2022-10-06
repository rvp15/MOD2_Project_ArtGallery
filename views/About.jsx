const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class About extends React.Component {
    render() {
     
        return (
          <DefaultLayout title="About" nav="arts">
            <div>
           About Page
            </div>
          </DefaultLayout>
        );
      }
}

module.exports = About;
