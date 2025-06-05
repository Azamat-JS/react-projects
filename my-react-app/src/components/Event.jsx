

const Event = () => {
  const handleClick = (e) => e.target.textContent = "UOCH!"
  return (
    <button onDoubleClick={(e) => handleClick(e)}>Click me</button>
  )
}

export default Event