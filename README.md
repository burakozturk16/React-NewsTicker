# React-NewsTicker

**React-NewsTicker** is a ticker react component which you can use for slide multiple items in.

## Features:

- Slide child elements left to right or reverse
- Different sliding modes.
- Speed, starting and stopping ticker.
- onComplete event.


## Example: 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Ticker from "./components/Ticker";

class App extends React.Component {
    onFinish(){
        
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
                    onComplete={this.onFinish}
                >
                    {(index) => (
                        <>
                            <h1>I'm sliding like a star</h1>
                        </>
                    )}
                </Ticker>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));

```

## Props

| **Name**  | **Type**         | **Default** 
| :-------- | :--------------- | :---------- 
| speed     | number           | `5`         
| direction | string           | `toLeft`    
| mode      | string           | `chain`     
| height    | string or number | `auto`      
| offset    | string or number | `0`         
| move      | boolean          | `true`
| onComplete| function         | null


## Dependencies

No dependecies need
