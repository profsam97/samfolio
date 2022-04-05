import React from 'react'
import Typography from '@mui/material/Typography'
export default function Typo(props) {
  return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            {...props.options}
          >
            {props.children}
          </Typography>
  )
}
