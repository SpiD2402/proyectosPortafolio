import { Typography } from "@mui/material";
import BussinesRoundedIcon from "@mui/icons-material/BussinesRoundedIcon"
import EmailRoundedIcon from "@mui/icons-material/EmailRoundedIcon"
const TypographyIconBio=({text,icon,mt=2})=>{

    const icons ={
        company:<BussinesRoundedIcon/>,
        email:<EmailRoundedIcon/>,
    }

    return (

        <Typography mt={mt} variant="body2" sx={{display:"flex",alignItems:"center"}}>
            {icons[icon]}
            &nbsp;&nbsp; {text}
        </Typography>

    )

}

export default TypographyIconBio;





