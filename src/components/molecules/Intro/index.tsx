import { FlexBox, Text, Heading } from '@/components/atoms';

interface Props {
  gap?: string;
  align?: 'center' | 'flex-start';
  textAlign?: 'center' | 'left';
  caption?: string;
  title: string;
  titleSize?: 'h1' | 'h2';
  subTitle?: string;
}

function Intro({
  gap = '16px',
  align = 'center',
  textAlign = 'center',
  caption,
  title,
  titleSize = 'h1',
  subTitle
}: Props) {
  return (
    <FlexBox $direction='column' $gap={gap} $align={align} $justify={align}>
      {caption && (
        <Text $size="small" $color='accent' $align={textAlign} $textTransform='uppercase' $weight={500}>
          {caption}
        </Text>
      )}
      <Heading $size={titleSize} $color='text' $align={textAlign} $weight={300}>
        {title}
      </Heading>
      {subTitle && (
        <Text $size="body" $color='secondary' $align={textAlign} $maxWidth='672px' $weight={300}>
          {subTitle}
        </Text>
      )}
    </FlexBox>
  )
}

export default Intro