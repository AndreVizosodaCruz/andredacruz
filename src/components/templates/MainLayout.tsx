import { ReactNode } from 'react'
import { FlexBox } from '@atoms'
import { Navbar, Footer } from '@molecules'

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <FlexBox $direction='column' $bgColor='rgb(253, 252, 250)'>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </FlexBox>
  )
}

export default MainLayout