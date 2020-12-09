/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Covidwidget from '../../components/covidwidget';
import Covidbar from '../../components/covidbar';
import Covidindo from '../../components/covidindobar'
import Dailycovid from '../../components/dailycovid'
import './index.css'

export default function HomePage() {
  return (
    <div className="main">
      <h1 style={{marginLeft : "200px"}}>
        <FormattedMessage {...messages.header} />
      </h1>
      <Dailycovid/>
      <Covidwidget /><br></br>
      <Covidbar/><br></br>
      <Covidindo/><br></br>
      
    </div>
  );
}
