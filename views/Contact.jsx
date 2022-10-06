
const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Contact extends React.Component {
    render() {
       
        return (
          <DefaultLayout title="Contact" nav="arts">
            <div className="contact-ctn">
            <p>Vithlceky </p> 
<p>21 East 70th Street</p> 
<p>New York, New York 10021</p>
<p>Phone: 212.472.2500</p> 

Email: info@vilcek.org
            </div>
          </DefaultLayout>
        );
      }
}

module.exports = Contact;
