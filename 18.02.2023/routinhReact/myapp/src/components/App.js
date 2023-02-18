import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import AboutPage from './AbouPage'
import HomePage from './HomePage'

function App(){
    return(
        <div>
            <div>
                <a href='/home'>HomePage</a>
                <a href='/about'>AboutPage</a>
            </div>
            <Router>

                <Routes>
                    <Route path={'/home'} element={<HomePage/>}/>
                    <Route path={'/about/*'} element={<AboutPage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App




