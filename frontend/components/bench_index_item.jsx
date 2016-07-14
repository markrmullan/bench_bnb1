const React = require('react');

const BenchIndexItem = React.createClass({
  render(){
    return <li>{this.props.bench.description}</li>;
  }
});

module.exports = BenchIndexItem;
