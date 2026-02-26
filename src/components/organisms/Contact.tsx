import React from 'react';
import { Section, FlexBox, MotionBox, Text, Button } from '@atoms';
import { Intro } from '@molecules';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useResponsive } from '@/hooks/useResponsive';
import Reveal from '@animations/Reveal';

interface Link {
  icon: string;
  label: string;
  href: string;
  description: string;
}

const StyledContactLink = styled(FlexBox)`
  :hover{
    cursor: pointer;
  }
`;

const IconBox = styled(FlexBox)`
  background-color: rgb(245, 240, 232);
  height: 48px;
  width: 48px;
  min-height: 48px;
  min-width: 48px;
  transition: background-color 0.4s ease-in-out;

  ${StyledContactLink}:hover & {
    background-color: rgb(232, 237, 231);
  }
`;

const IconArrow = styled.img`
  transition: transform 0.4s ease-in-out;

  ${StyledContactLink}:hover & {
    transform: rotate(45deg);
  }
`;

const MotionContactLink = motion.create(StyledContactLink, { forwardMotionProps: true });

function Contact() {

  const { breakpoint } = useResponsive();

  const links = [
    {
      icon: 'assets/linkedin.svg',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/andrevcruz',
      description: 'Let\'s connect professionally',
    },
    {
      icon: 'assets/envelope.svg',
      label: 'Email',
      href: 'mailto:joaoandredcruz@gmail.com',
      description: 'Drop me a message',
    },
    {
      icon: 'assets/github.svg',
      label: 'GitHub',
      href: 'https://github.com/AndreVizosodaCruz',
      description: 'Check out my work',
    },
    {
      icon: 'assets/download.svg',
      label: 'Download CV',
      href: 'assets/AndredaCruz_CV.pdf',
      description: 'Get my full resume',
    },
  ];

  const ContactLink = ({
    icon,
    label,
    href,
    description,
  }: Link) => {
    return (
      <MotionContactLink
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          if (href.startsWith('mailto:')) {
            window.location.href = href;
          } else if (href.toLowerCase().endsWith('.pdf')) {
            const link = document.createElement('a');
            link.href = href;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            window.open(href, '_blank', 'noopener,noreferrer');
          }
        }}
        initial={{ opacity: 0, y: 20, backgroundColor: 'transparent' }}
        whileInView={{ opacity: 1, y: 0, backgroundColor: 'transparent' }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          transition: { type: 'tween', duration: 0.4 },
          cursor: 'pointer',
          backgroundColor: '#f5f5f5'
        }}
        $justify='space-between'
        $align='center'
        $gap='16px'
        $padding='16px'
        $width={breakpoint === 'mobile' ? 'calc(100% - 8px)' : 'calc(50% - 8px)'}
        $minWidth='200px'
        $borderRadius='16px'
      >
        <FlexBox $center $gap='16px'>
          <IconBox
            $align="center"
            $justify="center"
            $borderRadius="50%"
          >
            <img src={icon} alt={label} height={20} width={20} />
          </IconBox>
          <FlexBox $direction="column">
            <Text $color="text" $size="body" $weight={500}>
              {label}
            </Text>
            {description && (
              <Text $color="muted" $size="small">
                {description}
              </Text>
            )}
          </FlexBox>
        </FlexBox>
        <IconArrow src='assets/arrow.svg' alt={label} height={20} width={20} />
      </MotionContactLink>
    )
  }

  return (
    <Section
      $background='linear-gradient(to bottom, #FDFCFA, #f5f5f4)'
      id='contact'
      $variant='sm'
    >
      <Reveal>
        <FlexBox $direction='column' $gap='32px'>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            $center
          >
            <Intro
              caption="Get in Touch"
              title="Let's Start a Conversation"
              titleSize='h2'
              subTitle="Whether you have an idea, an opportunity, or just want to say hi. I'd love to hear from you."
              align="center"
            />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            $bgColor='white'
            $borderRadius='24px'
            $border='1px solid #f5f5f4'
            $boxShadow='0 1px 3px rgba(0, 0, 0, 0.05)'
            $padding='24px'
            $width='100%'
            $direction='column'
            $gap='32px'
          >
            <FlexBox
              $direction='row'
              $gap='8px'
              $wrap='wrap'
            >
              {links.map((link) => (
                <React.Fragment key={link.label}>
                  {ContactLink(link)}
                </React.Fragment>
              ))}
            </FlexBox>
            <FlexBox $borderBottom='1px solid rgb(245, 245, 244)' />
            <FlexBox
              $direction='column'
              $gap='16px'
              $center
            >
              <Text $color="muted" $size="small">
                Prefer a quick intro call?
              </Text>
              <Button $variant='secondary' as='a' href='https://calendly.com/andredcruz/meeting' target='_blank'>
                <Text $color="white" $size="small">
                  Schedule a call
                </Text>
              </Button>
            </FlexBox>
          </MotionBox>
        </FlexBox>
      </Reveal>
    </Section>
  )
}

export default Contact