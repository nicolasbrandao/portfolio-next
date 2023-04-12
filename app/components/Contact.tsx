'use client'

import { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import classNames from 'classnames'
import { FiSend } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa'
import TitleHeader from './TitleHeader'
import Paper from './Paper'
import linksURLs from '../constants/hyperlinks'

export default function Contact() {
  const form = useRef<any>(null)
  const [showAlert, setShowAlert] = useState(false)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_lbu1fdx',
        'template_s98zgqt',
        form.current,
        'robA-NOs3BVfzw5O3'
      )
      .then(
        (result) => {
          console.log(result.text)
          setShowAlert(true)
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const contactContainerClass = classNames(
    'flex',
    'flex-col',
    'items-center',
    'my-auto',
    'gap-4'
  )

  const formClass = classNames(
    'flex',
    'flex-col',
    'w-full',
    'md:w-3/4',
    'bg-bcg2',
    'p-4',
    'rounded'
  )

  const alertMessageClass = classNames(
    'flex',
    'items-center',
    'w-full',
    'rounded',
    'border',
    'p-2',
    'text-green',
    'border-green',
    'bg-green/[.06]',
    'mb-4',
    showAlert ? 'block' : 'hidden'
  )

  const headingLineCLas = classNames(
    'text-frg2',
    'font-bold',
    'text-2xl',
    'mb-4'
  )

  const textInputsClass = classNames(
    'text-bcg1',
    'bg-frg1',
    'rounded',
    'mb-2',
    'w-full'
  )

  const buttonClass = classNames(
    'flex',
    'items-center',
    'gap-2',
    'w-fit',
    'rounded',
    'border',
    'p-2',
    'text-green',
    'border-green',
    'hover:bg-green/[.06]'
  )

  const contactLineClass = classNames('flex', 'items-center', 'gap-2')

  const contactIconClass = classNames('text-green', 'text-xl')

  return (
    <Paper id="contact">
      <TitleHeader>Contato</TitleHeader>
      <div className={contactContainerClass}>
        <form ref={form} onSubmit={sendEmail} className={formClass}>
          <p className={alertMessageClass}>Mensagem enviada com sucesso!</p>
          <h3 className={headingLineCLas}>Envie uma mensagem</h3>
          <label htmlFor="name">
            Nome
            <br />
            <input
              id="name"
              type="text"
              name="from_name"
              className={textInputsClass}
            />
          </label>
          <label htmlFor="email">
            Seu e-mail
            <br />
            <input
              id="email"
              type="email"
              name="email"
              className={textInputsClass}
            />
          </label>
          <label htmlFor="message">
            Mensagem
            <br />
            <textarea
              id="message"
              name="message"
              rows={5}
              className={textInputsClass}
            />
          </label>
          <button type="submit" value="Enviar" className={buttonClass}>
            Enviar
            <FiSend />
          </button>
        </form>
        <div>
          <h3 className={headingLineCLas}>Ou faça contato direto</h3>
          <a
            href={linksURLs.email}
            className={contactLineClass}
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail className={contactIconClass} />
            nicolas.brandaor@gmail.com
          </a>
          <a
            href={linksURLs.whatsapp}
            className={contactLineClass}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp className={contactIconClass} />
            +55 37 9 9112 4140
          </a>
          <a
            href={linksURLs.linkedin}
            className={contactLineClass}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className={contactIconClass} />
            in/nicolasbradao
          </a>
        </div>
      </div>
    </Paper>
  )
}
