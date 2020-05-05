import React from 'react';

import dailymix1 from '../../assets/dailymix1.png';
import dailymix2 from '../../assets/dailymix2.png';
import dailymix3 from '../../assets/dailymix3.png';
import dailymix4 from '../../assets/dailymix4.png';
import familymix from '../../assets/familymix.png';
import radar from '../../assets/radar.png';

import {Container, Title, TabsContainer, TabItem, Image, Text} from './styles';

export default function TabMadeForYou() {
  return (
    <Container>
      <Title>Feito para você</Title>
      <TabsContainer>
        <TabItem>
          <Image source={dailymix1} />
          <Text>Daily Mix 1</Text>
        </TabItem>

        <TabItem>
          <Image source={dailymix2} />
          <Text>Daily Mix 2</Text>
        </TabItem>

        <TabItem>
          <Image source={dailymix3} />
          <Text>Daily Mix 3</Text>
        </TabItem>

        <TabItem>
          <Image source={dailymix4} />
          <Text>Daily Mix 4</Text>
        </TabItem>

        <TabItem>
          <Image source={radar} />
          <Text>Radar de Novidades</Text>
        </TabItem>

        <TabItem>
          <Image source={familymix} />
          <Text>Family Mix</Text>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
