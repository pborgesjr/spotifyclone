import styled from 'styled-components/native';
import TextTicker from 'react-native-text-ticker';

export const Container = styled.View`
  height: 55px;
  background: #101010;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const MusicContainer = styled.View`
  width: 250px;
`;

export const Music = styled(TextTicker).attrs({
  duration: 15000,
  loop: true,
  bounce: false,
})`
  color: #fff;
  font-size: 15px;
`;
