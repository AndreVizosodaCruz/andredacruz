import styled, { css } from 'styled-components';
import { FlexBox } from '@atoms';

const containerWidths = {
  xs: '768px',
  sm: '962px',
  md: '1156px',
  lg: '1352px',
  full: '1680px'
};

interface ContainerProps {
  $variant?: keyof typeof containerWidths;
  $fullHeight?: boolean;
}

const Container = styled(FlexBox) <ContainerProps>`
  margin-left: auto;
  margin-right: auto;
  
  width: ${({ $variant = 'md' }) => containerWidths[$variant]};
  max-width: 100%;
  padding: clamp(56px, 8vw, 128px) 24px;

  ${({ $fullHeight }) =>
    $fullHeight
      ? css`
          height: 100vh;
          padding-top: 0;
          padding-bottom: 0;
        `
      : css`
          height: auto;
        `}
`;

export default Container;