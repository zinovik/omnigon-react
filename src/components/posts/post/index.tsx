import React from 'react';
import { object } from 'prop-types';

import { IPost } from '../../../interfaces/IPost.interface';

import './index.css';

export function Post({ post }: {
  post: IPost,
}) {
  const dateTime = new Date(post.created_at);

  const month = dateTime.getMonth() + 1 > 9 ? dateTime.getMonth() + 1 : '0' + dateTime.getMonth() + 1;
  const date = dateTime.getDate() > 9 ? dateTime.getDate() : '0' + dateTime.getDate();
  const year = dateTime.getFullYear() > 9 ? dateTime.getFullYear() : '0' + dateTime.getFullYear();

  const hours = dateTime.getHours() > 9 ? dateTime.getHours() : '0' + dateTime.getHours();
  const minutes = dateTime.getMinutes() > 9 ? dateTime.getMinutes() : '0' + dateTime.getMinutes();
  const seconds = dateTime.getSeconds() > 9 ? dateTime.getSeconds() : '0' + dateTime.getSeconds();
  
  const formattedDate = `${month}/${date}/${year} ${hours}:${minutes}:${seconds}`;

  return (
    <div className='post-container'>

      <div className='post-id'>
        #{post.id}
      </div>

      <div className='post-text'>
        {post.text}
      </div>

      <div className='post-container-created-at-user-name'>
        <div className='post-created-at'>
          {formattedDate}
        </div>
        <div className='post-user-name'>
          {post.user.name}
        </div>
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
