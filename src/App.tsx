import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Swiper from './components/Swiper/Swiper'
import Features from './components/Features/Features'

function App() {


  return (
    <div className='main'>
      <Header/>
      <Hero/>
      <div className='swiper_conteiner'>
      <Features/>
      <Swiper/>
      </div>
    </div>
  )
}

export default App
