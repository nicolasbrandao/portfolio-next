'use client'

import classNames from 'classnames'
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'
import { Ubuntu_Mono } from 'next/font/google'
import { useEffect, useState } from 'react'
import Brand from './Brand'
import getGithubStats from '../lib/getGithubStats'
import linksURLs from '../constants/hyperlinks'

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin'] })

export default function Footer() {
  const [stargazersCount, setStargazersCount] = useState(0)
  const [forksCount, setForksCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { stargazers_count, forks_count } = await getGithubStats()
        setStargazersCount(stargazers_count)
        setForksCount(forks_count)
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error)
      }
    }

    fetchData()
  }, [])

  const footerContainerClass = classNames(
    'flex',
    'flex-col',
    'md:flex-row',
    'mx-auto',
    'max-w-[50rem]',
    'h-[10rem]',
    'items-center',
    'justify-center',
    'gap-4'
  )

  const footerInfoContainerClass = classNames('hover:text-green', ubuntuMono.className)

  const statsWrapperClass = classNames(
    'flex',
    'gap-4',
    'items-center',
    'justify-center'
  )

  const statsContainerClass = classNames('flex', 'gap-2', 'items-center')

  return (
    <footer className={footerContainerClass}>
      <Brand />
      <a
        href={linksURLs.repo}
        target="_blank"
        rel="noreferrer"
        className={footerInfoContainerClass}
      >
        <p>Projetado & Desenvolvido por Nícolas Brandão</p>
        <div className={statsWrapperClass}>
          <div className={statsContainerClass}>
            <AiOutlineStar aria-label="Github Stars Counter Icon" />
            <p>{stargazersCount}</p>
          </div>
          <div className={statsContainerClass}>
            <BiGitRepoForked aria-label="Github Forks Counter Icon" />
            <p>{forksCount}</p>
          </div>
        </div>
      </a>
    </footer>
  )
}
