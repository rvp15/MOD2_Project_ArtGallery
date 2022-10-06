
const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class Home extends React.Component {
  render() {
    const {arts} = this.props
    // console.log(arts)
    return (
      <DefaultLayout title="Home Page" nav="arts">
        <div className="homecontainer">
         <p> Enjoy our Hand made products-Made with Love in art</p>

        “Great things are done by a series of small things brought together.” – Vincent Van Gogh
        <hr />
        </div>
          <div className="footer">
          <div className="foot1"><h3>Customer Service</h3>
          <p>Contact Us</p>
          <p>General Terms and Conditions</p>
          <p>Customer Testimonials</p>
          <p>Commission an Artist</p>
          <p>Free Art Advisory</p>
          </div>
          <div className="foot2"><h3>Who Are We?</h3>
          <p>Our Artists</p>
          <p>Art Magazine</p>
          <p>The Team</p>
          <p>FAQ</p>
          <p>Jobs</p>
          </div>
          <div className="foot3"><h3>Are you a Creator?</h3>
          <p>Join Us</p>
          <p>Login for Creator</p>
          <p>The Team</p>
         
          </div>
          </div>
      </DefaultLayout>
    );
  }
}

module.exports = Home;
