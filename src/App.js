import React from 'react'
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import { Header, CreateContainer, MainContainer } from './components';

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />
        
        <main className="mt-20 md:mt-16 px-4 w-full md:px-14 py-4">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App;