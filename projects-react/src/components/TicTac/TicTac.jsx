import './tictac.css'

function Square({value}){
    return <button className='square'>{value}</button>
}

const TicTac = () => {
  return (
    <div className='tic-tac-toe-container'>
        <div className='row'>
            <Square />
            <Square />
            <Square />
        </div>
        <div className='row'>
            <Square />
            <Square />
            <Square />
        </div>
        <div className='row'>
            <Square />
            <Square />
            <Square />
        </div>
    </div>
  )
}

export default TicTac