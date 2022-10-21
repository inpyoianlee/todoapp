import { Box, Typography, Button, TextField, MenuItem } from "@mui/material";
import { React, useState } from "react";
import { postTodoitem } from '../api';

function datestring(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let returnString = dayNames[date.getDay()] + ', ' + monthNames[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    return returnString
}

const Addnewitem = () => {
    const defaultDate = new Date();

    const [addBool, setAddBool] = useState(false);
    const [newName, setNewName] = useState('');

    const [startMonth, setStartMonth] = useState(defaultDate.getMonth())
    const [startDay, setStartDay] = useState(defaultDate.getDay())
    const [startYear, setStartYear] = useState(defaultDate.getFullYear())

    const [endMonth, setEndMonth] = useState(defaultDate.getMonth())
    const [endDay, setEndDay] = useState(defaultDate.getDay())
    const [endYear, setEndYear] = useState(defaultDate.getFullYear())


    if (addBool) {
        return (
            <Box display='flex' flexDirection='column' border='1px solid black' width='50%' padding='15px' alignItems='space'>
                <Typography variant='h6' sx={{textDecoration: 'underline', fontWeight: 'bold'}}>Add new to do item</Typography>
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
                        const newStartString = new Date(startMonth + '-' + startDay + '-' + startYear);
                        const newEndString = new Date(endMonth + '-' + endDay + '-' + endYear)
                        try {
                            await postTodoitem(newName, false, newStartString, newEndString);
                            setAddBool(false);
                        } catch (error) {
                            console.error(error);
                        }

                        alert('Item succesfully added!')
                        window.location.reload(false);
                    }}>Submit</Button>
                </Box>
            </Box>
        )
    }

    return (
        <Button variant='contained' onClick={() => setAddBool(true)}>Add to do item</Button>
    )

}

export default Addnewitem;