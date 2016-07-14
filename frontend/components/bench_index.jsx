const React = require('react');
const BenchStore = require('./../stores/bench_store');
const BenchActions = require('./../actions/bench_actions');
const BenchIndexItem = require('./bench_index_item');


const BenchIndex = React.createClass({
  render(){
    let keys = Object.keys(this.state.benches);
    let benchesArr = [];
    keys.forEach((key) => benchesArr.push(this.state.benches[key]));
    let benches = benchesArr.map((bench) => <BenchIndexItem key={bench.id} bench={bench} />);
    return <ul>
      {benches}
    </ul>;
  },

  getInitialState(){
    return {benches: BenchStore.all()};
  },

  componentDidMount(){
    BenchStore.addListener(this._onChange);
  },

  _onChange(){
    this.setState({
      benches: BenchStore.all()
    });
  }
});


module.exports = BenchIndex;
