const React = require('react');

var About = React.createClass({
  render: function (){
    return (
      <div>
        <h3 className="text-center panel-title">About Component</h3>
        <p className="r">
          This is a weather app build on React. I have built this for the
          complete React Web App Developer course.
        </p>
        <p>
          Here are some of the tools that i used:
        </p>
          <ul>
            <li>
              <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
            </li>
            <br />
            <li>
              <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
            </li>
          </ul>
      </div>
    );
  }
});

module.exports = About;
