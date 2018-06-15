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

const backgroundImage = 'https://cdn.shopify.com/s/files/1/1422/8040/articles/living_720x720.jpeg?v=1487855775';

class TitleGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: galleryUrl,
      modalOn: false,
      backgroundImage,
    };
  }

  render() {
    return (
      <div className="title-gallery">
        <div
          className="title-image"
          role="presentation"
          style={{ backgroundImage: `url(${this.state.backgroundImage})` }}
          onClick={() => { this.setState({ modalOn: true }); }}
          onKeyDown={() => {}}
        />
        {
          this.state.modalOn
            ? (
              <div className="image-modal">
                <div className="image-modal-overlay" />
                <button
                  className="close-image-button"
                  onClick={() => { this.setState({ modalOn: false }); }}
                />
                <div className="gallery-frame">
                  <ImageGallery
                    items={this.state.images}
                    showNav
                    showThumbnails
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showIndex
                    additionalClass="modal-image-gallery"
                  />`
                </div>
              </div>
            ) : null
        }
      </div>
    );
  }
}

export default TitleGallery;
