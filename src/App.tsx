import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { HomePage } from './pages/HomePage/HomePage'

function App() {
  return (
    <>
      <Header />
      <Main>
        <HomePage />
      </Main>
      <Footer />
    </>
  )
}

export default App
