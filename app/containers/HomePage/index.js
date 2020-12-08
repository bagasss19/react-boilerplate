/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import axios from 'axios'
import Covidwidget from '../../components/covidwidget'

export default function HomePage() {
  const [data, setdata] = useState([])

  useEffect(() => {
    axios.get('https://covid19.mathdro.id/api')
      .then(function (response) {
        // handle success
        console.log(response)
        setdata(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <p>{data && JSON.stringify(data.confirmed)}</p>
      <p>{data && JSON.stringify(data.recovered)}</p>
      <p>{data && JSON.stringify(data.deaths)}</p>
      {/* <Covidwidget/> */}
    </>
  );
}
