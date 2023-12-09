
import React, {useEffect, useState} from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import img from '../images/shoes.jpg'


const Section = ()=>{

const[myData, setMyData]=useState([]);

const fetchedMyData = async () =>{
 try {
        let response = await fetch ('https://jsonplaceholder.typicode.com/posts');
        let data =await response.json();
        setMyData(data);
        console.log(data);


    } catch (error) {
       console.log(error); 
    }
};
useEffect(() =>{
fetchedMyData();
}, []);

return (
<>
<Grid
  container
  direction="row"
  spacing={1}
  justifyContent="space-evenly"
  alignItems="center"
  sx={{marginTop:"20px"}}
>
    {myData.map((item)=>(
    <Card sx={{ maxWidth: 345, borderRadius:"2px", marginTop:"20px"}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt="green iguana"
        sx={{marginTop:"20px"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{textTransform:"capitalize", textAlign:"center", fontWeight:"600", fontFamily:"roboto"}}>
      hiksssmm
        </Typography>
        <Typography variant="body3" color="text.secondary" sx={{marginLeft:"90px"}} >
      hello
        </Typography>
      </CardContent>
    </CardActionArea> 
  </Card>

    ))}


</Grid>

</>



);
}
export default Section

