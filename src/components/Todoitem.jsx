import { React, useState } from "react";
import { Box, Checkbox, Typography, FormGroup, FormControlLabel, Button, TextField, MenuItem } from "@mui/material";
import { putTodoitem } from '../api'

function datestring(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let returnString = dayNames[date.getDay()] + ', ' + monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    return returnString
}


export default function Todoitem({id, name, isComplete, startDate, endDate}) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const startString = datestring(start)
    const endString = datestring(end)

    // hook for whether the item is complete or not
    const [complete, setComplete] = useState(isComplete);
    // boolean that is true when user is trying to edit a todo item
    const [edit, setEdit] = useState(false);

    const [newName, setNewName] = useState(name);
    // hooks for start date
    const [startMonth, setStartMonth] = useState(start.getMonth());
    const [startDay, setStartDay] = useState(start.getDay());
    const [startYear, setStartYear] = useState(start.getFullYear());

    const [endMonth, setEndMonth] = useState(start.getMonth());
    const [endDay, setEndDay] = useState(start.getDay());
    const [endYear, setEndYear] = useState(start.getFullYear());


    if (edit) {
        return (
            <Box display='flex' flexDirection='column' border='1px solid black' width='50%' padding='15px' alignItems='space'>
                <Typography variant='h6' sx={{textDecoration: 'underline', fontWeight: 'bold'}}>Edit To do</Typography>
                <Box component='form'>
                    <Typography variant="body1" sx={{textDecoration: 'underline'}}>To do item</Typography>
                    <TextField variant="outlined" value={newName} onChange={(e) => setNewName(e.target.value)}/>
                    <Typography variant="body1" sx={{textDecoration: 'underline'}}>Start Date</Typography>
                    <Box display='flex'>
                        <TextField select helperText='Month' defaultValue={startMonth} onChange={(e) => setStartMonth(e.target.value)}>
                            <MenuItem key='January' value={1}>January</MenuItem>
                            <MenuItem key='February' value={2}>February</MenuItem>
                            <MenuItem key='March' value={3}>March</MenuItem>
                            <MenuItem key='April' value={4}>April</MenuItem>
                            <MenuItem key='May' value={5}>May</MenuItem>
                            <MenuItem key='June' value={6}>June</MenuItem>
                            <MenuItem key='July' value={7}>July</MenuItem>
                            <MenuItem key='August' value={8}>August</MenuItem>
                            <MenuItem key='September' value={9}>September</MenuItem>
                            <MenuItem key='October' value={10}>October</MenuItem>
                            <MenuItem key='November' value={11}>November</MenuItem>
                            <MenuItem key='December' value={12}>December</MenuItem>
                        </TextField>
                        <TextField helperText='Day' sx={{width: '70px'}} value={startDay} onChange={(e) => setStartDay(e.target.value)}/>
                        <TextField helperText='Year' sx={{width: '100px'}} value={startYear} onChange={(e) => setStartYear(e.target.value)}/>
                    </Box>
                    <Typography variant="body1" sx={{textDecoration: 'underline'}}>End Date</Typography>
                    <Box display='flex'>
                        <TextField select helperText='Month' defaultValue={endMonth} onChange={(e) => setEndMonth(e.target.value)}>
                            <MenuItem key='January' value={1}>January</MenuItem>
                            <MenuItem key='February' value={2}>February</MenuItem>
                            <MenuItem key='March' value={3}>March</MenuItem>
                            <MenuItem key='April' value={4}>April</MenuItem>
                            <MenuItem key='May' value={5}>May</MenuItem>
                            <MenuItem key='June' value={6}>June</MenuItem>
                            <MenuItem key='July' value={7}>July</MenuItem>
                            <MenuItem key='August' value={8}>August</MenuItem>
                            <MenuItem key='September' value={9}>September</MenuItem>
                            <MenuItem key='October' value={10}>October</MenuItem>
                            <MenuItem key='November' value={11}>November</MenuItem>
                            <MenuItem key='December' value={12}>December</MenuItem>
                        </TextField>
                        <TextField helperText='Day' sx={{width: '70px'}} value={endDay} onChange={(e) => setEndDay(e.target.value)}/>
                        <TextField helperText='Year' sx={{width: '100px'}} value={endYear} onChange={(e) => setEndYear(e.target.value)}/>
                    </Box>
                    <Button variant='outlined' onClick={async (e) => {
                        e.preventDefault();
                        const newStartDate = new Date(startMonth + '-' + startDay + '-' + startYear);
                        const newEndDate = new Date(endMonth + '-' + endDay + '-' + endYear)
                        try {
                            await putTodoitem(id, newName, complete, newStartDate, newEndDate);
                            setEdit(false);
                        } catch (error) {
                            console.error(error);
                        }
                    }}>Submit</Button>
                </Box>
            </Box>
        )
    }

    return (
        <Box display='flex' flexDirection='column' border='1px solid black' width='50%' padding='15px' alignItems='space'>
            <Typography variant='h6' sx={{textDecoration: 'underline', fontWeight: 'bold'}}>{newName}</Typography>
            <Typography variant='h6' sx={{textDecoration: 'underline'}}>Start Time:</Typography><Typography variant="subtitle1">{startString}</Typography>
            <Typography variant='h6' sx={{textDecoration: 'underline'}}>End Time:</Typography><Typography variant="subtitle1">{endString}</Typography>
            <Box display='flex' alignItems='space-between'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Complete" checked={ complete } onClick={(e) => setComplete(!complete)}/>
                </FormGroup>
                <Button variant='contained' onClick={(e) => setEdit(true) }>Edit</Button>
                <Button variant='contained' color='error'>Delete</Button>
            </Box>
        </Box>
    )
}