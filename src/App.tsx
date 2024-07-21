import Contact from "./components/contact"
import Home from "./components/home"
import Projects from "./components/projects"
import Skill from "./components/skill"

function App() {
  return (
    <main className=" bg-gradient-to-tl from-slate-950 bg-purple-900 be text-white md:p-10 p-2 flex flex-col gap-10">
      <Home/>
      <Skill/>
      <Projects/>
      <Contact/>
    </main>
  )
}

export default App
