import MenuList from './menu-list'
import './style.css'

const TreeView = ({menus = []}) => {
  return (
    <ul className='tree-view-container'>
        <MenuList list={menus}/>
    </ul>
  )
}

export default TreeView