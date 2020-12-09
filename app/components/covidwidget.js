import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import 'react-pro-sidebar/dist/css/styles.css'
import '../containers/HomePage/index.css'
import { Doughnut } from 'react-chartjs-2';

function Covidwidget() {
    const [confirmed, setconfirmed] = useState(0);
    const [recovered, setrecovered] = useState(0);
    const [deaths, setdeaths] = useState(0);
    const [data, setdata] = useState({})

    function thousandSeparator(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        axios
            .get('https://covid19.mathdro.id/api')
            .then(function (response) {
                // handle success
                console.log(response);
                setconfirmed(response.data.confirmed.value);
                setrecovered(response.data.recovered.value);
                setdeaths(response.data.deaths.value);

                setdata({
                    labels: [
                        "Confirmed",
                        "Recovered",
                        "Deaths"
                    ],
                    datasets: [{
                        data: [
                            response.data.confirmed.value,
                            response.data.recovered.value,
                            response.data.deaths.value],

                        backgroundColor: [
                            '#FFCE56',
                            '#006827',
                            '#FF6384'
                        ],
                        hoverBackgroundColor: [
                            '#FFCE56',
                            '#006827',
                            '#FF6384'
                        ]
                    }]
                })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <div className="covid">
            <Card style={{ width: '18rem', backgroundColor: "lightpink", textAlign: "center" }}>
                <Card.Body>
                    <Card.Title style={{ fontWeight: "bolder" }}>Active Cases Right Now</Card.Title>
                    <p>Confirmed Cases : {confirmed && thousandSeparator(JSON.stringify(confirmed))}</p>
                    <p>Recovered Cases : {recovered && thousandSeparator(JSON.stringify(recovered))}</p>
                    <p>Death Cases {deaths && thousandSeparator(JSON.stringify(deaths))}</p>

                    <Doughnut data={data} />
                </Card.Body>
            </Card><br></br><br></br>
        </div>
    );
}

export default Covidwidget;
