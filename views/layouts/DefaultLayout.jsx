const React = require("react");

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body>
          <div className="headercont">
          <h1 id="header">Fine Wall Arts <span id="headspan">-by The First Piece</span></h1>
          </div>
          <nav className="navbaritems">
            <a id="homepage" href={`/${this.props.nav}`}>
              Home
            </a>

            <a href={`/${this.props.nav}/collection`}>Collection</a>
            <a href={`/${this.props.nav}/about`}>About</a>
            <a href={`/${this.props.nav}/contact`}>Contact</a>
            <a href={`/${this.props.nav}/submitartwork`}>Submit Art Work</a>
            <a href={`/${this.props.nav}/cart`}>Cart</a>
          </nav>
        
          <div>{this.props.children}</div>
        
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;
