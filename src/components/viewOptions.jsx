
import React from 'react'
import {Box, Button} from '@mui/material'

function  ViewOptions() {
    return(
        <>
            <Box sx={{
                width: '380px',
                height: '200px',
                backgroundColor: 
                // transparent black
                'rgba(0, 0, 0, 0.5)',
                filter: 'blur(3px)',
                
            }}>
                <Button sx={{
                    
                    position: 'relative',
                    filter: 'revert',
                    zIndex: '1',
                    top: '-120%px',
                    left: '-140%px',backgroundColor: 'pink',
                    transform: '(-50%px, -50%px)',
                

                }}>
                     <Button sx={{
                    
                    filter: 'revert',
                    zIndex: '1',
                    position: 'relative',
                    top: '-120%px',
                    left: '-140%px',backgroundColor: 'pink',
                    transform: '(-50%px, -50%px)',
                

                }}></Button>
                    Hi
           
                </Button>


            </Box>
        
        
        </>
    )
}

export default ViewOptions