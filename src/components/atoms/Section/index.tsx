import styled, { css } from 'styled-components';
import { FlexBox, Container } from '@atoms';
import { useResponsive } from '@/hooks/useResponsive';

interface SectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  $bgColor?: string;
  $background?: string;
  $fullHeight?: boolean;
  $variant?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
}

const SectionWrapper = styled(FlexBox)<SectionProps>`
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
    `}
`;

const Section = ({
  children,
  $variant = 'md',
  $fullHeight,
  ...rest
}: React.PropsWithChildren<SectionProps>) => {

  const { breakpoint } = useResponsive();

  const padding = breakpoint === 'desktop' ? '128px 24px' : '96px 24px';

  return (
    <SectionWrapper {...rest}>
      <Container
        $variant={$variant}
        $direction="column"
        $padding={padding}
        $fullHeight={$fullHeight}
      >
        {children}
      </Container>
    </SectionWrapper>
  );
};

export default Section;