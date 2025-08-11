import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <h1>
      Hello world

      <ModeToggle />

      <div className="p-24 dark:bg-black bg-white dark:text-white text-black">
        Theme
      </div>
    </h1>
  )
}

export default App
