
const Button = () => {
  let count = 0;
  const handleClick = (name) => {
    if(count < 3){
      count++;
      console.log(`${name} you clicked me ${count} time`)
    }else{
      console.log(`${name} stop clicking me!`)
    }
  }
  return (
    <button className='button' onClick={() => handleClick('User')}>Click me</button>
  )
}

export default Button