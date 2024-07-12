import { useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

type TypeRepos = {
  id: number
  name: string
  html_url: string
  description: string
}

const Projetos = () => {
  const [repos, setRepos] = useState<TypeRepos[]>([])

  fetch('https://api.github.com/users/KaikalDev/repos')
    .then((resposta) => resposta.json())
    .then((respostaJson: TypeRepos[]) => {
      setRepos(respostaJson)
    })

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repos.map((repositorios) => (
          <li key={repositorios.id}>
            <Projeto
              titulo={repositorios.name}
              link={repositorios.html_url}
              descricao={repositorios.description}
            />
          </li>
        ))}
      </Lista>
    </section>
  )
}

export default Projetos
