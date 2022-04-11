import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styles from './Footer.module.css'
const useStyle = makeStyles({

    hearts: {
        color: 'red'
    }
})
const Footer = () => {
    const classes = useStyle();
  return (
    <footer className={styles.footer} >
        <Container className={classes.container}>
            <Typography variant='p'>
                &copy; Copyright <strong>Samfolio.</strong> All rights Reserved
            </Typography>
            <Typography variant='body1'>Built with <FontAwesomeIcon
            className={classes.hearts}  icon= {faHeart}/> by Oladejo Samuel</Typography>
        </Container>
    </footer>
  )
}

export default Footer