import React from 'react';
import Navbar from '../components/navbar';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-10 offset-md-1'>
            <h1 className='text-center mb-5'>Crafting Unforgettable Spaces</h1>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77du9hTSTeSvTrpvGFYjQt1N9-YppAzVzXTkuR5xfaQ&s' alt='Showroom' className='img-fluid rounded-circle mb-5' />
            <p>
              At [SR COLLECTIONS], we believe that every space tells a story. We are not just a showroom; we are
              storytellers, artisans, and curators of exquisite home furnishings.
            </p>
            <p>
              Our journey began [ 5 years ago] with a vision to transform ordinary spaces into extraordinary sanctuaries.
              With a blend of passion, craftsmanship, and innovation, we've curated collections that resonate with
              elegance and functionality.
            </p>
            <p>
              Nestled in the heart of [Hyderabad], our showroom is more than just a retail space. It's a place where
              inspiration meets innovation, where dreams are crafted into reality.
            </p>
            <h2 className='mt-5'>Craftsmanship & Quality</h2>
            <p>
              We pride ourselves on offering products that are crafted with precision and attention to detail.
              Each piece in our collection reflects our commitment to quality and durability.
            </p>
            <h2 className='mt-5'>Sustainability</h2>
            <p>
              We are committed to sustainable practices and offer eco-friendly options without compromising on style
              or quality. By choosing [Your Showroom Name], you're making a choice for a greener future.
            </p>
            <h2 className='mt-5'>Join Our Journey</h2>
            <p>
              We invite you to explore our curated collections, discover unique pieces that speak to your soul,
              and embark on a journey of transforming your space into a masterpiece.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
