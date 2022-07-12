import React, { useEffect } from 'react'
import { Routes } from 'react-router';
import { Route } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import { Header, CreateContainer, MainContainer, MenuContainer } from './components';
import { useStateValue } from './components/contex/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './components/contex/reducer';

const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data
      });
    });
  };

  useEffect(() => { fetchData() }, []);

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