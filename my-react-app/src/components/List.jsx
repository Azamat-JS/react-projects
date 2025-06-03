import React from 'react'
import PropTypes from 'prop-types';

const List = ({items = [], category = 'Category'}) => {

  // fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)) // Reverse Alphabetical
  // fruits.sort((a, b) => a.calories - b.calories); //Numeric
  // fruits.sort((a, b) => b.calories - a.calories); //Numeric

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 90)
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 90)

  const listItems = items.map(item => <li key={item.id}>
                             {item.name}: &nbsp;
                            <b>{item.calories}</b></li>);
  return (
    <>
    <h3 className='list-category'>{category}</h3>
    <ol className='list-items'>{listItems}</ol>
    </>
  )
}
List.propTypes = {
  items: PropTypes.array,
  category: PropTypes.string,
};
export default List