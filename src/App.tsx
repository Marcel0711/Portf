import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Tech from "./components/Tech/Tech"

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Intro/>
        <Tech/>
        <Projects/>
      </main>
    </>
  )
}

export default App
