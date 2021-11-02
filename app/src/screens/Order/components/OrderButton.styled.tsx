import styled from '@emotion/native';
import { Text } from 'react-native';

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 45px;
`;

export const Badge = styled.View`
  align-items: center;
  justify-content: center;
  min-width: 18px;
  padding: 0 5px;
  height: 18px;
  border-radius: 18px;
  background-color: ${({ theme }) => theme.text.primary};
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const BadgeText = styled(Text)`
  color: ${({ theme }) => theme.text.default};
  font-size: 12px;
`;
