import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';
import image5 from './image5.jpg';
import image6 from './image6.jpg';

function ImageGrid() {

  
  // Create an array of image URLs, corresponding page links, and descriptions
  const images = [
    {
      image: image2,
      link: '/StudentDashboard',
      description: 'Student Dashboard',
    },
    {
      image: image3,
      link: '/AdminDashboard',
      description: 'Admin Dashboard',
    },
    {
      image: image5,
      link: '/ProgramCoordinatorDashboard',
      description: 'Program Coordinator Dashboard',
    },
    {
      image: image6,
      link: '/InstructorDashboard',
      description: 'Instructor Dashboard',
    },
    {
      image: image4,
      link: '/QAOfficerDashboard',
      description: 'Quality Assurance Officer Dashboard',
    },
  ]

  return (
    <div className="image-grid">
      {images.map((item, index) => (
        <div key={index} className="image-item">
          <Link to={item.link}>
            <img
              src={item.image}
              alt={item.description}
              className="grid-image"
              style={{ width: '200px', height: '200px' }} // Set fixed width and height
            />
            <p className="image-description">{item.description}</p>
          </Link>
        </div>
        
      ))}
    </div>
  
  );
 
}

export default ImageGrid;
