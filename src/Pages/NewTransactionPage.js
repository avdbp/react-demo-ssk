import React, { useState } from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import demo from '../demo.json'; 
function NewTransactionPage() {
  const [data, setData] = useState(demo);

  return (
    <div className='grid'>
      <Grid
        data={data}>
        <Column field='Rolling Total(6 Periods)' title='Rolling Total(6 Periods)' />
        <Column field='Second Description' title='Second Description' />
        <Column field='Third Description' title='Third Description' />
        <Column field='Fourth Description' title='Fourth Description' />
        <Column field='Fifth Description' title='Fifth Description' />
        <Column field='Sixth Description' title='Sixth Description' />
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

export default NewTransactionPage;
