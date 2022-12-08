import React from 'react'
import { Link } from 'react-router-dom'
import s from "./About.module.css"

export default function About() {
  return (
    <section className={s.container}>About
      <Link to='/update' >Update</Link>
    </section>
  )
}
