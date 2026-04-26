import {Routes, Route} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";


function App() {
 

  return (
    <>
      
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            
        </Route>
      </Routes>
   
    </>
  )
}

export default App
