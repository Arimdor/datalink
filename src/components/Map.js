import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    static defaultProps = {
        center: {
            lat: -12.0552073,
            lng: -77.0627323
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{height: '80vh', width: '100% !important', marginBottom: '1rem'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyAb9G56azF-SF7hBDi2Q7bTvGKAPkQVpVk'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;



