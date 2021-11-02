import styled from "@emotion/native";

export const Title = styled.Text`
  font-size: 32px;
  color: ${({ theme }) => theme.text.default};
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text.default};
`;

export const SubtitleBold = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.text.primary};
`;
