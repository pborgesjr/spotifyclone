import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container, MusicContainer, Music} from './styles';

export default function Player() {
  const songName =
    'Take What You Want (feat. Ozzy Osbourne & Travis Scott) - Post Malone';
  return (
    <Container>
      <Icon name="chevron-up" size={30} color="#fff" />
      <MusicContainer>
        <Music>{songName}</Music>
      </MusicContainer>
      <Icon name="play-circle-outline" size={30} color="#fff" />
    </Container>
  );
}
