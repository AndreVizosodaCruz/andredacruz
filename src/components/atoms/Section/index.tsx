import styled, { css } from 'styled-components';
import { FlexBox, Container } from '@atoms';

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  $bgColor?: string;
  $background?: string;
  $fullHeight?: boolean;
  $padding?: string;
  $variant?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
}

const SectionWrapper = styled(FlexBox) <SectionProps>`
  width: 100%;
  flex-direction: column;

  ${({ $background, $bgColor = 'transparent' }) =>
    $background
      ? css`
          background: ${$background};
        `
      : css`
          background-color: ${$bgColor};
        `}

  ${({ $fullHeight }) =>
    $fullHeight &&
    css`
      min-height: 100vh;
      justify-content: center;
    `}
`;

const Section = ({
  children,
  $variant = 'md',
  $padding = '96px 24px',
  ...rest
}: React.PropsWithChildren<SectionProps>) => {
  return (
    <SectionWrapper {...rest}>
      <Container
        $variant={$variant}
        $direction="column"
        $padding={$padding}
      >
        {children}
      </Container>
    </SectionWrapper>
  );
};

export default Section;