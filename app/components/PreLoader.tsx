'use client'

import classNames from 'classnames'
import { useState, useEffect } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion'

export default function PreLoader() {
  const [fadeOut, setFadeOut] = useState(false)
  const [displayLoader, setDisplayLoader] = useState(true)

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setDisplayLoader(false)
    }, 2000)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true)
    }, 2000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  const wrapperClass = classNames(
    'flex',
    'h-screen',
    'w-screen',
    'fixed',
    'top-0',
    'z-20',
    'bg-bcg1',
    'items-center',
    'justify-center'
  )

  const loaderTextClass = classNames(
    'text-[8rem]',
    'font-bold',
    'stroke-2',
    'stroke-green',
    'animate-strokeDash'
  )

  return (
    <motion.div
      className={wrapperClass}
      initial={{ opacity: 1 }}
      animate={{
        opacity: fadeOut ? 0 : 1,
        display: displayLoader ? 'flex' : 'none',
      }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={handleAnimationComplete}
    >
      <svg viewBox="0 0 1350 600">
        <text
          className={loaderTextClass}
          x="50%"
          y="50%"
          fill="transparent"
          textAnchor="middle"
        >
          &lt;NB/&gt;
        </text>
      </svg>
    </motion.div>
  )
}
