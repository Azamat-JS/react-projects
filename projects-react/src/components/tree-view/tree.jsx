import MenuList from './menu-list'
import './tree.css'

const TreeView = ({menus = []}) => {
  return (
    <div className='tree-view-container'>
        <MenuList list={menus}/>
    </div>
  )
}

export default TreeView