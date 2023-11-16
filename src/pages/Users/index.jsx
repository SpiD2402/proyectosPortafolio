import { useNavigate, useParams } from 'react-router-dom';
import {searchUsers} from '../../services';
import { useEffect, useState } from 'react';
import { Box, Button, CircularProgress, Container, Typography } from '@mui/material';
import CustomCard from '../../components/CustomCard';

const Users =()=>{

    const {username}=useParams();                                                                                                
    const history = useNavigate();



    const [usersList,setUsersList]= useState([]);
    
    const fetchUsers=async()=>{

        const data = await searchUsers(username);
        setUsersList(data.items);
        console.log(data);
    }

    const handleClick=(username)=>{
        history(`/user/${username}`)
    }
    const regresar=()=>{
        history(-1)
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    return (

        <Container>

            <Box>
                <Typography variant='h6' my={2}>
                    Resultado de la busqueda del usuario:{username}
                    
                </Typography>
                <Button  size='large'  onClick={regresar} variant='contained'>Volver</Button>
            </Box>
            <Box>
                {
                    usersList.length>0 ?
                    usersList.map((user,index)=>(
                        
                            <CustomCard
                            key={index}
                            user={user}
                            handleClick={handleClick}
                            
                            />
                           
                        
                    )) :(
                        <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh"
                      >
                        <CircularProgress color="success" />
                      </Box>
                    )
                }

            </Box>
        </Container>

    )

}

export default Users;