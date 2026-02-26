import { FlexBox, Heading, MotionBox, Section, Text } from '@atoms'
import Reveal from '@animations/Reveal'
import { Intro } from '@molecules';
import { useResponsive } from '@/hooks/useResponsive';

function Background() {
  const { breakpoint } = useResponsive();

  const timeline = [
    {
      year: '2024',
      role: 'Senior Frontend Developer',
      company: 'Erakulis',
      focus: 'Leading frontend team, architecting React/TypeScript applications with Redux and Vite',
      highlights: ['Team Leadership', 'Component Libraries', 'Mobile Strategy']
    },
    {
      year: '2023',
      role: 'Software Engineer',
      company: 'Knowmad mood',
      focus: 'Legacy modernization and comprehensive testing with Jest',
      highlights: ['Migration', 'Quality Assurance']
    },
    {
      year: '2022',
      role: 'Tech Senior',
      company: 'Deloitte',
      focus: 'E-commerce optimization, React Native research, mentoring developers',
      highlights: ['E-commerce', 'Mentorship', 'AWS']
    },
    {
      year: '2021',
      role: 'React Developer',
      company: 'Deloitte (via Affinity)',
      focus: 'Specialized React development for consultancy clients',
      highlights: ['Consulting', 'React']
    },
    {
      year: '2020',
      role: 'Co-Founder',
      company: 'Dizconnect',
      focus: 'Directed technical strategy and product vision during founding phase',
      highlights: ['Startup', 'Product Vision']
    },
    {
      year: '2019',
      role: 'Frontend Developer',
      company: 'Sinal Principal & Lavva',
      focus: 'Delivered 8+ websites and mobile applications',
      highlights: ['Multi-Platform', 'UX/UI']
    },
    {
      year: '2017',
      role: 'IT Analyst',
      company: 'Readiness IT',
      focus: 'Dashboard development, performance testing, business analysis',
      highlights: ['Dashboards', 'Performance']
    },
  ];

  const skills = [
    { name: 'Leadership & Strategy', description: 'Team direction, roadmap planning, stakeholder alignment' },
    { name: 'React & TypeScript', description: 'Scalable applications, component libraries, modern tooling' },
    { name: 'Team Building & Mentorship', description: 'Code reviews, pair programming, knowledge sharing' },
    { name: 'Architecture & System Design', description: 'Clean architecture, reusable patterns, performance optimization' },
  ];

  return (

    <Section
      id='background'
      $bgColor='white'
      $variant='md'
    >
      <Reveal>
        <FlexBox
          $gap='48px'
          $direction='column'
          $align='center'
          $justify='center'
        >
          <MotionBox
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Intro
              align='center'
              textAlign='center'
              caption='Background'
              title='Journey & Expertise'
              titleSize='h2'
              subTitle='From hands-on development to strategic leadership, a path built on continuous growth.'
            />
          </MotionBox>
          <FlexBox
            $gap='40px'
            $direction={breakpoint === 'desktop' ? 'row' : 'column'}
            $width='100%'
          >
            <MotionBox
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              $gap='32px'
              $direction='column'
              $flex={1}
            >
              <Heading $size='h3' $weight={300}>
                Career Timeline
              </Heading>
              <MotionBox
                $direction='column'
                $gap='24px'
                $position='relative'
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <FlexBox
                  $background='linear-gradient(to bottom, #8B9D83, #f5f5f4)'
                  $width='1px'
                  $position='absolute'
                  $left='8px'
                  $top='0'
                  $bottom='0'
                />
                {timeline.map((item, index) => (
                  <MotionBox
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2
                      }
                    }}
                    whileHover={{
                      x: 12,
                      cursor: 'default',
                      transition: {
                        delay: 0,
                        duration: 0.4,
                      }
                    }}
                    key={index}
                    $bgColor='transparent'
                    $gap='16px'
                  >
                    <FlexBox
                      $bgColor='#fff'
                      $border='1px solid #9ca3af'
                      $width='16px'
                      $minWidth='16px'
                      $height='16px'
                      $borderRadius='50%'
                    />
                    <FlexBox $direction='column' $gap='4px'>
                      <FlexBox $gap='8px'>
                        <FlexBox
                          $height='24px'
                          $borderRadius='999px'
                          $background='rgb(232, 237, 231)'
                          $padding='0 8px'
                          $center
                        >
                          <Text $size='caption' $color='accent'>
                            {item.year}
                          </Text>
                        </FlexBox>
                        <Text $size='small' $color='secondary'>
                          {item.company}
                        </Text>
                      </FlexBox>
                      <Text $size='body' $color='text'>
                        {item.role}
                      </Text>
                      <Text $size='small' $color='secondary'>
                        {item.focus}
                      </Text>
                      <FlexBox $wrap='wrap' $gap='4px'>
                        {item.highlights.map((highlight, indexHighlight) => (
                          <FlexBox
                            key={indexHighlight}
                            $borderRadius='999px'
                            $background='rgb(245, 245, 244)'
                            $padding='0 8px'
                            $center
                          >
                            <Text $size='caption' $color='secondary'>
                              {highlight}
                            </Text>
                          </FlexBox>
                        ))}
                      </FlexBox>
                    </FlexBox>
                  </MotionBox>
                ))}
              </MotionBox>
            </MotionBox>
            <MotionBox
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              $gap='32px'
              $direction='column'
              $flex={1}
            >
              <Heading $size='h3' $weight={300}>
                Core Strengths
              </Heading>
              <MotionBox
                $direction='column'
                $gap='16px'
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {skills.map((skill, index) => (
                  <MotionBox
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    viewport={{ once: true }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.2
                      }
                    }}
                    whileHover={{
                      scale: 1.01,
                      boxShadow: `0 20px 40px -15px rgba(0,0,0,0.5)`,
                      cursor: 'pointer',
                      transition: {
                        delay: 0,
                        duration: 0.4,
                        type: "tween",
                        ease: "easeInOut"
                      }
                    }}
                    key={index}
                    $border='1px solid rgb(245, 245, 244)'
                    $borderRadius='16px'
                    $padding='16px'
                  >
                    <FlexBox $direction='column' $gap='4px'>
                      <Text $size='body' $color='text'>
                        {skill.name}
                      </Text>
                      <Text $size='small' $color='secondary'>
                        {skill.description}
                      </Text>
                    </FlexBox>
                  </MotionBox>
                ))}
              </MotionBox>
              <MotionBox
                $gap='16px'
                $wrap='wrap'
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                $background='linear-gradient(to right bottom, rgb(245, 240, 232), rgb(245, 245, 244))'
                $padding='24px'
                $borderRadius='16px'
              >
                {['React', 'TypeScript', 'Redux Toolkit', 'Vite', 'Capacitor.js', 'Jest', 'Storybook', 'CI/CD'].map((tech, i) => (
                  <MotionBox
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring" }}
                    whileHover={{ scale: 1.01, y: -1, cursor: 'default' }}
                    $padding='6px 12px'
                    $borderRadius='999px'
                    $boxShadow='rgba(0, 0, 0, 0.05) 0px 1px 3px'
                    $bgColor='rgb(255, 255, 255)'
                  >
                    <Text $size='caption' $color='text'>
                      {tech}
                    </Text>
                  </MotionBox>
                ))}
              </MotionBox>
              <MotionBox
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                  }
                }}
                whileHover={{
                  scale: 1.01,
                  cursor: 'default',
                  transition: {
                    delay: 0,
                    duration: 0.4,
                    type: "tween",
                    ease: "easeInOut"
                  }
                }}
                $border='1px solid rgb(245, 245, 244)'
                $borderRadius='16px'
                $padding='16px'
                $gap='16px'
              >
                <FlexBox
                  $align='center'
                  $justify='center'
                  $borderRadius='16px'
                  $height='40px'
                  $width='40px'
                  $bgColor='#E8EDE7'
                >
                  <img src='assets/university.svg' alt='degree' height={20} width={20} />
                </FlexBox>
                <FlexBox $direction='column' $gap='4px'>
                  <Text $size='body' $color='text'>
                    Bachelor of Information Technology
                  </Text>
                  <Text $size='small' $color='secondary'>
                    ESTGA - Universidade de Aveiro • 2014 – 2017
                  </Text>
                </FlexBox>
              </MotionBox>
            </MotionBox>
          </FlexBox>
        </FlexBox>
      </Reveal>
    </Section>
  )
}

export default Background