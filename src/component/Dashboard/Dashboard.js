import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  PendingApproval,
  PendingShipment,
  TasksProgress,
  ClosedThisMonth,
  LatestSales,
 // UsersByDevice,
  Replenish

} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <PendingApproval />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
                  <TasksProgress />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
            <PendingShipment />

        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <ClosedThisMonth />
        </Grid>
        <Grid
          item
          xs={6}
          sm={3}
        >
          <LatestSales />
        </Grid>
        
        
        <Grid
          item
          xs={6}
          sm={9 }
        >
  
          <Replenish/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
