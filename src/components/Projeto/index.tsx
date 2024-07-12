import Paragrafo from '../Paragrafos'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com vueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
