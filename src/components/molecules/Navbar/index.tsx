import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollTo from '@/hooks/useScrollTo';
import { Button, FlexBox, Text } from '@/components/atoms';
import useNavbarScroll from '@/hooks/useNavbarScroll';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 980px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 30px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  width: fit-content;
`;

const NavItem = styled(Button)`
  position: relative;
  padding: 8px 20px;
  z-index: 1;
  text-decoration: auto;
  border: none;
  &:hover { 
    transform: none; 
    background-color: white; 
    cursor: pointer 
  }
`;

const HoverBackground = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 999px;
  z-index: -1;
  pointer-events: none;
`;

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'background', label: 'Background' },
  { id: 'contact', label: 'Contact' }
];

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const scrollTo = useScrollTo();
  const hidden = useNavbarScroll();

  return (
    <NavContainer
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, x: '-50%', opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      style={{ pointerEvents: hidden ? 'none' : 'auto', willChange: 'transform, opacity' }}
    >
      <FlexBox $direction="row" $gap="4px" $center>
        {navLinks.map((link) => (
          <NavItem
            key={link.id}
            as="a"
            href={`#${link.id}`}
            $variant="ghost"
            onMouseEnter={() => setHovered(link.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              e.stopPropagation();
              scrollTo(e, link.id);
            }}
          >
            <Text $size='body' $color={hovered === link.id ? 'white' : 'text'}>
              {link.label}
            </Text>
            <AnimatePresence>
              {hovered === link.id && (
                <HoverBackground
                  layoutId="nav-glow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.6
                  }}
                />
              )}
            </AnimatePresence>
          </NavItem>
        ))}
      </FlexBox>
    </NavContainer>
  );
};

export default Navbar;


