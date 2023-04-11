import { Project } from '@/types'
import GamerShelfThumbnail from '../../public/projects/gamer-shelf.png'

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
]

export default projectsData
