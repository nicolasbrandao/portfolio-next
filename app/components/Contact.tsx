'use client'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import classNames from 'classnames';
import Paper from './Paper'
import TitleHeader from './TitleHeader'
import Paragraph from './Paragraph';

export default function Contact() {
  const form = useRef<any>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_lbu1fdx', 'template_s98zgqt', form.current, 'robA-NOs3BVfzw5O3')
      .then((result) => {
          console.log(result.text);
          form.current.reset;
      }, (error) => {
          console.log(error.text);
      });
  };

  const contactContainerClass = classNames(
    'flex',
    'my-auto',
    'gap-4'
  )

  const formClass = classNames(
    'flex',
    'flex-col',
    'w-1/2'
  )

  const textInputsClass = classNames(
    'text-bcg1',
    'bg-frg1',
    'rounded',
    'mb-2'
  )
  
  const buttonClass = classNames(

  )

  return (
    <Paper>
      <TitleHeader>Contato</TitleHeader>
      <div className={contactContainerClass}>
        <form ref={form} onSubmit={sendEmail} className={formClass}>
          <label>Nome</label>
          <input type="text" name="from_name" className={textInputsClass}/>
          <label>Seu e-mail</label>
          <input type="email" name="email" className={textInputsClass}/>
          <label>Mensagem</label>
          <textarea name="message" className={textInputsClass}/>
          <input type="submit" value="Enviar" className={buttonClass}/>
        </form>
        <div>
          <h3>Ou faça contato direto</h3>
          <Paragraph>nicolas.brandaor@gmail.com</Paragraph>
          <Paragraph>+55 37 9 9112 4140</Paragraph>
          <Paragraph>in/nicolasbradao</Paragraph>
        </div>
      </div>
    </Paper>
  )
}
