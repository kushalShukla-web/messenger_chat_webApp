import React,{ forwardRef } from 'react'
import { Card,CardContent,Typography } from '@mui/material';
import "./Message.css"

const  Chat= forwardRef(({val,username,use,time},ref) => {
    const isuser = username=== use
    return (
        <div>
        <Card class={`container ${isuser && 'container__user'}`}>
        <CardContent>
        <Typography>
       {username}:{val}
       </Typography>
       </CardContent>
       </Card>
       </div>
    )
}
)
export {Chat}

