import { Text } from '@/components/atoms';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 32px 24px;
  background-color: rgb(245, 245, 244);
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Text $size="small" $color='muted' $align='center'>
        © {currentYear} André da Cruz.
      </Text>
    </StyledFooter>
  );
}