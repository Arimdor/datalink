import React, {Component} from 'react';

class TargetCard extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>List of targets</span>
                            <button type="button" id="btnModal" className="btn btn-primary btn-sm" onClick={this.props.showModal}><
                                i className="fas fa-plus"/>
                            </button>
                        </div>

                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="d-flex justify-content-between align-items-center">
                                <span style={{fontSize: '14px'}} className="text-monospace">
                                    <b>Type:</b> TOR&nbsp;
                                    <b>Lat:</b> 42.991238&nbsp;
                                    <b>Lng:</b> 44.2971325&nbsp;
                                    <b>Status:</b> Destruido&nbsp;
                                </span>
                                <form action="/delete/4" method="post">
                                    <button className="btn btn-danger btn-sm float-right"><i className="fas fa-minus-circle"></i></button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TargetCard;
