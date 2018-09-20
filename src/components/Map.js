import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 43.5000000,
            lng: 41.3000000
        },
        zoom: 7
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '70vh', width: '100% !important'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyAb9G56azF-SF7hBDi2Q7bTvGKAPkQVpVk'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}>
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;



