import Entry from '../components/entry'
import Header from '../components/header'
import Bio from '../components/bio'
import Contact from '../components/contact'
import data from './docs'
import './App.css'

function App() {

const entryElements = data.map((entry) => {
  return (
    <Entry
    key= {entry.id}
    img = {entry.img}
    title = {entry.title}
    date = {entry.date}
    desc = {entry.desc}
    link = {entry.link}
    />
  )
})

  return (
    <>
    <Header/>
     <Bio/>
    <main className='container'>
      {entryElements}
    </main>
    <Contact/>
    </>
  )
}

export default App
