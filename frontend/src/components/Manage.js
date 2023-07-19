import React,{ useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getProduct, deleteProduct } from '../services/ProductService';
import AddProductModal from "./AddProductModal";
import UpdateProductModal from "./UpdateProductModal";

const Manage = () => {
    const [product, setProduct] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editProduct, setEditProduct] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    useEffect(() => {
        let mounted = true;
        if(product.length && !isUpdated) {
         return;
         }
         getProduct()
          .then(data => {
            if(mounted) {
                setProduct(data);
            }
          })
        return () => {
           mounted = false;
           setIsUpdated(false);
        }
      }, [isUpdated, product])

      const handleUpdate = (e, pro) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditProduct(pro);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };
    
    const handleDelete = (e, product_id) => {
        if(window.confirm('Vous supprimez le produit, êtes-vous sûr ?')){
            e.preventDefault();
            deleteProduct(product_id)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                alert("Failed to Delete Student");
            })
        }
    };

    let AddModelClose=()=>setAddModalShow(false);
    let EditModelClose=()=>setEditModalShow(false);
    return(
        <div className="container-fluid side-container">
        <div className="row side-row" >
        <p id="manage"></p>
            <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                <thead>
                <tr>
                <th >ID</th>
                <th>Nom :</th>
                <th>Prix Unitaire :</th>
                <th>Quantite</th>
                <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                { product.map((pro) =>

                <tr key={pro.product_id}>
                <td>{pro.product_id}</td>
                <td>{pro.nom}</td>
                <td>{pro.prix_unitaire}</td>
                <td>{pro.quantite}</td>
                <td>

                <Button className="mr-2" variant="danger"
                    onClick={event => handleDelete(event,pro.product_id)}>
                        <RiDeleteBin5Line />
                </Button>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <Button className="mr-2"
                    onClick={event => handleUpdate(event,pro)}>
                        <FaEdit />
                </Button>
                <UpdateProductModal show={editModalShow} product={editProduct} setUpdated={setIsUpdated}
                            onHide={EditModelClose}></UpdateProductModal>
                </td>
                </tr>)}
            </tbody>
            </Table>
            <ButtonToolbar>
                <Button variant="primary" onClick={handleAdd}>
                Add Product
                </Button>
                <AddProductModal show={addModalShow} setUpdated={setIsUpdated}
                onHide={AddModelClose}></AddProductModal>
            </ButtonToolbar>
        </div>
        </div>
    );
};


export default Manage;