import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './board.css' ;

const Board = (props) => {
    const content = props.cells ;
    const flip = (index) => {
    if (content [index] === '') {
        content[index] = props.turn;
        props.onChange (props.turn === 'X' ? 'O' : 'X') ;
        props.onCellsChange (content) ;
        console.log (content) ;
        const currentWinner = evaluate() ;
        if (currentWinner != '') {
            //const clearBoard = clear() ;
            props.onWin (currentWinner , content) ;
            console.log (content) ;
        }
        console.log ('current winner' , currentWinner) ;
    }
    }

    const [winner , setWinner] = useState ('') ;
    //useEffect (() => evaluate , [content]) ;
    const evaluate = () => {
        
        if (content[0] === content[1] && content[0] === content[2] && content[0] !== '')
            {return (content[0]) ;}
        if (content[3] === content[4] && content[3] === content[5] && content[3] !== '')
            {return (content[3]) ;}
        if (content[6] === content[7] && content[6] === content[8] && content[6] !== '')
            {return (content[6]) ;}
        if (content[0] === content[3] && content[0] === content[6] && content[0] !== '')
            {return (content[0]) ;}
        if (content[1] === content[4] && content[1] === content[7] && content[1] !== '')
            {return (content[1]) ;}
        if (content[2] === content[5] && content[2] === content[8] && content[2] !== '')
            {return (content[2]) ;}
        if (content[0] === content[4] && content[0] === content[8] && content[0] !== '')
            {return (content[0]) ;}
        if (content[2] === content[4] && content[2] === content[6] && content[2] !== '')
            {return (content[2]) ;}
        let thereIsEmptyCells = false ;
        content.forEach(element => {
            if (element === '')
                thereIsEmptyCells = true ;
        });
        return (thereIsEmptyCells ? '' : 'draw') ;
    } 

    // const clear = () => {
    //     let tempContent = [...content] ;
    //     tempContent.forEach((element , index) => {
    //         tempContent[index] = '' ;
    //     });
    //     console.log ('temp' , tempContent) ;
    //     setContent (tempContent) ;
    // }
    
  return (
    <div className='wrapper'>
        <div className="infoBoard">
            <span>X wins : {props.score.xWin}</span>
            <span>| </span>
            <span>O wins : {props.score.oWin}</span>
            <span>| </span>
            <span>Turn : {props.turn}</span>
        </div>
        <div className="boardContent">
            {
                content.map ((item , index) => 
                <button key={index} onClick = {()=> flip (index)}
                className = {item == '' ? '' : 'filled'} 
                >{item} </button>
                )
            }
        </div>
    </div>
  )
}

export default Board;