import React, { useState } from 'react';
import clsx from 'clsx';
//import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
//  CardActions,
  CardHeader,
  CardContent,
  //Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
//import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import mockData from './data';
//import { StatusBullet } from './StatusBullet';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 500
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

// const statusColors = {
//   delivered: 'success',
//   pending: 'info',
//   refunded: 'danger'
// };

const TopTenCountries = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [orders] = useState(mockData);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardHeader
        
        title="Top 10 Countries by requests"
      />
      <Divider />
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SNo</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Requests</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow hover key={order.id}>
                    
                    <TableCell>{order.SNo}</TableCell>
                    <TableCell>{order.Country}</TableCell>
                    <TableCell>{order.Requests}</TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        {order.status}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
     
    </Card>
  );
};

TopTenCountries.propTypes = {
  className: PropTypes.string
};

export default TopTenCountries;
