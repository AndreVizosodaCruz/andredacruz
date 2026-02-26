import { ReactNode } from 'react'
import { FlexBox } from '@atoms'
import { Navbar, Footer } from '@molecules'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <FlexBox $direction='column' $bgColor='rgb(253, 252, 250)'>
      <Navbar />
      {children}
      <Footer />
    </FlexBox>
  )
}

export default MainLayout