import styled, { css } from 'styled-components';

type Variant = 'primary' | 'secondary' | 'ghost';

interface Props {
  $variant?: Variant;
  $full?: boolean;
}

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent};
    color: white;
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.borderLight};
  `
};

const Button = styled.button<Props>`
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  border-radius: 999px;
  padding: 16px 32px;
  text-decoration: none;
  display: inline-flex;
  transition: all 0.4s ease-in-out;

  ${({ $variant = 'primary' }) => variantStyles[$variant]}

  ${({ $full }) =>
    $full &&
    css`
      width: 100%;
    `}

  &:hover {
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default Button;
