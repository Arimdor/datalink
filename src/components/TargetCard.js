import React, {Component} from 'react';

class TargetCard extends Component {
    render() {
        return (
            <div className="card-panel" style={{padding: '0', marginTop: '0'}}>
                <ul className="collection hoverable" style={{padding: '.5rem', margin: '0 auto'}}>
                    <li className="collection-item valign-wrapper row">
                        <div className="col m9 l10 center-align">
                            <p style={{display: 'inline'}}><b>Type: </b> Pechora</p> &nbsp; &nbsp;
                            <p style={{display: 'inline'}}><b>Status: </b> ACTIVE</p> &nbsp; &nbsp;
                            <p style={{display: 'inline'}}><b>Lat: </b> 04º 23' 16''</p> &nbsp; &nbsp;
                            <p style={{display: 'inline'}}><b>Lng: </b> 04º 23' 16''</p> &nbsp; &nbsp;
                        </div>
                        <div className="col m3 l2 center-align">
                            <button className="waves-effect waves-light btn red darken-2"><i className="fas fa-minus-circle"/></button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default TargetCard;
