import React, { Component } from 'react';

import './App.css';
import { Posts } from './components/posts';
import { IPost } from './interfaces/IPost.interface';
import { getPosts } from './services/mass-relevance';

interface IState {
  posts: IPost[];
}

class App extends Component<{}, IState> {

  state: IState = {
    posts: [],
  };

  loadPosts = async () => {
    const posts = await getPosts();
    this.setState({ posts });
  };

  constructor(props: any) {
    super(props);
    this.loadPosts();
  }

  render() {
    const { posts } = this.state;

    return (
      <div className='App'>
        <Posts posts={posts} />
      </div>
    );
  }
}

export default App;
