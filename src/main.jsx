import { createRoot } from 'react-dom/client'
import { 
    RouterProvider, createBrowserRouter, createRoutesFromElements, Route 
} from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from "./pages/Home"
import Game from "./pages/Game"
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

const router = createBrowserRouter(createRoutesFromElements(
<>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
    </Route>
    <Route path="game/:id" element={<Game/>}/>

</>
))

function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
createRoot(document.getElementById('root')).render(
    <MantineProvider defaultColorScheme="dark">
        <App />
    </MantineProvider>
)
