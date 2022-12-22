import Header from '../components/headers'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <h1 className={styles['title-homepage']}>Welcome Judin</h1>
      <Footer />
    </>
  );
}
