import AboutMe from "./components/sections/about_section/AboutMe"
import ContactMe from "./components/sections/contact/ContactMe"
import Education from "./components/sections/education_section/Education"
// import MySkills from "./components/sections/skills_section/MySkills"
import Projects from "./components/sections/projects_section/Projects"

function App() {
  return (
    <div className="">
      <div className="flex w-full justify-center">
        <AboutMe />
      </div>
      {/* <div className="flex w-full justify-center">
        <MySkills />
      </div> */}
      <div className="flex w-full justify-center">
        <Projects />
      </div>
      <div className="flex w-full justify-center">
        <Education />
      </div>
      <div className="flex w-full justify-center">
        <ContactMe />
      </div>
    </div>
  )
}

export default App
