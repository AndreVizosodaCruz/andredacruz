import Reveal from '@animations/Reveal';
import { Button, Section, Heading, MotionBox, Text } from '@atoms';
import useScrollTo from '@/hooks/useScrollTo';

function Hero() {
  const scrollTo = useScrollTo();

  return (
    <Section
      $fullHeight
      $background='linear-gradient(rgb(253, 252, 250), rgb(248, 246, 243))'
    >
      <Reveal>
        <MotionBox
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          $direction='column'
          $gap='16px'
          $align='center'
          $justify='center'
        >
          <MotionBox
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
          >
            <Heading $size='h1' $weight={300}>
              André da Cruz
            </Heading>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
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
      </Reveal>
    </Section>
  )
}

export default Hero