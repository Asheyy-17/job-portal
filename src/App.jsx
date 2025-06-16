import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import './App.css'
import { ThemeProvider } from './components/ui/theme-provider'
import AppLayouts from './layouts/AppLayouts'
import Job from './pages/job'
import JobListing from './pages/jobs-listing'
import LandingPage from './pages/landing'
import MyJobs from './pages/my-jobs'
import OnBoarding from './pages/onboarding'
import PostJob from './pages/post-job'
import SavedJob from './pages/saved-job'
import ProtectedRoute from './components/ui/protected-route'

const router = createBrowserRouter ([
  {
    element : <AppLayouts />,
    children : [
      {
        path : "/",
        element : <LandingPage />
      },
      {
        path : "/job/:id",
        element : (
        <ProtectedRoute>
        <Job></Job>
        </ProtectedRoute>
      )
      },
      {
        path : "/jobs-listing",
        element : (
        <ProtectedRoute>
        <JobListing />
        </ProtectedRoute>
        )
      },
      {
        path : "/my-jobs",
        element : (
        <ProtectedRoute>
        <MyJobs />
        </ProtectedRoute>
      )
      },
      {
        path : "/onboarding",
        element : 
        (<ProtectedRoute><OnBoarding /></ProtectedRoute>)
      },
      {
        path : "/post-job",
        element : (<ProtectedRoute><PostJob /></ProtectedRoute>)
      },
      {
        path : "/saved-job",
        element : (<ProtectedRoute><SavedJob /></ProtectedRoute>)
      },
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router = {router}/>
    </ThemeProvider>
  )
}

export default App
