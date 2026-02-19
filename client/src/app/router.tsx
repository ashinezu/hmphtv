import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { HomePage } from '../features/home/pages/HomePage'
import { LivePage } from '../features/live/pages/LivePage'
import { SchedulePage } from '../features/schedule/pages/SchedulePage'
import { AboutPage } from '../features/about/pages/AboutPage'
import { NotFoundPage } from '../features/not-found/pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'live', element: <LivePage /> },
      { path: 'schedule', element: <SchedulePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
