import React from 'react';
import {Animated} from 'react-native';

import Header from '../../components/Header';

import {Container, TabContainer} from './styles';
import TabRecent from '../../components/TabRecent';
import TabMadeForYou from '../../components/TabMadeForYou';
import TabListenAgain from '../../components/TabListenAgain';
import TabSuggested from '../../components/TabSuggested';
import Player from '../../components/Player';

export default function Main() {
  const yDrag = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: yDrag},
        },
      },
    ],
    {useNativeDriver: true},
  );

  return (
    <Container>
      <Header yDrag={yDrag} />
      <TabContainer onScroll={animatedEvent}>
        <TabRecent />
        <TabMadeForYou />
        <TabListenAgain />
        <TabSuggested />
      </TabContainer>
      <Player />
    </Container>
  );
}
