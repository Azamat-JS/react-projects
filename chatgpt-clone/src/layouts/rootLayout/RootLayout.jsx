import './RootLayout.css';
import { Link, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to='/'>
            <img src="/logo.png" />
            <span>LAMA AI</span>
            </Link>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout