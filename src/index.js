import React from 'react';
import ReactDOM from 'react-dom';
import Ticker from "./components/Ticker";

class App extends React.Component {
    finito(){
        //alert("bitti");
    };

    render() {
        return (
            <div>
                <Ticker
                    mode="smooth" // chain, await, smooth
                    speed={10}
                    direction="toLeft"  // toLeft, toRight
                    offset={0}
                    height={50}
                    onComplete={this.finito}
                >
                    {(index) => (
                        <>
                            <h1>Kayıyorum bir yıldız gibi..</h1>
                        </>
                    )}
                </Ticker>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
