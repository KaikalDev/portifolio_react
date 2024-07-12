import { useEffect, useState } from 'react'
import Avatar from '../../components/avatar'
import Paragrafo from '../../components/Paragrafos'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

type UserInfo = {
  bio: string
  login: string
  name: string
}

const SideBar = (props: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfo[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/KaikalDev')
      .then((res) => res.json())
      .then((resJson: UserInfo) => {
        setUserInfo([resJson])
      })
  }, [])

  return (
    <aside>
      {userInfo.map((info) => (
        <SidebarContainer key={info.login}>
          <Avatar />
          <Titulo fontSize={20}>{info.name}</Titulo>
          <Paragrafo tipo="secundario" fontSize={16}>
            {info.login}
          </Paragrafo>
          <Descricao tipo="principal" fontSize={12}>
            {info.bio}
          </Descricao>
          <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
        </SidebarContainer>
      ))}
    </aside>
  )
}

export default SideBar
