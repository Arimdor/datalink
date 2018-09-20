import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Form extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            modal: false,
            target: {
                type: null,
                lat: null,
                lng: null,
                status: null
            }
        };
    }

    handleInput(e) {
        const {value, name} = e.target;
        let target = this.state.target;
        target[name] = value;
        this.setState({
            target
        });
        console.log(this.state.target)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addTarget(this.state.target);
        this.toggle();
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <ModalBody>
                            <div className="form-group">
                                <select name="type" id="type" className="form-control" onChange={this.handleInput.bind(this)} required>
                                    <option className="text-muted" value="">Tipo</option>
                                    <option value="AA">AA</option>
                                    <option value="Armored">Armored</option>
                                    <option value="Building">Building</option>
                                    <option value="IR">IR</option>
                                    <option value="SAM">SAM</option>
                                    <option value="Vehicle">Vehicle</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input name="lat" id="lat" type="text" className="form-control" placeholder="Latitude" onChange={this.handleInput.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <input name="lng" id="lng" type="text" className="form-control" placeholder="Longitude" onChange={this.handleInput.bind(this)}/>
                            </div>
                            <div className="form-group">
                                <select name="status" id="status" className="form-control" onChange={this.handleInput.bind(this)} required>
                                    <option value="">Estado</option>
                                    <option value="Activo">Activo</option>
                                    <option value="Destruido">Destruido</option>
                                </select>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-primary" type="submit">Save</button>
                            <button className="btn btn-neutral" onClick={this.toggle.bind(this)}>Cancel</button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default Form;
