/**
 * Created by Vaibhav Sharma on 7/23/2016.
 */
var React = require('react');

var Base = React.createClass({
    render: function () {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Base;