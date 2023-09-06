import { Project } from '@/types'
import TucunaRecords from '@/public/projects/tucuna-records.png'
import Podcodar from '@/public/projects/podcodar.png'
import FakeStoreThumbnail from '@/public/projects/fakestore.png'
import GamerShelfThumbnail from '@/public/projects/gamer-shelf.png'
import PortfolioThumbnail from '@/public/projects/portfolio.png'
import TaskManager from '@/public/projects/task-manager.png'

const projectsData: Project[] = [
  {
    id: 'task-manager',
    image: TaskManager,
    repoURL: 'https://github.com/nicolasbrandao/task-manager',
    deployURL: 'https://task-manager-nicolasbrandao.vercel.app/',
    title: 'Task Manager',
    description:
      'Crie, edite e busque tarefas, armazenando tudo em um banco de dados!',
    technologies:
      'Vite React TypeScript RTKQuery ReactHookForm ReactRouter Zod LodashDebounce MaterialUI AceBase Express',
  },
  {
    id: 'podcodar',
    image: Podcodar,
    repoURL: 'https://github.com/podcodar/app',
    deployURL: 'https://app-podcodar.vercel.app/login',
    title: 'PodCodar App',
    description:
      'ESTE É UM TRABALHO EM ANDAMENTO. Projeto de web app interno da comunidade PodCodar. Funcionalidades de inscrição, registro e onboarding de novos mentorados',
    technologies:
      'Next TypeScript NextAuth Prisma Docker Tailwind-Styled-Components Zod',
  },
  {
    id: 'tucuna-records',
    image: TucunaRecords,
    repoURL: 'https://github.com/nicolasbrandao/tucuna-records',
    deployURL: 'https://tucuna-records.vercel.app/',
    title: 'Tucuna Records',
    description:
      'ESTE É UM TRABALHO EM ANDAMENTO. Projeto de web app para homologação de records de pesca esportiva de tucunarés',
    technologies: 'Next NextAuth Prisma Docker TypeScript Tailwind',
  },
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
