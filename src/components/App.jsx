import React, { useState, useEffect } from 'react';
import MainHeader from './MainHeader';
import Intro from './Intro';
import Header from './Header';
import Input from './Input';
import List from './List';
import Footer from './Footer'
import { v4 as uuidv4 } from 'uuid';
import Typography from '@material-ui/core/Typography';

function App() {
  const [items, setItem] = useState(JSON.parse(localStorage.getItem('localValues')) || []);

  function addTodo(todo) {
    setItem((prevTodos) => {
      return [...prevTodos, todo]
    });
  };

  function handleDelete(id) {
    setItem((prevTodos) => {
      return prevTodos.filter((todo, index) => {
        return id !== index
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('localValues', JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <MainHeader />
      <Intro />
      <div  className="container">
        <Header />
        <Typography component={'span'}>
          <Input onAdd={addTodo}/>
          <ul>
            {items.map((item, index) =>( 
              <List
                key={uuidv4()} 
                id={index} 
                todoItem={item}
                onDelete={handleDelete}
              />
            ))}
          </ul>
          <Footer />
        </Typography>
      </div>
    </div>
  );
};

export default App;
