import { Route, Routes } from "react-router-dom"



function AboutPage(){
    return (
        <div>
            <h2>About page</h2>
            <div>
                <Routes>
                    <Route path="/" element={<p>About/</p>}/>
                    <Route path="/test" element={<p>About/test</p>}/>
                </Routes>
            </div>
        </div>
    )
}

export default AboutPage