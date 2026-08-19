import { AppRouter } from './components/AppRouter/AppRouter'
import { Footer } from './components/Atoms/Footer/Footer'
import { Header } from './components/Atoms/Header/Header'
import { Main } from './components/Atoms/Main/Main'

function App() {
  return (
    <>
      <Header />
      <Main>
        <AppRouter />
      </Main>
      <Footer />
    </>
  )
}

export default App
