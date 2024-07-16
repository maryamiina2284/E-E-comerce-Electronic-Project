import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockProducts from '../pages/mockProducts';

const featuredProducts = mockProducts.slice(0, 9); // Adjust as needed

const Home = () => {
  return (
    <div className="container my-5">
      <header className="jumbotron text-center">
        <h1 className="display-4">Welcome to Our Electronics Store!</h1>
        <p className="lead">Find the best electronics products here.</p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Shop Now
        </Link>
      </header>

      <h2 className="mb-4">Featured Products</h2>
      <div className="row">
        {featuredProducts.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" width={100} height={200} alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>${product.price.toFixed(2)}</strong></p>
                <Link to={`/product/${product.id}`} className="btn btn-secondary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;



// import React from 'react';
// import { Link } from 'react-router-dom';
// // import Header from '/'
// import 'bootstrap/dist/css/bootstrap.min.css';
// // Import images


// // Mock data for featured products
// const featuredProducts = [
//   {
//     id: 1,
//     name: 'Smartphone X',
//     price: 999.99,
//     description: 'Latest model with advanced features.',
//     image: require('../assets/Smartphone X.jpeg'),
//   },
//   {
//     id: 2,
//     name: 'Laptop Pro',
//     price: 1299.99,
//     description: 'High performance laptop.',
//     image: require('../assets/Laptop Pro.jpeg'),
//   },
//   {
//     id: 3,
//     name: 'Wireless Earbuds',
//     price: 199.99,
//     description: 'Noise-cancelling earbuds with long battery life.',
//     image: require('../assets/Wireless Earbuds.jpeg'),
//   },
//   {
//     id: 4,
//     name: 'Samsung Galaxy S24 Ultra',
//     price: 199.99,
//     description: 'Noise-cancelling earbuds with long battery life.',
//     image: require('../assets/SamsungGalaxyS24.jpg'),
//   },
//   {
//     id: 5,
//     name: 'Smart Watch',
//     price: 299.99,
//     description: 'Stay connected with this stylish smart watch.',
//     image: require('../assets/Smart Watch.jpeg'),
//   },
//   {
//     id: 6,
//     name: 'Bluetooth Speaker',
//     price: 99.99,
//     description: 'Portable speaker with excellent sound quality.',
//     image: require('../assets/Bluetooth Speaker.jpeg'),
//   },
//   {
//     id: 7,
//     name: 'Gaming Console',
//     price: 499.99,
//     description: 'Next-gen console for immersive gaming experiences.',
//     image: require('../assets/Gaming Console.jpeg'),
//   },
//   {
//     id: 8,
//     name: 'Digital Camera',
//     price: 599.99,
//     description: 'Capture your moments with high precision.',
//     image: require('../assets/Digital Camera.jpeg'),
//   },
//   {
//     id: 9,
//     name: 'Drone',
//     price: 899.99,
//     description: 'High-performance drone for aerial photography.',
//     image: require('../assets/Drone.jpeg'),
//   },
//   {
//     id: 10,
//     name: 'VR Headset',
//     price: 399.99,
//     description: 'Experience virtual reality with this VR headset.',
//     image: require('../assets/VR Headset.jpeg'),
//   },
//   {
//     id: 11,
//     name: '4K OLED TV',
//     price: 1499.99,
//     description: 'Ultra HD TV with stunning picture quality.',
//     image: require('../assets/OLED TV.jpeg'),
//   },
//   {
//     id: 12,
//     name: 'All Devices ',
//     price: 1499.99,
//     description: 'All Devices with stunning picture quality.',
//     image: require('../assets/product1.jpeg'),
//   },
// ]

// const Home = () => {
//   return (
//     <div className="container mt-4">
//       <header className="jumbotron text-center">
//         <h1 className="display-4">Welcome to Our Electronics Store!</h1>
//         <p className="lead">Find the best electronics products here.</p>
//         <Link to="/products" className="btn btn-primary btn-lg">
//           Shop Now
//         </Link>
//       </header>

//       <h2 className="mb-4">Featured Products</h2>
//       <div className="row">
//         {featuredProducts.map(product => (
//           <div className="col-md-4" key={product.id}>
//             <div className="card mb-4">
//               <img src={product.image} className="card-img-top" width={100} height={200} alt={product.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">{product.description}</p>
//                 <p className="card-text"><strong>${product.price.toFixed(2)}</strong></p>
//                 <Link to={`/products`} className="btn btn-primary">
//                   View Products
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Home;





