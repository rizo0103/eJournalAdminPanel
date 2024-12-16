import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import ManageStudyDates from './components/manager/ManageStudyDates';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Main />} />
                <Route path = '/manage-study-dates' element = {<ManageStudyDates />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
