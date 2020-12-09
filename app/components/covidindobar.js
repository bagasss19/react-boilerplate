import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'react-pro-sidebar/dist/css/styles.css'
import '../containers/HomePage/index.css'
import { HorizontalBar } from 'react-chartjs-2';

function Covidindobar() {
    const [data, setdata] = useState({});
      
    useEffect(() => {
        axios
            .get('https://covid19.mathdro.id/api/countries/indonesia')
            .then(function (response) {
                // handle success
                setdata({
                    labels: ['Confirmed', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'Indonesia Corona Cases',
                            backgroundColor: 'rgba(120,19,62,0.2)',
                            borderColor: 'rgba(120,19,62,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(120,19,62,0.4)',
                            hoverBorderColor: 'rgba(120,19,62,1)',
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
        <div style={{marginLeft : "200px", width : "600px"}}>
            <HorizontalBar data={data} />
        </div>
    );
}

export default Covidindobar;
