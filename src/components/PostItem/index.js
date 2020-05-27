import React from 'react';
import PropTypes from 'prop-types';
import {
  PostItemLink,
  PostItemContainer,
  PostItemIcon,
  PostItemInfo,
  PostItemDate,
  PostItemTitle,
  PostItemDesc,
} from './styled';

const PostItem = ({
  link,
  background,
  category,
  date,
  timeRead,
  title,
  description,
}) => (
  <PostItemLink to={link}>
    <PostItemContainer>
      <PostItemIcon background={background}>{category}</PostItemIcon>
      <PostItemInfo>
        <PostItemDate>
          {date} • {timeRead} min de leitura
        </PostItemDate>
        <PostItemTitle>{title}</PostItemTitle>
        <PostItemDesc>{description}</PostItemDesc>
      </PostItemInfo>
    </PostItemContainer>
  </PostItemLink>
);
PostItem.propTypes = {
  link: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  background: PropTypes.string,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeRead: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default PostItem;
