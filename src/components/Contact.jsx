import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { SectionTitle } from './SectionTitle'
import { SITE } from '../data/content'

const initial = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Enter a valid email.'
  if (!values.message.trim()) errors.message = 'Message is required.'
  else if (values.message.trim().length < 10)
    errors.message = 'Please write at least 10 characters.'
  return errors
}

export function Contact({ sectionIndex = '07' }) {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length > 0) return
    const subject = encodeURIComponent(`Portfolio contact from ${values.name.trim()}`)
    const body = encodeURIComponent(values.message.trim())
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <SectionTitle index={sectionIndex}>Contact</SectionTitle>

      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-8 max-w-md text-lg leading-relaxed text-slate-400">
            I’m open to internships, collaboration, and interesting product work. Prefer email — I
            typically reply within a day.
          </p>
          <div className="space-y-4">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-3 text-[#ccd6f6] transition hover:text-sky-400"
            >
              <HiOutlineMail className="h-6 w-6 text-sky-400" />
              <span>{SITE.email}</span>
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-[#ccd6f6] transition hover:text-sky-400"
            >
              <HiOutlinePhone className="h-6 w-6 text-violet-400" />
              <span>{SITE.phone}</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="rounded-xl border border-[#233554] bg-[#112240]/50 p-6 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          noValidate
        >
          <div className="mb-4">
            <label htmlFor="name" className="mb-1 block font-mono text-xs text-sky-400">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#233554] bg-[#0a192f]/80 px-4 py-3 text-[#ccd6f6] outline-none transition focus:border-sky-400/50"
              autoComplete="name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 block font-mono text-xs text-sky-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#233554] bg-[#0a192f]/80 px-4 py-3 text-[#ccd6f6] outline-none transition focus:border-sky-400/50"
              autoComplete="email"
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="mb-1 block font-mono text-xs text-sky-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              className="w-full resize-y rounded-lg border border-[#233554] bg-[#0a192f]/80 px-4 py-3 text-[#ccd6f6] outline-none transition focus:border-sky-400/50"
            />
            {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-sky-500 to-violet-600 py-3 text-sm font-semibold text-white transition hover:brightness-110 sm:w-auto sm:px-10"
          >
            Send message
          </button>
          {sent && (
            <p className="mt-4 text-sm text-sky-400" role="status">
              Opening your mail app — thanks for reaching out!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
