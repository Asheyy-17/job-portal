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
        element : <Job></Job>
      },
      {
        path : "/jobs-listing",
        element : <JobListing />
      },
      {
        path : "/my-jobs",
        element : <MyJobs />
      },
      {
        path : "/onboarding",
        element : <OnBoarding />
      },
      {
        path : "/post-job",
        element : <PostJob />
      },
      {
        path : "/saved-job",
        element : <SavedJob />
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
