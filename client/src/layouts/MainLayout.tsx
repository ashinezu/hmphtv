import { Outlet } from 'react-router-dom'
import { Footer } from '../components/common/Footer'
import { Header } from '../components/common/Header'

export function MainLayout() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
