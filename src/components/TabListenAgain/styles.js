import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  padding-left: 15px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  width: 120px;
  margin-right: 20px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
