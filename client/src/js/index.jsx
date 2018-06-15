// client/src/js/index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import TitleSearch from './components/TitleSearch';
import TitleGallery from './components/TitleGallery';

ReactDOM.render(<TitleSearch />, document.getElementById('titleSearch'));
ReactDOM.render(<TitleGallery />, document.getElementById('titleGallery'));
