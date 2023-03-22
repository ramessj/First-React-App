import { useState } from 'react';
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {

    // const [ counter, setCunter ] =  useState( 0 );
    const [ counter, setCounter ] =  useState( value );

    const sumarUno = ()=>{
        //setCunter(counter + 1);

        // setCounter( (c) => c + 1);
        setCounter( counter + 1);

    };


    const restarUno = () =>{
        setCounter (counter - 1);
    };

    const restartCounter = () => {
        setCounter( value )
    }


  return (
    <>
    <h1>Counter App</h1>
    
    <h2>{counter}</h2>
    <div className='buttonsDiv'>
    <button type='button' onClick={ sumarUno }>+1</button>
    <button type='button' onClick={ restarUno }>-1</button>
    <button type='button' onClick={ restartCounter }>Reset</button>
    </div>
    </>
  )
};

CounterApp.defaultProps = {
    value: 0,
}
