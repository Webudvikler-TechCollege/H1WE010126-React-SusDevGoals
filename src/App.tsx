import { Main } from "./components/atoms/Main/Main"
import { Footer } from "./components/organisms/Footer/Footer"
import { Header } from "./components/organisms/Header/Header"
import { AppRouter } from "./router/AppRouter"

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
