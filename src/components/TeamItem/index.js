import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
  TeamItemContainer,
  TeamName,
  TeamResponsibility,
  TeamBio,
  TeamAvatar,
  PostItemLink,
} from './styled';
import api from '../../services/api';

const PostItem = ({ link, avatar, name, responsibility }) => {
  const [dev, setDev] = useState({});

  const loadDev = useCallback(async () => {
    const {
      data: { avatar_url, bio },
    } = await api.get(`${avatar}`);

    setDev({
      avatar: avatar_url,
      bio,
    });
  });

  useEffect(() => {
    loadDev();
    console.log(dev);
  }, []);
  return (
    <TeamItemContainer>
      <PostItemLink>
        <TeamAvatar src={dev.avatar} alt="Perfil" />
        <TeamName>{name}</TeamName>
      </PostItemLink>

      <TeamResponsibility>{responsibility}</TeamResponsibility>
      <TeamBio>{dev.bio}</TeamBio>
    </TeamItemContainer>
  );
};

PostItem.propTypes = {
  link: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  responsibility: PropTypes.string.isRequired,
};
export default PostItem;
