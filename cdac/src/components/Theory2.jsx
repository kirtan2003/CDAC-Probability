import { Card, CardContent, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Theory2 = () => {

    let navigate = useNavigate();
    const handleSimulation1=()=>{
        navigate('/simulation1');
    }
    return (
        <div>
            <Card
                sx={{
                    border: "1px solid #0C2D48",
                    margin: "50px",
                    backgroundColor: "#fff",
                    boxShadow: "2px 5px 10px 2px grey",
                    borderBottomLeftRadius: '20px',
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                }}
            >
                <CardContent>
                    <Typography
                        gutterBottom
                        variant='h4'
                        component="div"
                        sx={{
                            // display: "flex",
                            // alignItems: "center",
                            // justifyContent: "center",
                            // borderBottom: "1px solid #0C2D48",
                            // padding: "10px",
                            fontWeight: "1000",
                            fontFamily: 'Poppins',
                        }}
                    >

                    </Typography>
                </CardContent>
                <div className='container '>
                    Probability means possibility. It is a branch of mathematics that deals with the occurrence of a random event. The value is expressed from zero to one.
                </div>
                {/* <div className='img1'>
                    <img src={probability_formula} alt="" />
                </div> */}

            </Card>
            <div className='flex justify-center mb-3'>
                <a class="next" onClick={handleSimulation1}>Simulation &raquo;</a>
            </div>
        </div>
    )
}

export default Theory2;
