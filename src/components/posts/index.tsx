import React from 'react';
import { array } from 'prop-types';

import { Post } from './post';
import { IPost } from '../../interfaces/IPost.interface';

import './index.css';

export function Posts({ posts }: {
  posts: IPost[],
}) {
  return (
    <div className='posts-container'>
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
}

Posts.propTypes = {
  posts: array.isRequired,
};

Posts.defaultProps = {
  posts: [],
};
