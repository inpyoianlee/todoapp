import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Header, Todoitem} from './components'
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { Box, CssBaseline, Grid } from '@mui/material';
import { getTodoitems } from './api'

const App = () => {
  const [todoitems, setTodoitems] = useState([])

  async function getAllTodoitems() {
    try {
      const allTodoitems = await getTodoitems();
      setTodoitems(allTodoitems)
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => getAllTodoitems())

  console.log(todoitems)

  return (
    <Box display='flex' flexDirection='column' alignItems='center' width='100%' height='100%'>
      <CssBaseline />
      <Header />

    </Box>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
