import React from 'react';
import { array } from 'prop-types';

import { Post } from './post';
import { IPost } from '../../interfaces/IPost.interface';

export function Posts({ posts }: {
  posts: IPost[],
}) {
  return (
    <div>
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
