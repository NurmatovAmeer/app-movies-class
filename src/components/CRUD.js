import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            products: [],
            selectedIndex: -1
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {

        const addProduct = (event) => {

            event.preventDefault();

            let nameProduct = event.target.productName.value;
            let priceProduct = event.target.productPrice.value;
            let colorProduct = event.target.productColor.value;

            event.target.reset();

            let newProduct = {
                name: nameProduct,
                price: priceProduct,
                color: colorProduct
            };

            if (this.state.selectedIndex > 0){
                this.state.products[this.state.selectedIndex] = newProduct;
                this.state.selectedIndex = -1
            } else {
                this.state.products.push(newProduct);
            }

            this.setState({
                products: this.state.products
            })
        };

        const deleteProduct = (index) => {
            this.state.products.splice(index,1);

            this.setState({
                products: this.state.products
            })
        };

        const editProduct = (index) => {
            {this.toggle()}
            this.setState({
                selectedIndex: index
            });
        };

        return (
            <>
                <div className="container">
                    <div className="row">
                        <Button onClick={this.toggle} className="btn btn-success mt-3">Crud</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <ModalHeader>CRUD</ModalHeader>
                            <ModalBody>
                                <form onSubmit={addProduct}>
                                    <input type="text"  defaultValue={this.state.products[this.state.selectedIndex]?.name} className="form-control" name="productName" placeholder="type here number"/>
                                    <input type="number"  defaultValue={this.state.products[this.state.selectedIndex]?.price} className="form-control mt-3" name="productPrice" placeholder="type here price"/>
                                    <input type="color"  defaultValue={this.state.products[this.state.selectedIndex]?.color} className="form-control mt-3" name="productColor"/>
                                    <Button type="submit" className="btn btn-success mt-3" onClick={this.toggle}>Add</Button>{' '}
                                </form>
                            </ModalBody>
                        </Modal>
                        <div className="col-12">
                            <div className="row">
                                {this.state.products.map((item ,index) => {
                                    return (
                                        <div className="col-4 mt-3">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3>{item.name}</h3>
                                                </div>
                                                <div className="card-body">
                                                    <p>Price: <b>{item.price}</b></p>
                                                    <p>Color: <b>{item.color}</b></p>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between align-items-center">
                                                    <button type="button" className="btn btn-success" onClick={() => {editProduct(index)}}>Edit</button>
                                                    <button type="button" className="btn btn-danger" onClick={() => {deleteProduct(index)}}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>


                    </div>
                </div>
            </>
        );
    }
}

export default Crud;