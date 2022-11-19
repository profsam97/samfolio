import React from "react";
import {Card, Rating, Stack, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import {ControlPoint, DeleteOutline, FavoriteBorder, RemoveCircleOutline} from "@mui/icons-material";

const CartCards : React.FC  = () => {

    return (

        <Card className={'cardHover'} sx={{ maxWidth: {lg: 400},  minWidth: { xs: 50, sm: 250, lg: 300},mb:2,  mt:3, position: 'relative' }}>
            <Box sx={{display: 'flex'}}>
                <Image
                    height={130}
                    width={150}
                    placeholder={'blur'}
                    blurDataURL={'https://via.placeholder.com/300.png/09f/fff'}
                    src={'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&h=380'}
                />
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'space-between'}}>
                    <Stack direction={'row'} spacing={5}  mt={0} mx={2}>
                        <Stack spacing={0.5} mt={0} mx={2}>
                            <Typography gutterBottom variant="h6" component="div">
                                Item Name
                            </Typography>
                            <Typography gutterBottom variant="body2" mt={2} component="div">
                                L
                            </Typography>
                        </Stack>
                        <Typography  >
                            <DeleteOutline className={'hoverIcon'} sx={{mt:0.3}} />
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} justifyContent={'space-between'} spacing={0.5} mt={0} mx={2}>
                        <Typography variant={'body2'} mx={2} gutterBottom>
                            Cost
                        </Typography>
                        <Stack direction={'row'}>
                            <Typography variant={'body2'} gutterBottom>
                                {/* + icon */}
                                <RemoveCircleOutline/>
                            </Typography>
                            <Typography variant={'body2'} gutterBottom>
                                1
                            </Typography>
                            <Typography variant={'body2'} gutterBottom>
                                {/* - icon */}
                                <ControlPoint/>
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Card>
    )
}
export default CartCards;