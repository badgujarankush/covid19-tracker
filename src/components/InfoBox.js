import React from 'react'
import {Card, CardContent,Typography} from "@material-ui/core"
import './InfoBox.css'
function InfoBox({title,cases,total}) {
    return (
        <div>
            <Card className="infoBox" style={{ backgroundColor: "#011c29"}}>
                <CardContent >
                    {/* Title Corona cases
                    <Typography className="infoBox_title" >
                        {title}
                    </Typography>

                    {/* Today cases +48k */}
                    {/* <h2 className="infoBox_cases" >{cases}</h2> */}

                    {/* Total cases : 1.2M*/}
                    {/* <Typography className="infoBox_total" >{total} Total</Typography> */}

                    {/* Title Corona cases */}
                    <h4 className="infoBox_title" >
                        {title}
                    </h4>

                    {/* Today cases +48k */}
                    <h2 className="infoBox_cases" >{cases}</h2>

                    {/* Total cases : 1.2M*/}
                    <h4 className="infoBox_total" >{total} Total</h4>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox
