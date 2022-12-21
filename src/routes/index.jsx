import {Route, Routes} from "react-router-dom";
import Pages from "../pages/index.jsx";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<Pages/>}/>
        </Routes>
    )
}
