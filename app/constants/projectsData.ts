import { Project } from '@/types'
import GamerShelfThumbnail from '../../public/projects/gamer-shelf.png'
import PortfolioThumbnail from '../../public/projects/portfolio.png'

const projectsData: Project[] = [
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
    description: 'Projeto de uma página de portfólio pessoal',
    technologies: 'React Next TypeScript Tailwind',
  },
]

export default projectsData
