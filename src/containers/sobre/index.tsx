import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafos'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      aperiam animi quod totam debitis quisquam, tempora ducimus aliquid, sequi
      architecto culpa, quas aspernatur iure provident et cupiditate asperiores
      dolor! Aliquid.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=KaikalDev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=KaikalDev&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
