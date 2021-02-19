import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core/'

const InputField = ({ saveTask }) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        saveTask(value)
        setValue('')
    }

    const handleChange = (e) => setValue(e.target.value)
    
    return (
        <form
          onSubmit={handleSubmit}
          id="my-form"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
            }}
        >
          <TextField
            variant='outlined'
            placeholder='Add task'
            margin='normal'
            onChange={handleChange}
            value={value}
          />
          <Button
            variant="contained" 
            color="secondary"
            form='my-form' 
            type="submit"
            onClick={handleSumbit}
          >
            ADD TASK
          </Button>
        </form>
    )}

export default InputField
