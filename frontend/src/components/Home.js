import slide01 from '../static/slide01.jpeg'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div className="container">
    <h1 style={{marginLeft:'15rem'}} className="display-4">Bienvenue sur Product Management Systeme</h1>
    <p  style={{marginLeft:'15rem'}} className="lead">Il s'agit d'une application front-end développée avec React qui communique avec une API REST Django.</p>
    <p style={{marginLeft:'15rem'}}>Cette application vous permet d'interagir avec un serveur back-end développé avec Django et exposant une API RESTful. Vous pouvez effectuer des opérations CRUD (Create, Read, Update, Delete) sur l'objet "produit", caractérisé par un nom, un prix unitaire et une quantité.</p>
    <p style={{marginLeft:'15rem'}}>Pour commencer, rendez-vous sur la page des produits pour afficher les produits existants, ajouter de nouveaux produits, mettre à jour les détails des produits existants ou supprimer des produits. Toutes ces opérations sont effectuées en envoyant des requêtes HTTP à l'API REST Django.</p>
  </div>
  );
};

export default Home;