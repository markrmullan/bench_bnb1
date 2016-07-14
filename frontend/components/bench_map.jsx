const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./../stores/bench_store');
const BenchActions = require('./../actions/bench_actions');
const hashHistory = require('react-router').hashHistory;

const BenchMap = React.createClass({
  render(){
    return (<div className='map' ref='map'></div>);
  },

  componentDidMount(){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);

    BenchStore.addListener(this._onChange);

    this.map.addListener('click', (e) => {
      let lat = e.latLng.lat();
      let lng = e.latLng.lng();
      let coords = {lat: lat, lng: lng};
      hashHistory.push({pathname: 'benches/new', query: coords});
    });

    this.map.addListener('idle', () => {
      let mapBound = this.map.getBounds();
      let nE = mapBound.getNorthEast();
      let sW = mapBound.getSouthWest();
      let bounds = {southWest: {lat: sW.lat(), lng: sW.lng()},
                    northEast: {lat: nE.lat(), lng: nE.lng()}};
      BenchActions.fetchAllBenches(bounds);
    });
  },

  _onChange(){
    let benchesObj = BenchStore.all();
    let keys = Object.keys(benchesObj);
    let benches = [];
    keys.forEach((key) => benches.push(benchesObj[key]) );
    benches.map((bench) => {(
      new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        map: this.map
      }).setMap(this.map));});
  }
});

module.exports = BenchMap;
