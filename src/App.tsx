import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'

import SearchPage from './Pages/Search/SearchPage'
import Error from './Pages/404/Error'
import Home from './Pages/Home'
import AboutPage from './Pages/About/AboutPage'
import FormPage from './Pages/FormPage/FormPage'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/form' element={<FormPage />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
