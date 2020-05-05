import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Container} from './styles';

export default function Header({yDrag}) {
  return (
    <Container
      style={{
        opacity: yDrag.interpolate({
          inputRange: [1, 80],
          outputRange: [1, 0],
        }),
      }}>
      <Icon name="settings-outline" size={30} color="#fff" />
    </Container>
  );
}
