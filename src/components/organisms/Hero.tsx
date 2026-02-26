import Reveal from '@animations/Reveal';
import { Button, Section, Heading, MotionBox, Text, FlexBox } from '@atoms';
import useScrollTo from '@/hooks/useScrollTo';

function Hero() {
  const scrollTo = useScrollTo();

  return (
    <Section
      $fullHeight
      $background='linear-gradient(rgb(253, 252, 250), rgb(248, 246, 243))'
    >
      <MotionBox
        $position="absolute"
        $top="-80px"
        $right="40px"
        $width="256px"
        $height="256px"
        $bgColor='rgb(245, 230, 224)'
        $borderRadius="50%"
        $filter="blur(48px)"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionBox
        $position="absolute"
        $top="20%"
        $left="40px"
        $width="192px"
        $height="192px"
        $bgColor='rgb(232, 237, 231)'
        $borderRadius="50%"
        $filter="blur(48px)"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <MotionBox
        $position="absolute"
        $bottom="25%"
        $left="40%"
        $width="128px"
        $height="128px"
        $bgColor='rgb(245, 230, 224)'
        $borderRadius="50%"
        $filter="blur(32px)"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <MotionBox
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        $direction='column'
        $gap='16px'
        $align='center'
        $justify='center'
        $height='100%'
      >
        <MotionBox
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
        >
          <Heading $size='h1' $weight={300}>
            André da Cruz
          </Heading>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          $direction='column'
          $gap='16px'
          $align='center'
          $justify='center'
        >
          <Text $size='bodyBig' $weight={300} $maxWidth='672px' $align='center'>
            Building meaningful products and partnerships
          </Text>

          <Text $size='body' $maxWidth='576px' $lineHeight={1.7} $align='center'>
            Senior Frontend Engineer with 8+ years building scalable, high-performance web applications. Now focused on leadership, strategy, and meaningful partnerships.
          </Text>
          <Text $size='caption' $color='muted' $align='center'>
            Based in Aveiro, Portugal • Open to remote opportunities worldwide
          </Text>
        </MotionBox>

        <MotionBox
          $direction='row'
          $gap='12px'
          $wrap='wrap'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          $margin='16px 0 0 0'
        >
          <Button $variant='secondary' as='a' href='#contact' onClick={(e) => scrollTo(e, 'contact')}>
            <Text $size='body' $color='white'>
              Let's Connect
            </Text>
          </Button>
          <Button $variant='ghost' as='a' href='#about' onClick={(e) => scrollTo(e, 'about')}>
            <Text $size='body' $color='text' >
              Learn More
            </Text>
          </Button>
        </MotionBox>
      </MotionBox>

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        $position='absolute'
        $bottom='10%'
        $left='50%'
        $transform='translateX(-50%)'
        $padding='8px 8px 8px 8px'
        $height='48px'
        $width='28px'
        $border='1px solid #818791'
        $borderRadius='999px'
        $justify='center'
      >
        <MotionBox
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FlexBox
            $border='1px solid #1C1917'
            $bgColor='#1C1917'
            $borderRadius='999px'
            $height='8px'
            $width='4px'
          />
        </MotionBox>
      </MotionBox>
    </Section >
  )
}

export default Hero