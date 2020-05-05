import React from 'react';

import jogo from '../../assets/jogo.png';
import punk from '../../assets/punk.png';
import rock from '../../assets/rock.png';
import foco from '../../assets/foco.png';
import dailymix1 from '../../assets/dailymix1.png';
import dailymix4 from '../../assets/dailymix4.png';

import {Container, Title, TabsContainer, TabItem, Image, Text} from './styles';

export default function TabListenAgain() {
  return (
    <Container>
      <Title>Escute de novo</Title>
      <TabsContainer>
        <TabItem>
          <Image source={jogo} />
          <Text>Jogo</Text>
        </TabItem>

        <TabItem>
          <Image source={punk} />
          <Text>Punk</Text>
        </TabItem>

        <TabItem>
          <Image source={rock} />
          <Text>Rock</Text>
        </TabItem>

        <TabItem>
          <Image source={foco} />
          <Text>Foco</Text>
        </TabItem>

        <TabItem>
          <Image source={dailymix1} />
          <Text>Daily Mix 1 </Text>
        </TabItem>

        <TabItem>
          <Image source={dailymix4} />
          <Text>Daily Mix 4</Text>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
