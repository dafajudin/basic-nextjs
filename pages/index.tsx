import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="blog">Blog</Link></li>
          <li><Link href="users">Users</Link></li>
        </ul>
      </header>
    </>
  )
}
