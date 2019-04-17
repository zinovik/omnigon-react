import React from 'react';
import { object } from 'prop-types';

import { IPost } from '../../../interfaces/IPost.interface';

export function Post({ post }: {
  post: IPost,
}) {
  return (
    <div>
      <div>
        {post.created_at}
      </div>
      <div>
        {post.id}
      </div>
      <div>
        {post.user}
      </div>
    </div>
  );
}

Post.propTypes = {
  post: object,
};

Post.defaultProps = {
  post: {},
};
