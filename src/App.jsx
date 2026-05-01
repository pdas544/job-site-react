import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from "./pages/HomePage";
import JobsPage from './pages/JobsPage';
import JobPage, {jobLoader} from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import AddJobPage from './pages/AddJobPage';




function App() {
  const addNewJob = async(jobData) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jobData)
    });
    return;
  };

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage submitNewJob={addNewJob}/>} />
      <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

  return (
    <RouterProvider router={router} />
  );
}

export default App
