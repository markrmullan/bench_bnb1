const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('./components/search');
const BenchMap = require('./components/bench_map');
const BenchForm = require('./components/bench_form');
const BenchApiUtils = require('./util/bench_api_utils');
const SessionApiUtil = require('./util/session_api_util');

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Router = ReactRouter.Router;

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Welcome to BenchBnb!</h1>
        {this.props.children}
      </div>
    );
  }
});

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search} />
    </Route>
    <Route path="benches/new" component={BenchForm} />
  </Router>
);

document.addEventListener("DOMContentLoaded", () => ReactDOM.render(
  routes, document.getElementById("content")
));

window.BenchMap = BenchMap;
window.SessionApiUtil = SessionApiUtil;
