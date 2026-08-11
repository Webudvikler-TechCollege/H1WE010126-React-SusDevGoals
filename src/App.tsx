import './App.css'
import { ContentWrapper } from './components/ContentWrapper/ContentWrapper'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <>
      <Header />
      <Main>
        <ContentWrapper title="Alt i Bulldak Nudler" description='Se vores online udvalg af nudler' showTitle={true}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam soluta maxime, officiis perspiciatis cum nulla quod porro atque sed distinctio saepe tenetur? Maxime dolores laboriosam aperiam quisquam inventore accusantium.
        </ContentWrapper>
      </Main>
      <Footer />
    </>
  )
}

export default App
