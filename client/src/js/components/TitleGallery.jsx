import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
import ImageGallery from 'react-image-gallery';
import '../../css/titleGallery.css';

const galleryUrl = [
  {
    original: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775',
    thumbnail: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775',
  },
  {
    original: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775',
    thumbnail: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775',
  },
  {
    original: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775',
    thumbnail: 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775',
  },
];

class TitleGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: galleryUrl,
    };
  }

  render() {
    return (
      <ImageGallery items={this.state.images} />
    );
  }
}

export default TitleGallery;
