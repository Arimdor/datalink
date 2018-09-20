import React, {Component} from 'react';

class TargetCard extends Component {
    render() {
        const targets = this.props.targets.map((target, i) => {
            return (
                <li key={i} className="list-group-item">
                    <div className="d-flex justify-content-between align-items-center">
                                <span className="text-monospace">
                                    <b>Type:</b> {target.type}&nbsp;
                                    <b>Lat:</b> {target.lat}&nbsp;
                                    <b>Lng:</b> {target.lng}&nbsp;
                                    <b>Status:</b> {target.status}&nbsp;
                                </span>
                        <button className="btn btn-danger btn-sm float-right" onClick={() => this.props.deleteTarget(target.id)}><i className="fas fa-minus-circle"/></button>
                    </div>
                </li>
            )
        });

        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Targets</span>
                            <button type="button" id="btnModal" className="btn btn-primary btn-sm" onClick={this.props.showModal}>
                                <i className="fas fa-plus"/>
                            </button>
                        </div>

                    </div>
                    <ul className="list-group list-group-flush">
                        {targets}
                    </ul>
                </div>
            </div>
        )
    }
}

export default TargetCard;
