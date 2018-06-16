import { ADD_IMAGES, TOGGLE_MODAL, SET_BACKGROUND_IMAGE } from './action-types';

export const addImages = image => ({ type: ADD_IMAGES, payload: image });
export const toggleModal = () => ({ type: TOGGLE_MODAL, payload: null });
export const setBackgroundImage = image => ({ type: SET_BACKGROUND_IMAGE, payload: image });
