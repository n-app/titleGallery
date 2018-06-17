import { ADD_IMAGES, TOGGLE_MODAL, SET_BACKGROUND_IMAGE } from './action-types';

const initialState = {
  images: [],
  backgroundImage: '',
  modalOn: false,
  roomId: Math.floor(Math.random() * 100) + 1000,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGES:
      return { ...state, images: action.payload };
    case TOGGLE_MODAL:
      return { ...state, modalOn: !state.modalOn };
    case SET_BACKGROUND_IMAGE:
      return { ...state, backgroundImage: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
