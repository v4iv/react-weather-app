/**
 * Created by Vaibhav Sharma on 7/23/2016.
 */
var React = require('react');
var HTTP = require('../services/httpservice');

var NavBar = require('./NavBar.jsx');
var SearchBox = require('./SearchBox.jsx');
var WeatherBox = require('./WeatherBox.jsx');

var pos = {
    lat: "",
    lon: ""
};

var App = React.createClass({
    getInitialState: function () {
        return ({
            gps: false,
            lat: '',
            lon: '',
            search: '',
            weather: null,
            units: 'metric',
            loading: true,
        });
    },
    componentDidMount: function () {
        if (navigator.geolocation) {
            var location_timeout = setTimeout("geolocFail()", 10000);
            navigator.geolocation.getCurrentPosition(function (position) {
                clearTimeout(location_timeout);
                this.setState({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                        gps: true
                    },
                    function () {
                        console.log("HTML5 goelocation found, lat: " + this.state.lat + " lon: " + this.state.lon);
                        HTTP.get('lat=' + this.state.lat + '&lon=' + this.state.lon + '&units=' + this.state.units).then(function (data) {
                            this.setState({weather: data, loading: false});
                        }.bind(this));
                    }.bind(this));
            }.bind(this), function (error) {
                console.log("Geo Location Error : " + error);
                clearTimeout(location_timeout);
                geolocFail();
            });
        }
        else {
            HTTP.get('q=London&units=' + this.state.units).then(function (data) {
                this.setState({weather: data, loading: false});
            });
        }
        var geolocFail = function () {
            alert('Geolocation was not support or allowed, try searching a city instead');
        }
    },
    changeUnits: function (temp) {
        if (temp == "°C" && temp.substring(1, 2) != this.state.units) {
            this.setState({units: "metric"}, function () {
                if (this.state.gps == true) {
                    HTTP.get('lat=' + this.state.lat + "&lon=" + this.state.lon + '&units=' + this.state.units).then(function (data) {
                        //Sets the weather data returned fro OpenWeatherMap to the state of the component
                        this.setState({weather: data});
                    }.bind(this));
                } else {
                    HTTP.get('q=' + this.state.search + '&units=' + this.state.units).then(function (data) {
                        //Sets the data returned to the state of the component
                        this.setState({weather: data});
                    }.bind(this));
                }
            });

        } else if (temp == "°F" && temp.substring(1, 2) != this.state.units) {
            this.setState({units: "imperial"}, function () {
                if (this.state.gps == true) {
                    HTTP.get('lat=' + this.state.lat + "&lon=" + this.state.lon + '&units=' + this.state.units).then(function (data) {
                        this.setState({weather: data});
                    }.bind(this));
                } else {
                    HTTP.get('q=' + this.state.search + '&units=' + this.state.units).then(function (data) {
                        this.setState({weather: data});
                    }.bind(this));
                }
            });
        }
    },
    handleSearch: function (query) {
        HTTP.get('q=' + query + '&units=' + this.state.units).then(function (data) {
            this.setState({search: query, weather: data, loading: false, gps: false})
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <NavBar>
                    <SearchBox onNewSearch={this.handleSearch}/>
                </NavBar>
                {(() => {
                    if (this.state.weather) {
                        return (
                            <WeatherBox
                                city={this.state.weather.city.name}
                                country={this.state.weather.city.country}
                                date={this.state.weather.list[0].dt_txt}
                                temp={this.state.weather.list[0].main.temp}
                                windSpeed={this.state.weather.list[0].wind.speed}
                                windAngle={this.state.weather.list[0].wind.deg}
                                icon={this.state.weather.list[0].weather[0].icon}
                                iconID={this.state.weather.list[0].weather[0].id}
                                iconDesc={this.state.weather.list[0].weather[0].description}
                                units={this.state.units}
                                changeUnits={this.changeUnits}
                            />
                        );
                    }
                })()}
            </div>
        );
    }
});

module.exports = App;