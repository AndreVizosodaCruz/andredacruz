import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface Props {
  $direction?: 'row' | 'column';
  $justify?: string;
  $align?: string;
  $gap?: string;
  $wrap?: string;
  $center?: boolean;
  $full?: boolean;
  $minHeight?: string;
  $height?: string;
  $bgColor?: string;
  $margin?: string;
  $padding?: string;
  $borderRadius?: string;
  $border?: string;
  $borderBottom?: string;
  $boxShadow?: string;
  $width?: string;
  $maxWidth?: string;
  $minWidth?: string;
  $position?: string;
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $zIndex?: number;
  $flex?: number;
  $background?: string;
  $filter?: string;
  $transform?: string;
}

const FlexBox = styled('div')<Props>`
  position: ${({ $position }) => $position || 'relative'};
  top: ${({ $top }) => $top || 'unset'};
  right: ${({ $right }) => $right || 'unset'};
  bottom: ${({ $bottom }) => $bottom || 'unset'};
  left: ${({ $left }) => $left || 'unset'};
  display: flex;
  flex-direction: ${({ $direction = 'row' }) => $direction};
  justify-content: ${({ $center, $justify }) =>
    $center ? 'center' : $justify || 'flex-start'};
  align-items: ${({ $center, $align }) =>
    $center ? 'center' : $align || 'stretch'};
  gap: ${({ $gap }) => $gap || '0'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
  height: ${({ $height }) => $height || 'auto'};
  min-height: ${({ $minHeight }) => $minHeight || 'auto'};
  background-color: ${({ $bgColor }) => $bgColor || 'inherit'};
  background: ${({ $background }) => $background};
  margin: ${({ $margin }) => $margin || '0'};
  padding: ${({ $padding }) => $padding || '0'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
  border: ${({ $border }) => $border || 'unset'};
  border-bottom: ${({ $borderBottom }) => $borderBottom || ''};
  box-shadow: ${({ $boxShadow }) => $boxShadow || 'unset'};
  width: ${({ $width }) => $width || 'auto'};
  max-width: ${({ $maxWidth }) => $maxWidth || '100%'};
  min-width: ${({ $minWidth }) => $minWidth || 'unset'};
  z-index: ${({ $zIndex }) => $zIndex || 1};
  flex: ${({ $flex }) => $flex || 'unset'};
  filter: ${({ $filter }) => $filter || 'none'};
  transform: ${({ $transform }) => $transform || 'none'};;
  text-decoration: none;
  color: inherit; 
  ${({ $full }) =>
    $full &&
    css`
      width: 100%;
    `}
`;

const MotionBox = motion.create(FlexBox);

export { FlexBox, MotionBox };
