import { useResponsive } from '@/hooks/useResponsive';
import Reveal from '@animations/Reveal';
import { FlexBox, MotionBox, Text, Heading, Section } from '@atoms';

function About() {

  const { breakpoint } = useResponsive();

  const myValues = [
    {
      icon: 'assets/people.svg',
      title: 'People First',
      description: 'Great products start with great teams. I believe in empowering people and fostering collaboration.',
      color: '#E8EDE7',
    },
    {
      icon: 'assets/idea.svg',
      title: 'Strategic Vision',
      description: 'Looking beyond code to understand business needs, user problems, and market opportunities.',
      color: '#F5E6E0',
    },
    {
      icon: 'assets/world.svg',
      title: 'Global Mindset',
      description: 'Experienced in remote collaboration across time zones and cultures. Adaptable and communicative.',
      color: '#F5F0E8',
    },
    {
      icon: 'assets/heart.svg',
      title: 'Passion for Quality',
      description: 'Committed to excellence in everything—from user experience to team dynamics.',
      color: '#EDE8F0',
    },
  ];

  return (
    <Section
      id='about'
      $variant='full'
      $bgColor='rgb(255, 255, 255)'
    >
      <Reveal>
        <FlexBox
          $direction='column'
          $gap={breakpoint === 'desktop' ? '48px' : '64px'}
        >
          <FlexBox
            $direction={breakpoint === 'desktop' ? 'row' : 'column'}
            $gap='32px'
          >
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              $direction='column'
              $gap='16px'
              $flex={1}
            >
              <Text $size='caption' $color='accent' $textTransform='uppercase'>
                About Me
              </Text>
              <Heading $size='h2' $color='text' $weight={300}>
                More than a developer
              </Heading>
              <Text $size='body' $color='secondary'>
                I'm André da Cruz, a Senior Frontend Engineer based in Aveiro, Portugal, with over 8 years
                building scalable, high-performance web applications. Expert in React, TypeScript,
                and modern frontend tooling with a proven track record of leading teams and
                architecting reusable component libraries.
              </Text>
              <Text $size='body' $color='secondary'>
                Having co-founded a startup and led frontend teams at companies Erakulis,
                I've learned that great products come from great partnerships. I'm now seeking meaningful
                collaborations—whether as a co-founder, advisor, or simply connecting with like-minded builders.
              </Text>
              <Text $size='body' $color='muted'>
                Fluent in Portuguese, Spanish, and English. Open to conversations worldwide.
              </Text>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              $width={breakpoint === 'mobile' ? '100%' : '250px'}
              $background='linear-gradient(to right bottom, rgb(232, 237, 231), rgb(245, 240, 232), rgb(245, 230, 224))'
              $padding='32px'
              $borderRadius='24px'
              $center
              $gap='8px'
              $direction='column'
              $minHeight={breakpoint === 'desktop' ? 'unset' : '250px'}
            >
              <Heading $size='h2' $weight={300}>
                8 +
              </Heading>
              <Text $size='small' $weight={400} $textTransform='uppercase' $color='muted'>
                Years of experience
              </Text>
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                $borderRadius='16px'
                $padding='16px'
                $border='1px solid #f5f5f4'
                $boxShadow='rgba(0, 0, 0, 0.1) 0px 10px 40px -10px'
                $position='absolute'
                $bottom='-24px'
                $right='-24px'
                $bgColor='white'
                $zIndex={1}
                $direction='column'
              >
                <Heading $size='h3' $weight={500}>
                  ∞
                </Heading>
                <Text $size='caption' $weight={400} $color='muted'>
                  Ideas to explore
                </Text>
              </MotionBox>
            </MotionBox>
          </FlexBox>

          <MotionBox
            $gap='16px'
            $wrap='wrap'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {myValues.map((value, index) => (
              <MotionBox
                key={index}
                $direction='column'
                $width={breakpoint === 'mobile' ? '100%' : 'calc(25% - 16px)'}
                $minWidth='240px'
                $borderRadius='16px'
                $border='1px solid rgb(245, 245, 244)'
                $padding={breakpoint === 'desktop' ? '32px' : '24px'}
                $gap='16px'
                $center
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.4
                  }
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -6,
                  boxShadow: `0 20px 40px -15px rgba(0,0,0,0.5)`,
                  cursor: 'pointer',
                  transition: {
                    delay: 0,
                    duration: 0.4,
                    type: "tween",
                    ease: "easeInOut"
                  }
                }}
              >
                <FlexBox
                  $align='center'
                  $justify='center'
                  $borderRadius='16px'
                  $height='56px'
                  $width='56px'
                  $bgColor={value.color}
                >
                  <img src={value.icon} alt={value.title} height={20} width={20} />
                </FlexBox>
                <Text $color='text' $size='bodyBig' $weight={500} $align='center'>
                  {value.title}
                </Text>
                <Text $color='secondary' $size='small' $align='center'>
                  {value.description}
                </Text>
              </MotionBox>
            ))}
          </MotionBox>
        </FlexBox>
      </Reveal>
    </Section>
  )
}

export default About