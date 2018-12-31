import React, { Component } from 'react';
import CreatePost from './containers/CreatePost';
import PostList from './containers/PostList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const stylesApp = {
  marginTop: 45
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={ stylesApp }>
          <div className="col-12 col-sm-12 col-md-6">
            <CreatePost />
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;