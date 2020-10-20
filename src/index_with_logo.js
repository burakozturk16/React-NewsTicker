import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Ticker from "./components/Ticker";

const App = () => {
    const finalLoopCount = 3;  // loopCount
    const [loopCount, setLoopCount] = useState(0);
    const [isMoving, setIsMoving] = useState(true);
    const logo = require('./assets/images/logo.png');

    const onLoopComplete = () => {
        let tmpLoopCount = loopCount + 1;
        setLoopCount(tmpLoopCount);

        if(tmpLoopCount >= 2){
            document.getElementById('logo_pinned').style.display = 'block';
            document.getElementById('logo_animated').style.display = 'none';
        }

        if(tmpLoopCount === finalLoopCount){
            setIsMoving(false);
            onTickerComplete();
        }
    };

    // Ticker Complete
    const onTickerComplete = () => {
        alert("Ticker completed totaly");
    };

    return (
        <div>
            <img id="logo_pinned" src={logo} style={{width: 50, height: 50, display: 'none', float: 'left'}} />
            <Ticker
                mode="await" // chain, await, smooth
                speed={20}
                direction="toLeft"  // toLeft, toRight
                offset={0}
                height={50}
                onLoopComplete={onLoopComplete}
                move={isMoving}
                >
                {() => (
                    <>
                        <img id="logo_animated" src={logo} style={{width: 50, height: 50, display: 'block', float: 'left', zIndex: 0}} />
                        <h1 style={{display: 'block', float: 'left', backgroundColor: 'red'}}>Flaş, Flaş, Flaş... Az sonra... Hande kiminle görüntülendi... Az sonra...</h1>
                    </>
                )}
            </Ticker>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));

