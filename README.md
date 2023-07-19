# Product Management System

Product Management System is a web application built using ReactJS and Django. It provides a user-friendly interface to manage product data, including creating, updating, deleting, and searching products. The application utilizes a RESTful API architecture for seamless communication between the front-end and back-end.

## Features

- View a list of products with details such as name, unit price, and quantity.
- Add new products to the system by providing the necessary information.
- Update existing product details, including name, unit price, and quantity.
- Delete products from the system.
- Search for specific products using search terms.

## Technologies Used

- ReactJS: A JavaScript library for building user interfaces, providing a reactive and component-based approach.
- Django: A high-level Python web framework that follows the model-view-controller (MVC) architectural pattern.
- Django REST Framework: A powerful and flexible toolkit for building Web APIs in Django.
- Axios: A popular JavaScript library for making HTTP requests from the front-end to the back-end API.
- Bootstrap: A responsive and mobile-first CSS framework for styling the application.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it from [https://nodejs.org](https://nodejs.org).

### Installation

1. Clone the repository:
git clone https://github.com/your-username/product-management-system.git

Verify if node and npm are installed
  ```
  node --version
  npm -version
  ```

2. Navigate to the project directory:
cd product-management-system


### Backend Configuration
To configure the Django backend, follow these steps:


1. Create a virtual environment:

python3 -m venv venv


2. Activate the virtual environment:

- For Windows:
    ```
    venv\Scripts\activate
    ```

- For macOS/Linux:
    ```
    source venv/bin/activate
    ```

3. Install the Python dependencies:
pip install -r requirements.txt

4. Start the Django development server:
python manage.py runserver


5. The Django API will be accessible at [http://localhost:8000](http://localhost:8000).

### Frontend Configuration

1.navigate to frontend directory
 cd frontend

2.Install frontend libraries using npm
npm install

3.Start Node server
npm start
## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create a new issue or submit a pull request.

## Acknowledgements

- The ReactJS team for providing an excellent library for building user interfaces.
- The Django team for creating a powerful and flexible web framework.
- The open-source community for developing and maintaining the necessary dependencies.
