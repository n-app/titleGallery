import React from 'react';
// import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import '../../css/titleGallery.css';

const picUrl = '/headerphotos';


const fetchPics = async (roomId) => {
  // remove this later:
  const newRoomId = roomId >= 1020 ? 1019 : roomId;
  // *****************

  const composedUrl = `${picUrl}/${newRoomId}`;
  try {
    const response = axios.get(composedUrl);
    return (await response).data;
  } catch (err) {
    throw err;
  }
};

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


// redux props should have 'roomId', 'images', 'backgroundImage'
class TitleGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // change this later:
      images: galleryUrl,
      backgroundImage,
      roomId: Math.floor(Math.random() * 100) + 1000,
      // ******************
      modalOn: false,
    };
  }

  componentDidMount() {
    this.fetchPics(this.state.roomId);
  }

  fetchPics(roomId) {
    fetchPics(roomId)
      .then((pics) => {
        this.setState({
          images: pics.images,
          backgroundImage: pics.backgroundImage,
        });
      });
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
