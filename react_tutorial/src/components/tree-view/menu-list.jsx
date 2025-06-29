import MenuItem from './menu-item'
import './style.css'

const MenuList = ({list = []}) => {
  return (
    <div className='menu-list-container'>
        {
            list && list.length ? 
            list.map((listItem) => <MenuItem item={listItem}/>)
            : null
        }
    </div>
  )
}

export default MenuList