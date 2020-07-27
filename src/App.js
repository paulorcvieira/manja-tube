import React from 'react';
import { Provider } from 'react-redux'
import './App.css';

import store from './store'

import VideoSearchBar from './components/VideoSearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className="title-top">
            Lista de Vídeos
          </div>
          <VideoSearchBar />
          <VideoList />
          <VideoPlayer />
        </div>
      </Provider>
    );
  }
}

export default App;
