import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateProduct } from '../services/ProductService';



const UpdateProductModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(props.product.product_id, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update Student");
        })
    };

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Product Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="nom">
                                    <Form.Label>Nom :</Form.Label>
                                    <Form.Control type="text" name="FirstName" required defaultValue={props.product.nom} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="prix_unitaire">
                                    <Form.Label>Prix Unitaire :</Form.Label>
                                    <Form.Control type="text" name="LastName" required defaultValue={props.product.prix_unitaire} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="quantite">
                                    <Form.Label>Quantite :</Form.Label>
                                    <Form.Control type="text" name="RegistrationNo" required defaultValue={props.product.quantite} placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default UpdateProductModal;