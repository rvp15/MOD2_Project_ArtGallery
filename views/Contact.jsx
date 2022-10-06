
const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Contact extends React.Component {
    render() {
       
        return (
          <DefaultLayout title="Contact" nav="arts">
            <div>
            Contact Page
            </div>
          </DefaultLayout>
        );
      }
}

module.exports = Contact;
