import Footer from '@/component/Footer'
import NavBar from '@/component/NavBar'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    
    <>
    
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
  
}
