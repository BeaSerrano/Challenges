import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HeaderUser from "./components/HeaderUser";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import NotFound from './components/NotFound'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header />,
        errorElement: <NotFound />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/projects', element: <Projects /> },
            { path: '/resume', element: <Resume /> }
        ]
    },
    {
        path: '/dashboard',
        element: <HeaderUser />,
        children: [
            { path: '/dashboard', element: <Home /> },
            { path: '/dashboard/projects', element: <Projects /> },
            { path: '/dashboard/resume', element: <Resume /> }
        ]
    }
])

export default router

// [] ---> BrowserRouter as Router --> envuelve todo el enrutado
// {} ---> Routes --> agrupa varias rutas individuales
// children ---> Route --> cada ruta individual