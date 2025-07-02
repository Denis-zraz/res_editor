// import { useState } from 'react'
import './App.css'
import Main from './components/Main'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <section className='w-[1120px] min-h-screen flex flex-col m-auto drop-shadow-2xl bg-white'>
      <header className='w-full h-16 border-b border-[#202F55] shadow-inner p-3'>
        <h1 className="font-['Days_One'] text-[#202F55] text-3xl text-center">Редактор резюме</h1>
      </header>
      <Main/>
    </section>
  )
}

export default App
