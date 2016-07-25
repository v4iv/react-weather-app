/**
 * Created by Vaibhav Sharma on 7/23/2016.
 */
var React = require('react');

var NavBar = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top clearfix">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><i className="fa fa-cloud"></i> Azure</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        {this.props.children}
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = NavBar;