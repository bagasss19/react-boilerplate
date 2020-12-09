import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-pro-sidebar/dist/css/styles.css'
import '../containers/HomePage/index.css'
import { Doughnut } from 'react-chartjs-2';

function Dailycovid() {
    const [data, setdata] = useState({})
    const dailyDate = new Date()
    const day = dailyDate.getDate()
    const month = dailyDate.getMonth()
    const year = dailyDate.getFullYear()
    useEffect(() => {
        axios
            .get(`https://covid19.mathdro.id/api/daily/${month}-${day}-${year}`)
            .then(function (response) {
                // handle success
                setdata({
                    labels: [
                        response.data[0].countryRegion,
                        response.data[1].countryRegion,
                        response.data[2].countryRegion,
                        response.data[3].countryRegion,
                        response.data[4].countryRegion
                    ],
                    datasets: [{
                        data: [
                            response.data[0].confirmed,
                            response.data[1].confirmed,
                            response.data[2].confirmed,
                            response.data[3].confirmed,
                            response.data[4].confirmed],
                        backgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#032CFF',
                            '#4CFF57'
                        ],
                        hoverBackgroundColor: [
                            '#FF6384',
                            '#36A2EB',
                            '#FFCE56',
                            '#032CFF',
                            '#4CFF57'
                        ]
                    }]
                })
                console.log(response.data, "<<<<<<RESPONSE DAILY COVID")
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <>
            <h3 style={{textAlign : "center"}}>Top 5 Daily Cases </h3>
            <Doughnut data={data} />
        </>
    );
}

export default Dailycovid;
