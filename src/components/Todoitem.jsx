import { Box, Checkbox, Typography, FormGroup, FormControlLabel, Button } from "@mui/material";
import React from "react";


export default function Todoitem({id, name, isComplete, startDate, endDate}) {
    if (!id) {
        return <></>;
    }

    return (
        <Box display='flex' flexDirection='column' border='1px solid black' width='50%' padding='15px' alignItems='space'>
            <Typography variant='h6' sx={{textDecoration: 'underline', fontWeight: 'bold'}}>{name}</Typography>
            <Typography variant='h6' sx={{textDecoration: 'underline'}}>Start Time:</Typography><Typography variant="subtitle1">{startDate}</Typography>
            <Typography variant='h6' sx={{textDecoration: 'underline'}}>End Time:</Typography><Typography variant="subtitle1">{endDate}</Typography>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Complete" />
            </FormGroup>
            <Button variant='contained'>Edit</Button>
            <Button variant='contained' color='error'>Delete</Button>
        </Box>
    )
}