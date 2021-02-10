import React from 'react'
import { makeStyles, fade } from '@material-ui/core/styles'
import { FormControl, Grid, TextField, Select, Button } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import TableRow from '@material-ui/core/TableRow'
import customers from '../customers.json'
import Pagination from '@material-ui/lab/Pagination'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const useStyles = makeStyles(({ palette, ...theme }) => ({
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  table: {
    minWidth: 640,
  },
}))
const Data = () => {
  const classes = useStyles()
  return (
    <div>
      {/* <Grid container>
        <Grid item xs={6} sm={3}>
          <h3>Customers</h3>
          <small>Martfury Customers</small>
        </Grid>
        <Grid item xs={6} sm={3}>
          <form>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <TextField
              id="standard-basic"
              label="Search"
              //   type="search"
              label="search*"
              //   style={{ width: '50%' }}
              label="Search input"
            />
          </form>
        </Grid>
        <Grid item xs={6} sm={3}>
          <a href="/">VIEW YOUR STORE</a>
        </Grid>
      </Grid> */}
      <Grid
        container
        spacing={2}
        direction="customer"
        // justify="flex-start"
        alignItems="center"
      >
        <Grid item xs={4} sm={2}>
          <form>
            {/* <SearchIcon /> */}
            <TextField
              id="standard-basic"
              //   label="Search input"
              //   type="search"
              label="search"
              //   style={{ width: '50%' }}
              //   label="Search input"
              //   variant="outlined"
            />
          </form>
        </Grid>
        <Grid item xs={4} sm={2}>
          <FormControl className={classes.formControl}>
            {/* <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel> */}
            <Select
              native
              defaultValue=""
              id="grouped-native-select"
              style={{ width: '150%' }}
            >
              {/* <option aria-label="None" value="" /> */}

              <option value={1}>Status</option>
              <option value={2}>Active</option>

              <option value={3}>Inactive</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Button variant="contained" color="green">
            Filter
          </Button>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Button
            variant="contained"
            style={{ backgroundColor: '#349412', color: 'white' }}
          >
            <AddIcon /> ADD CUSTOMER
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <TableContainer component={Paper} style={{ paddingTop: '30px' }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">NAME</TableCell>
                <TableCell align="center">PHONE NUMBER</TableCell>
                <TableCell align="center">BALANCE</TableCell>
                <TableCell align="center">TOTAL ORDERS</TableCell>
                <TableCell align="center">CREATED AT</TableCell>
                <TableCell align="center">STATUS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="customer" key={index}>
                    {customer.id}
                  </TableCell>
                  <TableCell align="center">{customer.name}</TableCell>
                  <TableCell align="center">{customer.ph}</TableCell>
                  <TableCell align="center">{customer.bal}</TableCell>
                  <TableCell align="center">{customer.orders}</TableCell>
                  <TableCell align="center">
                    <Button>{customer.created}</Button>
                  </TableCell>
                  <TableCell align="center">{customer.status}</TableCell>
                  <TableCell>
                    <MoreHorizIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <div style={{ align: 'center', paddingTop: '10px' }}>
        <Pagination count={3} variant="outlined" shape="rounded" />
      </div>
    </div>
  )
}
export default Data
