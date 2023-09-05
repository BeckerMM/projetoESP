import '@/styles/globals.css'
import Navbar from '../components/navbar/index'
import Layout from './layout'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
