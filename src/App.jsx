import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
