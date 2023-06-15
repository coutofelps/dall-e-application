import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost } from './pages'
import { logo, githubEmblem, instagramIcon } from './assets'

const App = () => {
  return(
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-28 object-contain" />
        </Link>

        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#eeeff3] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
      <footer className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="https://github.com/felpscouto/dall-e-application" target="_blank">
          <img src={githubEmblem} alt="Github Emblem" className="w-20 object-contain" />
        </Link>

        <Link to="https://www.instagram.com/felps.couto/" target="_blank" className="flex justify-between items-center">
          <div className="mr-1.5">
            <img src={instagramIcon} alt="Instagram Icon" className="w-5 object-contain" />
          </div>

          <div className="block text-sm font-medium text-gray-900 italic">
            /felps.couto
          </div>
        </Link>
      </footer>
    </BrowserRouter>
  )
}

export default App