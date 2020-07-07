import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';


function List(props) {
  
    return (
        <div>
            <li>
            <span onClick={(e) => {
                e.stopPropagation();
                props.onDelete(props.id);
            }}> <DeleteIcon style={{fontSize:'28px', color: '#f50057'}}/></span>
            {props.todoItem}
            </li>
        </div>
    )
}

export default List;