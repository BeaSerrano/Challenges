import { Link, Outlet } from 'react-router-dom'

const HeaderUser = () => {
        return (
            <>
                <nav>
                    <Link to='/'>Paco</Link>
                    <Link to='/projects'>Projects Paco</Link>
                    <Link to='/resume'>Resume Paco</Link>
                </nav>
    
                <Outlet />
                
                <footer>
                    Este es el portfolio de Paco
                </footer>
            </>
        )
}

export default HeaderUser