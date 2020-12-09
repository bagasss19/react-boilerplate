import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-pro-sidebar/dist/css/styles.css'
import '../containers/HomePage/index.css'
import { Bar } from 'react-chartjs-2';

function Covidbar() {
    const [data, setdata] = useState({});

    useEffect(() => {
        axios
            .get('https://covid19.mathdro.id/api')
            .then(function (response) {
                // handle success
                setdata({
                    labels: ['Confirmed', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'World Corona Cases',
                            backgroundColor: 'rgba(0,99,132,0.2)',
                            borderColor: 'rgba(0,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(0,99,132,0.4)',
                            hoverBorderColor: 'rgba(0,99,132,1)',
                            data: [response.data.confirmed.value, response.data.recovered.value, response.data.deaths.value]
                        }
                    ]
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <>
            <Bar
                data={data}
                width={400}
                height={300}
                options={{ maintainAspectRatio: true }}
            />
        </>
    );
}

export default Covidbar;
