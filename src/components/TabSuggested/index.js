import React from 'react';

import creedence from '../../assets/creedence.png';
import gta from '../../assets/gta.png';
import lofibeats from '../../assets/lofibeats.png';
import nerdcast from '../../assets/nerdcast.png';
import postmalone from '../../assets/postmalone.png';
import unlikepluto from '../../assets/unlikepluto.png';

import {Container, Title, TabsContainer, TabItem, Image, Text} from './styles';

export default function TabSuggested() {
  return (
    <Container>
      <Title>Com base no que você ouviu recentemente</Title>
      <TabsContainer>
        <TabItem>
          <Image source={creedence} />
          <Text>Creedence Clearwater Revival</Text>
        </TabItem>

        <TabItem>
          <Image source={gta} />
          <Text>GTA San Andreas Soundtrack</Text>
        </TabItem>

        <TabItem>
          <Image source={lofibeats} />
          <Text>Lo-Fi Beats</Text>
        </TabItem>

        <TabItem>
          <Image source={nerdcast} />
          <Text>Nerdcast</Text>
        </TabItem>

        <TabItem>
          <Image source={postmalone} />
          <Text>This Is Post Malone</Text>
        </TabItem>

        <TabItem>
          <Image source={unlikepluto} />
          <Text>Unlike Pluto Rádio</Text>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
