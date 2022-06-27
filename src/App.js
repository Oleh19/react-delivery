import React from 'react'
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import { Header, CreateContainer, MainContainer } from './components';

const App = () => {
  return (

    <AnimatePresence>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />
        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItems" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App;