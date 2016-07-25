/**
 * Created by Vaibhav Sharma on 7/23/2016.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

weatherIcon = {
    fontSize: 100,
    marginTop: 20,
    marginBottom: 20
};


var Welcome = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-xs-12 text-center">
                    <h1>Welcome To Azure Weather App</h1>
                    <i className="wi wi-day-sunny" style={weatherIcon}/>
                    <p>This is Weather on Demand app powered by React JS and openweathermap.com</p>
                    <p>To use WOD, simply allow it to find your position via GPS or search on a city. To search by city,
                        type the English name of the city, like this "London". </p>
                    <Link to="/weather">
                        <button type="btn" className="btn btn-primary">Got it, let's go!</button>
                    </Link>
                </div>
            </div>
        );
    }
});

module.exports = Welcome;