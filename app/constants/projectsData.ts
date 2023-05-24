import { Project } from '@/types'
import FakeStoreThumbnail from '../../public/projects/fakestore.png'
import GamerShelfThumbnail from '../../public/projects/gamer-shelf.png'
import PortfolioThumbnail from '../../public/projects/portfolio.png'

const projectsData: Project[] = [
  {
    id: 'fake-store',
    image: FakeStoreThumbnail,
    repoURL: 'https://github.com/nicolasbrandao/fake-store',
    deployURL: 'https://next-fakestore.vercel.app/',
    title: 'FakeStore',
    description:
      'Projeto que utiliza a Fake Store API para criar um web app e-commerce onde o usuário pode navegar por produtos e adicioná-los ao carrinho',
    technologies: 'Next appDir ContextAPI ChakraUI TypeScript Tailwind',
  },
  {
    id: 'gamer-shelf',
    image: GamerShelfThumbnail,
    repoURL: 'https://github.com/nicolasbrandao/gamer-shelf',
    deployURL: 'https://gamer-shelf.vercel.app/',
    title: 'GamerShelf',
    description:
      'Projeto de uma página que utiliza a Free-to-play API para criar um web app onde o usuário pode construir uma biblioteca de jogos',
    technologies: 'React Redux RTKQuery ReactRouter TypeScript Tailwind',
  },
  {
    id: 'portfolio',
    image: PortfolioThumbnail,
    repoURL: 'https://github.com/nicolasbrandao/portfolio-next',
    deployURL: 'https://nicolasbrandao.vercel.app/',
    title: 'Portfólio',
    description:
      'Projeto de uma página de portfólio pessoal para exposição de projetos e currículo',
    technologies: 'React Next TypeScript Tailwind FramerMotion',
  },
]

export default projectsData
