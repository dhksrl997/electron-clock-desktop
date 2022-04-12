import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import moment from "moment";

function App() {
    const [time, setTime] = useState(undefined);
    setInterval(() => {
        setTime(moment().format("YYYY-MM-DD HH:mm:ss"));
    }, 1000);

    return (
        <div className="App">
            <header className="App-header">
                <b>{time}</b>
            </header>
        </div>
    );
}

export default App;
