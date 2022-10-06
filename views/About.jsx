const React = require("react");
const DefaultLayout = require("./layouts/DefaultLayout");

class About extends React.Component {
    render() {
     
        return (
          <DefaultLayout title="About" nav="arts">
            <div className="abt-ctr">
            We honor these essential contributions by recognizing the accomplishments in the arts and sciences.

We are committed to inclusive exchange. Through our prizes, we reward  artists and scientists at every stage of their careers. Our grants support the programs and initiatives of other organizations that complement our mission. Whether displayed in an exhibition in our gallery space, sent on tour in a traveling exhibit, or loaned to another organization, our art collection connects the foundation with cultural institutions around the world, facilitating academic and artistic dialogue.

The arts and sciences are creative endeavors, constantly evolving and influencing our society. We are passionate about celebrating immigrant artists and scientists. Their work contributes to the advancement of culture for all of us.
            </div>
          </DefaultLayout>
        );
      }
}

module.exports = About;
