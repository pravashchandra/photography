import Footer from '@/component/Footer'
import NavBar from '@/component/NavBar'
import ScrollToTop from '@/component/ScrollToTop'
import Whatsapp from '@/component/Whatsapp'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
      <Whatsapp />
      <ScrollToTop />
    </>
  )
  
}
