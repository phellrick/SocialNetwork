import './App.css';
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Main from "./components/main/Main";
import {BrowserRouter} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Header/>

                <Main/>

        </div>
    );
}

export default App;
