import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import SideBar from './containers/sidebar'
import Sobre from './containers/sobre'
import EstiloGlobal, { Container } from './styles'
import temaDark from './themes/dark'
import { useState } from 'react'
import temaLight from './themes/light'

function App() {
  const [estaTemaDark, setEstaTemaDark] = useState(false)

  function trocaTema() {
    setEstaTemaDark(!estaTemaDark)
  }

  return (
    <ThemeProvider theme={estaTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
