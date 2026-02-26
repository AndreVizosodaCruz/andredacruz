import Reveal from '@animations/Reveal';
import { FlexBox, MotionBox, Section, Text } from '@atoms';
import { Intro } from '@molecules';
import { useResponsive } from '@/hooks/useResponsive';

export default function LookingFor() {

  const { breakpoint } = useResponsive();

  const opportunities = [
    {
      icon: '/assets/rocket.svg',
      title: 'Co-founder',
      description: 'Looking for the right idea and the right people to build something meaningful together.',
      color: '#E8EDE7',
    },
    {
      icon: '/assets/groups.svg',
      title: 'Advisory',
      description: 'Happy to share insights on product, tech strategy, and team building with early-stage startups.',
      color: '#F5E6E0',
    },
    {
      icon: '/assets/message.svg',
      title: 'Networking',
      description: 'Always open to conversations with interesting people—no agenda required.',
      color: '#F5F0E8',
    },
    {
      icon: '/assets/work.svg',
      title: 'Leadership Roles',
      description: 'Open to the right opportunity where I can lead, build, and make an impact.',
      color: '#EDE8F0',
    },
  ];


  return (
    <Section
      id='lookingFor'
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
              caption={`What I'm Looking For`}
              title='Open to Possibilities'
              titleSize='h2'
              subTitle={`I believe the best opportunities come from genuine connections. Here's what excites me.`}
            />
          </MotionBox>
          <FlexBox $gap='16px' $wrap='wrap'>
            {opportunities.map((opportunity, index) => (
              <MotionBox
                key={index}
                $direction='column'
                $width={breakpoint === 'mobile' ? '100%' : 'calc(50% - 16px)'}
                $minWidth='240px'
                $borderRadius='16px'
                $border='1px solid rgb(245, 245, 244)'
                $padding={breakpoint === 'desktop' ? '32px' : '24px'}
                $gap='16px'
                $center
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2
                  }
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: `0 20px 40px -15px rgba(0,0,0,0.5)`,
                  cursor: 'pointer',
                  transition: {
                    delay: 0,
                    duration: 0.4,
                  }
                }}
              >
                <FlexBox
                  $align='center'
                  $justify='center'
                  $borderRadius='16px'
                  $height='56px'
                  $width='56px'
                  $bgColor={opportunity.color}
                >
                  <img src={opportunity.icon} alt={opportunity.title} height={20} width={20} />
                </FlexBox>
                <Text $color='text' $size='bodyBig' $weight={500} $align='center'>
                  {opportunity.title}
                </Text>
                <Text $color='secondary' $size='small' $align='center'>
                  {opportunity.description}
                </Text>
              </MotionBox>
            ))}
          </FlexBox>
        </FlexBox>
      </Reveal>
    </Section>
  )
}
