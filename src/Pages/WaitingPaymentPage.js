import '../App.css';
import React, { useState } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import demo from '../demo.json';
import SecondNavbarHome from '../components/SecondNavBarHome';
import NavBarWaitinPayment from '../components/NavBarWaitinPayment';
import ToolBar from '../components/ToolBar';


function WaitingPaymentPage() {
  const [data, setData] = useState(demo);

  return (
    <div className='grid'>
    <NavBarWaitinPayment/>
    <ToolBar/>
      <Grid className="myGridOne"
     
        data={data}>
        <Column className='grid-column' field='Rolling Total(6 Periods)' title='Rolling Total(6 Periods)' />
        <Column field='Second Description' title='Pending Submission' />
        <Column field='Third Description' title='Sales Aproval' />
        <Column field='Fourth Description' title='Order Verification' />
        <Column field='Fifth Description' title='Waiting Payment' />
        <Column field='Sixth Description' title='Submitted for Payroll' />
        <Column field='Sixth Description' title='Pending Final Approval' />
        <Column field='Firts Description' title='Waiting to be Paid' />
        <Column field='Second Description' title='Being Paid' />
        <Column field='Third Description' title='Archive' />
        <Column field='Fourth Description' title='Grand Total' />
      </Grid>
    <SecondNavbarHome/>
    <Grid className="myGridTwo"
        data={data}>
        <Column field='Firts Description' title='Firts Description' />
        <Column field='Second Description' title='Second Description' />
        <Column field='Third Description' title='Third Description' />
        <Column field='Fourth Description' title='Fourth Description' />
        <Column field='Fifth Description' title='Fifth Description' />
        <Column field='Sixth Description' title='Sixth Description' />
      </Grid>
    </div>
  );
}

export default WaitingPaymentPage;
