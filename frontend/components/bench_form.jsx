const React = require('react');
const BenchActions = require('./../actions/bench_actions');

const BenchForm = React.createClass({
  render(){
    return (<form onSubmit={BenchActions.createBench}>
      <label>Description:</label>
      <input type="text"></input>
      <br/> <br/>

      <label>Number of seats:</label>
      <input type="text"></input>
      <br/> <br/>

      <label>Latitude</label>
      <input type="text" disabled="true" value={this.props.location.query.lat}></input>

      <br/><br/>

      <label>Longitude</label>
      <input type="text" disabled="true" value={this.props.location.query.lng}></input>

      <br/><br/>

      <input type="submit"></input>

    </form>
  );}
});

module.exports = BenchForm;
