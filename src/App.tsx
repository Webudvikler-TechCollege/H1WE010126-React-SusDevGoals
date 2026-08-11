import './App.css'
import { Container } from './components/Container/Container'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <>
      <Header />
      <Main>
          <Container color="#445566" width="80%" padding={20} />
          <Container color="#667799" width="100%" padding={10} />
      </Main>
      <Footer />
    </>
  )
}

export default App
