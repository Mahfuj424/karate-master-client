/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Testimonial from '../UserReview/Testimonial';
import { Helmet } from 'react-helmet';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
     return (
          <div>
               <Helmet>
                    <title>KARATE MASTER | HOME</title>
               </Helmet>
               <Banner />
               <PopularClass/>
               <Testimonial/>
          </div>
     );
};

export default Home;