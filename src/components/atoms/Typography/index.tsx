import { ThemeType } from '@/styles/theme';
import styled, { css } from 'styled-components';

interface TextProps {
  $color?: keyof ThemeType['colors'];
  $size?: keyof ThemeType['fontSizes'];
  $weight?: 300 | 400 | 500 | 600 | 700;
  $align?: 'left' | 'center' | 'right';
  $gutter?: keyof ThemeType['spacing'];
  $maxWidth?: string;
  $lineHeight?: number;
  $textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  $textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}

const baseStyles = css<TextProps>`
  text-align: ${({ $align }) => $align || 'left'};
  color: ${({ theme, $color }) => ($color ? theme.colors[$color] : theme.colors.text)};
  margin-bottom: ${({ theme, $gutter }) => ($gutter ? theme.spacing[$gutter] : '0')};
  transition: color 0.2s ease-in-out;
  max-width: ${({ $maxWidth }) => $maxWidth ||  '100%'};
  line-height: ${({ $lineHeight }) => $lineHeight ||  'normal'};
  text-decoration: ${({ $textDecoration }) => $textDecoration ||  'none'};
  text-transform: ${({ $textTransform }) => $textTransform ||  'none'};
`;
const baseHeadingStyles = css<TextProps>`
  ${baseStyles}
  font-size: ${({ theme, $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.h1)};
  font-weight: ${({ $weight }) => $weight || 700};
  line-height: ${({ $lineHeight }) => $lineHeight || 1.1};
  letter-spacing: -0.02em;
`;

const StyledH1 = styled.h1<TextProps>`${baseHeadingStyles}`;
const StyledH2 = styled.h2<TextProps>`${baseHeadingStyles}`;
const StyledH3 = styled.h3<TextProps>`${baseHeadingStyles}`;

export const Heading = ({ $size, ...props }: TextProps & { children: React.ReactNode }) => {
  switch ($size) {
    case 'h2':
      return <StyledH2 $size={$size} {...props} />;
    case 'h3':
      return <StyledH3 $size={$size} {...props} />;
    default:
      return <StyledH1 $size={$size} {...props} />;
  }
};

export const Text = styled.p<TextProps>`
  ${baseStyles}
  font-size: ${({ theme, $size }) => ($size ? theme.fontSizes[$size] : theme.fontSizes.body)};
  font-weight: ${({ $weight }) => $weight || 400};
  line-height: 1.6;
`;