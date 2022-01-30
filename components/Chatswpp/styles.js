import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

export const Container = styled.View`
`;

export const Box = styled.TouchableOpacity`
  flex-direction: row;

  height: 50px;
  background-color: #fff;

  border-width:0.5px;
  border-color: #cecece;

  padding: 15px;
  align-items: center;
  justify-content: space-between;
`;

export const BoxLeft = styled.View`
  flex-direction: row;

  align-items: center;

`;

export const ViewIcon = styled.View`
  height: 30px;
  width: 30px;

  background-color: #47d464;

  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const PrincipalIcon = styled(FontAwesome).attrs({
  name: "whatsapp",
  size: 20,
  color: '#fff',
})`

`;

export const BoxName = styled.Text`
  font-size: 16px;
  height: 24px;
  margin-left: 10px;
`;

export const ArrowIcon = styled(FontAwesome).attrs({
  name: 'angle-right',
  size: 24,
  color: '#c1c1c1',
})`

`;
