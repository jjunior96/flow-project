import React from 'react';
import PropTypes from 'prop-types';
import {
  PostItemContainer,
  PostItemInfo,
  PostItemTitle,
  PostItemDesc,
} from './styled';

const PostItem = ({ link, avatar, name, responsibility }) => {
  return (
    <PostItemContainer>
      <h1>{name}</h1>
      <span>{responsibility}</span>
      <small>{avatar}</small>
    </PostItemContainer>
  );
};

PostItem.propTypes = {
  link: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  responsibility: PropTypes.string.isRequired,
};
export default PostItem;
