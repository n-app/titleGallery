import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import { connect } from 'react-redux';
import { addImages, toggleModal, setBackgroundImage } from '../redux/actions';
import '../../css/titleGallery.css';

// if (!global._babelPolyfill) require('babel-polyfill');

const picUrl = '/headerphotos';

const fetchPics = async (roomId) => {
  // remove this later:
  const newRoomId = roomId >= 1020 ? Math.floor(Math.random() * 20) + 1000 : roomId;
  // *****************

  const composedUrl = `${picUrl}/${newRoomId}`;
  try {
    const response = axios.get(composedUrl);
    return (await response).data;
  } catch (err) {
    throw err;
  }
};

const mapStateToProps = (state) => {
  return {
    images: state.images,
    modalOn: state.modalOn,
    backgroundImage: state.backgroundImage,
    roomId: state.roomId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImages: images => dispatch(addImages(images)),
    toggleModal: () => dispatch(toggleModal()),
    setBackgroundImage: image => dispatch(setBackgroundImage(image)),
  };
};

class ConnectedTitleGallery extends React.Component {
  componentDidMount() {
    this.fetchPics(this.props.roomId);
  }

  fetchPics(roomId) {
    fetchPics(roomId)
      .then((pics) => {
        this.props.addImages(pics.roomImageUrls);
        this.props.setBackgroundImage(pics.roomImageUrls[0].original);
      });
  }

  render() {
    return (
      <div className="title-gallery">
        <div
          className="title-image"
          role="presentation"
          style={{ backgroundImage: `url(${this.props.backgroundImage})` }}
          onClick={this.props.toggleModal}
          onKeyDown={() => {}}
        />
        {
          this.props.modalOn
            ? (
              <div className="image-modal">
                <div className="image-modal-overlay" />
                <button
                  type="text"
                  className="close-image-button"
                  onClick={this.props.toggleModal}
                />
                <div className="gallery-frame">
                  <ImageGallery
                    items={this.props.images}
                    showNav
                    showThumbnails
                    showFullscreenButton={false}
                    showPlayButton={false}
                    showIndex
                    additionalClass="modal-image-gallery"
                  />
                </div>
              </div>
            ) : null
        }
      </div>
    );
  }
}

const TitleGallery = connect(mapStateToProps, mapDispatchToProps)(ConnectedTitleGallery);

ConnectedTitleGallery.propTypes = {
  roomId: PropTypes.number.isRequired,
  addImages: PropTypes.func.isRequired,
  setBackgroundImage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  modalOn: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TitleGallery;
