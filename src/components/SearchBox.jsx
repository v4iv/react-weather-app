/**
 * Created by Vaibhav Sharma on 7/23/2016.
 */
var React = require('react');

var SearchBox = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        if (this.refs.searchInput.value.trim() && this.props.onNewSearch) {
            this.props.onNewSearch(this.refs.searchInput.value);
            this.refs.searchInput.value = '';
        }
    },
    render: function () {
        return (
            <form className="nav navbar-form navbar-right" onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" ref="searchInput" placeholder="Search..."/>
            </form>
        );
    }
});

module.exports = SearchBox;