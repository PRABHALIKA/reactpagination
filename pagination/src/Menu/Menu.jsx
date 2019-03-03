import "./Menu.css";
import React from "react";
import { HashRouter, Route } from 'react-router-dom';
import Users from '../Users/Users';
import Posts from '../Posts/Posts';
import Photos from '../Photos/Photos';

function template() {
  return (
    <div className="menu">
      <HashRouter>
        <div>
          <div className="tabs" onClick={this.fnMenuClick.bind(this)}>
            <a id="users" href="#/users">USERS</a>
            <a id="posts" href="#/posts">POSTS</a>
            <a id="phots" href="#/phots">PHOTOS</a>
          </div>
          <div className="content">
          <Route path="/" exact component={Users} />

          <Route path="/users"  component={Users} />
          <Route path="/posts"  component={Posts} />
          <Route path="/phots"  component={Photos} />
          </div>
        </div>
      </HashRouter>

    </div>
  );
};

export default template;
