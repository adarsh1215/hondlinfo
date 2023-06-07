import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importing components
import Header from './components/header/Header'
import Middle from './components/middle/Middle'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Middle />
      <Content />
      <Footer />
      <div className="fixed">
        <button className="fixedBtn">Add hodlinfo to home screen</button>
      </div>
    </>
  )
}

export default App
