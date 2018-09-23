import React, {Component} from 'react';
import {Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter} from 'reactstrap';

class Form extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            modal: false,
            target: {
                type: null,
                lat: null,
                lng: null,
                status: 'Activo'
            }
        };
        this.handleToggleModal = this.handleToggleModal.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        this.handleToggleModal();
    }

    handleToggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.handleToggleModal}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <select name="type" id="type" className="form-control" value={this.state.target.type} onChange={this.handleInput} required>
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
                                <input name="lat" id="lat" type="text" className="form-control" placeholder="Latitude" value={this.state.target.lat} onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                                <input name="lng" id="lng" type="text" className="form-control" placeholder="Longitude" value={this.state.target.lng} onChange={this.handleInput}/>
                            </div>
                            <div className="form-group">
                                <select name="status" id="status" className="form-control" value={this.state.target.status} onChange={this.handleInput} required>
                                    <option value="Activo">Activo</option>
                                    <option value="Destruido">Destruido</option>
                                </select>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Save</button>
                            <button className="btn btn-neutral" onClick={this.handleToggleModal}>Cancel</button>
                        </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default Form;
