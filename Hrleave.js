import React, { useState } from 'react';
import users from './userdetails.json'
import { Card,Grid,CardHeader, GridColumn, GridRow, CardContent,Button } from 'semantic-ui-react';
function Hrleave()
{
    const [state,setState]=useState(users);
    const Handle=(e,action)=>
    {
        if (action === "accepted") {
            setState((prev) => {
                const updatedState = prev.map((item) => {
                    if (item.id===e.id) {
                        return { ...item, Status: "Accepted" };
                    }
                    return item;
            });
                return updatedState;
            });
        }
        if (action === "denied") {
            setState((prev) => {
                const updatedState = prev.map((item) => {
                    if (item.id===e.id) {
                        return { ...item, Status: "Declined" };
                    }
                    return item;
            });
              return updatedState;
        });
        }
    }
    return(
        <>
        <div style={{marginLeft:"200px"}}>
        <Grid columns={2} divided>
            <GridRow>
                {
                state.map((element)=>
                (
                    <GridColumn>
                        <Card>
                            <CardHeader>Name:{element.name}</CardHeader>
                            <CardHeader>Department:{element.department}</CardHeader>
                            <CardContent>Reason :{element.Reason}</CardContent>
                            <CardContent extra>
                            {(element.Status==="")?
                             (<div className='ui two buttons'>
                             <Button basic color='green'  onClick={()=>Handle(element,"accepted")}>
                             Accept
                            </Button>
                            <Button basic color='red' onClick={()=>Handle(element,"denied")}>
                            Decline
                            </Button>
                            </div>):((element.Status==="Accepted")?(<Button style={{backgroundColor:"green",color:"white"}}>Accepted</Button>):(<Button style={{backgroundColor:"red",color:"white"}}>Declined</Button>))}
                             </CardContent>
                        </Card>
                    </GridColumn>
                ))
            }
            </GridRow>
        </Grid>
        </div>
        </>
    )
}
export default Hrleave;