import {useEffect, useState} from "react";
import moment from "moment";
import img1 from './images/pic1.jpeg';
import img2 from './images/pic2.jpeg';
import img3 from './images/pic3.png';

function App() {
    const [time, setTime] = useState(moment().format("HH:mm:ss").toString());
    const [imageURL, setImageURL] = useState(img1);
    const [index, setIndex] = useState(0);

    const urls = [img1, img2, img3];

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(moment().format("HH:mm:ss").toString());
        }, 1000);

        const indexChanger = setInterval(() => {
            setIndex(index => index + 1 === urls.length ? 0 : index + 1)
            console.log(urls[index]);
            console.log(index);
        }, 3000);

        return () => {
            clearInterval(timer);
            clearInterval(indexChanger);
        };
    }, [])


    useEffect(() => {
        setImageURL(urls[index]);
    }, [index]);


    const containerStyle = {
        position: 'relative',
        textAlign: 'center',
        color: 'black',
        width: '100%',
        height: '100%',
        overflow:'hidden'
    }

    const timeStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '120px',
        zIndex: '40',
        color:'white'
    }

    const imageStyle = {
        width: '800px',
        height: '600px',
        left:'0',
        top:'0',
    };

    return (
        <div className="App" style={{margin: '0px', width: '100%', height: '100%',overflow:'hidden'}}>
            <div className="container" style={containerStyle}>
                <b style={timeStyle}>{time}</b>
                <img src={imageURL} style={imageStyle}/>
            </div>
        </div>
    );
}

export default App;
