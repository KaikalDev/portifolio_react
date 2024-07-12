import Paragrafo from '../Paragrafos'
import Titulo from '../Titulo'
import { Card, LinkBotao } from './styles'

export type Props = {
  titulo: string
  descricao: string
  link: string
}

const Projeto = ({ titulo, descricao, link }: Props) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao target="_blank" href={link}>
      Visualizar
    </LinkBotao>
  </Card>
)

export default Projeto
