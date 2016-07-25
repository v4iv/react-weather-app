/**
 * Created by Vaibhav Sharma on 7/23/2016.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var CreateHistory = require('history/lib/createHashHistory');

var Base = require('./components/Base.jsx');
var Welcome = require('./components/Welcome.jsx');
var App = require('./components/App.jsx');

var History = new CreateHistory({
    queryKey: false
});

var Routes = (
    <Router history={History}>
        <Route path='/' component={Base}>
            <IndexRoute component={Welcome}/>
            <Route path='/weather' component={App}/>
        </Route>
    </Router>
);

module.exports = Routes;