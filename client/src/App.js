import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import StaffTable from "./pages/StaffTable";
import ManageAStaff from "./pages/ManageAStaff";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<StaffTable/>} />
                    <Route path='/staff/:id' element={<ManageAStaff/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
