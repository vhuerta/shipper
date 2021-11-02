import styled from "@emotion/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.background.light};
`;

export const OrderContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
`;

export const DescriptionContainer = styled.View`
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.default};
`;

export const Small = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.text.default};
`;