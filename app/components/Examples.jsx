const React = require('react');
var {Link, IndexLink} = require('react-router');

var Examples = React.createClass({
  render: function (){
    return (
      <div>
        <h1 className="text-center panel-title">Examples Component</h1>
        <p>Here are a few locations to try out:</p>
        <ol>
          <li>
            <Link to="/?location=China">China</Link>
          </li>
          <li>
            <Link to="/?location=Rio">Rìo, Brásil</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
