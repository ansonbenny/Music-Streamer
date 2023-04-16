import { Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { Header, Loading, Menu } from './components'
import { useRef } from 'react'

const App = () => {
  let contentRef = useRef()
  let menuRef = useRef()
  return (
    <section className="Main">

      {false && <Loading />}

      <Menu contentRef={contentRef} ref={menuRef} />

      <div className="content" ref={contentRef}>
        <Header contentRef={contentRef} menuRef={menuRef} />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>

      {
        // bottom play options
      }
    </section>
  )
}

export default App
