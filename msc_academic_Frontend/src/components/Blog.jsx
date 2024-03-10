import React from 'react';
import imageurl from './imageurl.jpg';

function Blog() {
  const imageUrl = 'https://dxp2913.uta.cloud/web7/uncategorized/blog-for-msc-academic-program-performance-system/'; // Replace with the URL you want to link to

  return (
    <div>
      <center><h2>Blog Post</h2>
      <p>Blog Content goes here... Click on Image</p></center>
      <a href={imageUrl} target="_blank" rel="noopener noreferrer">
        <img src={imageurl} alt="Blog Post" className="centered-image" />
      </a>
    </div>
  );
}

export default Blog;
