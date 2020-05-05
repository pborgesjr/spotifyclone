import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: black;
  justify-content: space-between;
`;

export const TabContainer = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  position: absolute;
  height: 100%;
`;
