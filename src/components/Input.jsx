import React, { useState } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      },
    },
  }));

function Input(props) {
    const [todo, setTodo] = useState('');
    const [isError, setError] = useState(false); 
    const classes = useStyles();

    function handleChange(e) {
        let inputItem = e.target.value;
        setTodo(inputItem);
    }

    const myStyle = {
        fontSize: '12px',
        textAlign: 'left',
        color: 'red'
    }

    return (
        <React.Fragment>
            <form className={classes.root} autoComplete="off">
                <TextField 
                    type='text' 
                    value={todo} 
                    label='Add to the list...'
                    onChange={handleChange}
                   
                />
                <Zoom in={true} timeout={500}>
                    <Fab  color='secondary' onClick={(e) => {
                        if(todo === ''){
                            setError(true);
                            return;
                        }
                        e.preventDefault();
                        props.onAdd(todo);
                        setTodo('');
                    }}>
                    <EditIcon fontSize="small"/>
                    </Fab>
                </Zoom>
            </form>
            {isError && <small style={myStyle}>Please enter an input</small>}
        </React.Fragment>
    )
}

export default Input;
