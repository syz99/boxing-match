import React, {Component} from 'react';
import ReactMapGL, {Popup, Marker} from 'react-map-gl';
import pic from '../openBox-512.png';

class Map extends Component {

  state = {
    viewport: {
      width: 1300,
      height: 600,
      latitude: 37.8,
      longitude: -96,
      zoom: 4
    }
  };

  componentDidMount() {
    setTimeout(() => this._locateUser(), 3000);
  }

  _locateUser() {
    var copyViewport = {...this.state.viewport}
    navigator.geolocation.getCurrentPosition(position => {
      alert("ready to geolocate???!!");
      copyViewport.latitude = position.coords.latitude;
      copyViewport.longitude = position.coords.longitude;
      copyViewport.zoom = 10;
      this.setState({
        viewport: copyViewport
      });
    });
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken="pk.eyJ1IjoibGl2c2VpYmVydCIsImEiOiJjam9seXMyd3kwcm5oM3Fsc2ZrY2hmMHpsIn0.mLpNtHAeDGdxUKw9H4OWPw"
        >

        <Marker latitude={36.0014} longitude={-78.9382} offsetLeft={-20} offsetTop={-10}>
          <img src={pic} alt="logo" height={30}/>
        </Marker>
        <Marker latitude={36.0104} longitude={-78.218} offsetLeft={-20} offsetTop={-10}>
          <img src={pic} alt="logo" height={30}/>
        </Marker>
        <Marker latitude={36.0443} longitude={-78.603} offsetLeft={-20} offsetTop={-10}>
          <img src={pic} alt="logo" height={30}/>
        </Marker>
        <Marker latitude={36.08347} longitude={-79.0136} offsetLeft={-20} offsetTop={-10}>
          <img src={pic} alt="logo" height={30}/>
        </Marker>

        {/* <Popup latitude={this.state.viewport.latitude} longitude={this.state.viewport.longitude} closeButton={true} closeOnClick={false} anchor="top">
          <div>You are here</div>
        </Popup> */}
      </ReactMapGL>
      
    );
  }
}

export default Map;
