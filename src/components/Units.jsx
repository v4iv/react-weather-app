/**
 * Created by Vaibhav Sharma on 7/24/2016.
 */
var React = require('react');

var unit = {
    cursor: "pointer"
};

var Units = React.createClass({
    tempClick: function (e) {
        this.props.changeTemp(e.target.innerHTML);
    },
    render: function () {
        return (
            <div className="col-xs-4">
                <span onClick={this.tempClick} style={unit}>°C</span>
                <span> / </span>
                <span onClick={this.tempClick} style={unit}>°F</span>
            </div>
        );
    }
});

module.exports = Units;