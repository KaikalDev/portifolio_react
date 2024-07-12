import Avatar from '../../components/avatar'
import Paragrafo from '../../components/Paragrafos'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Kaique Luan</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        KaikalDev
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor full-stack Java
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default SideBar
