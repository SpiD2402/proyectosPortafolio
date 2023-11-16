import { useState } from "react"
import {Alert, Avatar, Button, Card, CardContent, Container, Grid, TextField} from "@mui/material"
import { Link } from "react-router-dom";

const Search =()=>{
    const [username,setUsername] = useState("");
    

    const handleInputChange=(e)=>{
        setUsername(e.target.value);
    }
    return (
        <Container  style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
          
        <Card style={{ maxWidth: "500px",padding:"4rem 1rem"}}>
        
          <CardContent  >
         
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Avatar sx={{width:"70px",height:"70px",margin:"1rem auto"}}/>
                <TextField
                  label="Buscar usuario de GitHub"
                  onChange={handleInputChange}
                  value={username}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                
                <Link to={`/users/${username}`}>
                  <Button variant="contained" fullWidth>
                    Buscar
                  </Button>
                </Link>
              </Grid>
              
            </Grid>
          </CardContent>
        </Card>
      </Container>
    )


}

export default Search;