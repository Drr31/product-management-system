import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { addProduct } from '../services/ProductService';


const AddStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(e.target)
        .then((result)=>{
            alert("Product Added Successfuly");
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Add Product");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Ajouter un Produit
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="nom">
                                    <Form.Label>nom</Form.Label>
                                    <Form.Control type="text" name="FirstName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="prix_unitaire">
                                    <Form.Label>prix_unitaire</Form.Label>
                                    <Form.Control type="text" name="LastName" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="quantite">
                                    <Form.Label>quantite</Form.Label>
                                    <Form.Control type="text" name="RegistrationNo" required placeholder="" />
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

export default AddStudentModal;