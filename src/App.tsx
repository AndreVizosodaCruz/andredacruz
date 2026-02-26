import MainLayout from "@templates/MainLayout"
import { Hero, About, Background, LookingFor, Contact } from "@organisms";

function App() {

  return (
    <MainLayout>
      <Hero />
      <About />
      <Background />
      <LookingFor />
      <Contact />
    </MainLayout>
  )
}

export default App
