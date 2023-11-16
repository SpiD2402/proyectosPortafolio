import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRepos, searchUser } from "../../services";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const User = () => {
  const { username } = useParams();
  const history = useNavigate();

  const [userDetail, setUserDetail] = useState();
  const [repos, setRepos] = useState();

  const fetchUser = async () => {
    const data = await searchUser(username);
    setUserDetail(data);
    console.log(data);
  };

  const fetchRepos = async () => {
    const data = await getRepos(username);
    setRepos(data);
    console.log(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchRepos();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const retroceder =()=>{
    history(-1)
  }

  return (
    <Container maxWidth="md">
      {userDetail && (
        <Box mt={10}>
          <Grid container spacing={3}>
            <Grid xs={12}  md={4} >
              <Box mb={1} >
                <img
                  style={{ borderRadius: "50%"}}
                  width={200}
                  src={userDetail.avatar_url}
                  alt={userDetail.login}

                />
              </Box>
                <Card>
                    <CardContent>
                    <Typography mb={1} variant="h6">
                {userDetail?.name}
              </Typography>

              <Typography mb={3} variant="h6" color={"#000000"}>
                {userDetail?.login}
              </Typography>
              <Button variant="contained" fullWidth>
                Edit Profile
              </Button>
                    </CardContent>
                </Card>
            <Card style={{margin:"1rem 0"}}>
                <CardContent>
                <Typography  mb={3} variant="body1">
                {userDetail?.bio}
              </Typography>
              <Typography mb={2} variant="body1">
                {userDetail?.company}
              </Typography>

              <Typography mb={2}>Followers: {userDetail?.followers}</Typography>

              <Button variant="contained" onClick={retroceder} fullWidth>Retroceder</Button>
                </CardContent>
            </Card>
            </Grid>
            <Grid xs={12} item md={8} >
              <Typography variant="h5">Repositorios</Typography>
              {repos?.map((repo) => (
                <Box mt={3}>
                  <Card>
                    <CardContent>
                          <Typography
                            sx={{ cursor: "pointer" }}
                            variant="h6">
                           {capitalizeFirstLetter(repo.name)}
                         </Typography>
                        <Typography>
                            {repo.language}
                        </Typography>
                        <Typography>
                            {repo.created_at}
                        </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};
export default User;
