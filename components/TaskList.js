import React from 'react'
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import {
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton   
} from '@material-ui/core'

const TaskList = ({ tasks, deleteTask }) => {

  return (
    <List
      tasks={tasks}
    >
    {tasks.map((task, id) => (
      <ListItem key={id.toString()} dense button>
        <CheckIcon />
        <ListItemText primary={task} />
        <ListItemSecondaryAction>
          <IconButton
            onClick={() => deleteTask(id)}
          >
            <ClearIcon  />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
    )
}

export default TaskList
