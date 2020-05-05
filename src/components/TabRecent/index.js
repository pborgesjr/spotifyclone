import React from 'react';

import musicas2019 from '../../assets/2019.png';
import dailymix1 from '../../assets/dailymix1.png';
import curtidas from '../../assets/curtidas.png';
import eletronica from '../../assets/eletronica.png';
import mpb from '../../assets/mpb.png';
import top50brazil from '../../assets/top50brazil.png';

import {Container, Title, TabsContainer, TabItem, Image, Text} from './styles';

export default function TabRecent() {
  return (
    <Container>
      <Title>Boa tarde</Title>
      <TabsContainer>
        <TabItem>
          <Image source={musicas2019} />
          <Text>As mais tocadas no seu 2019</Text>
        </TabItem>

        <TabItem>
          <Image source={dailymix1} />
          <Text>Daily Mix 1</Text>
        </TabItem>

        <TabItem>
          <Image source={curtidas} />
          <Text>Músicas Curtidas</Text>
        </TabItem>

        <TabItem>
          <Image source={eletronica} />
          <Text>Eletrônica/Dance</Text>
        </TabItem>

        <TabItem>
          <Image source={mpb} />
          <Text>MPB</Text>
        </TabItem>

        <TabItem>
          <Image source={top50brazil} />
          <Text>Top 50 Brazil</Text>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
