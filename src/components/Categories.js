import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme, fade } from '@material-ui/core/styles'
import admin from '../img/admin.jpg'
import SettingsIcon from '@material-ui/icons/Settings'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import LocalMallIcon from '@material-ui/icons/LocalMall'
import AdjustIcon from '@material-ui/icons/Adjust'
import StorageIcon from '@material-ui/icons/Storage'
import ReceiptIcon from '@material-ui/icons/Receipt'
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
import categories from '../categories.json'
import Pagination from '@material-ui/lab/Pagination'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const drawerWidth = 300

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  root1: {
    flexGrow: 1,
  },
  paper: {
    // height: 500,
    width: 550,

    // border: '2px solid red',
  },
  paper1: {
    // height: 500,
    width: 350,
    // display: 'none',
    // border: '2px solid red',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    color: 'blue',

    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grid_item: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    color: 'white',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))
const Lists = [
  {
    icon: DashboardIcon,
    name: 'Dashboard',
  },
  {
    icon: StorageIcon,
    name: 'Products',
  },
  {
    icon: LocalMallIcon,
    name: 'Orders',
  },
  {
    icon: PeopleIcon,
    name: 'Customers',
  },
  {
    icon: AdjustIcon,
    name: 'Coupons',
  },
  {
    icon: ReceiptIcon,
    name: 'Categories',
  },
  {
    icon: SettingsIcon,
    name: 'Settings',
  },
]

function ResponsiveDrawer(props) {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div classname={classes.grid_item}>
        <img src={admin} alt="" />
        <p>
          Hello,
          <br />
          <a>Soho Store</a>
        </p>
      </div>
      <div>
        <h4 style={{ textAlign: 'center' }}>Earning</h4>
        <h3 style={{ textAlign: 'center' }}>$12,560.55</h3>
      </div>
      <Divider />
      <List>
        {Lists.map((list, index) => (
          <ListItem button key={index}>
            <list.icon />
            {list.name}
          </ListItem>
        ))}
      </List>
      <div>
        <p>©2020 Marfury marketplace. All rights reversed.</p>
      </div>
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div>
      <div className={classes.root}>
        {/* <CssBaseline /> */}
        <AppBar
          position="fixed"
          className={classes.appBar}
          // position="static"
          style={{ background: 'transparent', boxShadow: 'none' }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <nav className={classes.drawer} aria-label="dashboard folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar}>
            <div>
              <Grid
                className={classes.grid_item}
                container
                spacing={6}
                direction="customer"
                alignItems="center"
                style={{ marginBottom: '50px' }}
              >
                <Grid item xs={4} sm={2} style={{ color: 'black' }}>
                  <h3>Categories</h3>
                  <small>Martfury Customers</small>
                </Grid>
                <Grid item xs={4} sm={3}>
                  <form>
                    <TextField id="standard-basic" label="search something" />
                  </form>
                </Grid>

                <Grid item xs={6} sm={7}>
                  <a href="" style={{ textDecoration: 'none', color: 'black' }}>
                    VIEW YOUR STORE <ExitToAppIcon />
                  </a>
                </Grid>
              </Grid>
              <div>
                <Grid container className={classes.root1} spacing={2}>
                  <Grid item xs={12}>
                    <Grid container justify="flex-start">
                      <Grid item>
                        <div className={classes.paper}>
                          <TableContainer
                            component={Paper}
                            // style={{ paddingTop: '30px' }}
                          >
                            <Table
                              className={classes.table}
                              aria-label="simple table"
                              // style={{ width: '400px' }}
                            >
                              <TableHead>
                                <TableRow>
                                  <TableCell align="center">
                                    Category Name
                                  </TableCell>
                                  <TableCell align="center">Slug</TableCell>
                                  <TableCell align="center">
                                    Created At
                                  </TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                {categories.map((category, index) => (
                                  <TableRow key={index}>
                                    <TableCell
                                      component="th"
                                      scope="customer"
                                      key={index}
                                    >
                                      {category.name}
                                    </TableCell>
                                    <TableCell align="center">
                                      {category.slug}
                                    </TableCell>
                                    <TableCell align="center">
                                      {category.status}
                                    </TableCell>
                                    <TableCell>
                                      <Button
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                      >
                                        <MoreHorizIcon />
                                      </Button>
                                      <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        style={{ boxShadow: 'none !important' }}
                                      >
                                        <MenuItem onClick={handleClose}>
                                          Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                          Delete
                                        </MenuItem>
                                      </Menu>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </TableBody>
                            </Table>
                          </TableContainer>
                          <div style={{ paddingTop: '20px' }}>
                            <Pagination
                              count={3}
                              variant="outlined"
                              shape="rounded"
                            />
                          </div>
                        </div>
                      </Grid>
                      <Grid item>
                        {/* <Paper className={classes.paper1}> */}
                        <div className={classes.paper1}>
                          <FormControl>
                            <TextField
                              required
                              // className={classes.textField}
                              id="outlined-basic"
                              label="Name"
                              variant="outlined"
                              style={{ height: '70%', width: '150%' }}
                            />
                            <br></br>
                            <TextField
                              required
                              id="outlined-basic"
                              label="Slug"
                              variant="outlined"
                              style={{ height: '70%', width: '150%' }}
                            />
                            <br></br>
                            <Select
                              native
                              defaultValue=""
                              id="grouped-native-select "
                              // variant="outlined-basic"
                              style={{ width: '150%' }}
                            >
                              <option value={1}>Parent 1</option>
                              <option value={2}>Parent 2</option>
                              <option value={3}>Parent 3</option>
                              <option value={4}>Parent 4</option>
                            </Select>
                            <br></br>
                            <TextField
                              required
                              id="outlined-multiline-static"
                              label="Description"
                              multiline
                              rows={4}
                              variant="outlined"
                              style={{ width: '150%' }}
                            />
                            <br />
                            <br />
                            <Grid direction="row">
                              <Button
                                variant="contained"
                                style={{
                                  backgroundColor: 'orange',
                                  color: 'white',
                                  width: '50%',
                                }}
                              >
                                RESET
                              </Button>
                              <Button
                                variant="contained"
                                style={{
                                  backgroundColor: 'green',
                                  color: 'white',
                                  width: '50%',
                                  // marginLeft: '20px',
                                }}
                              >
                                ADD NEW
                              </Button>
                            </Grid>
                          </FormControl>
                        </div>
                        {/* </Paper> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              {/* <div style={{ align: 'center', paddingTop: '10px' }}>
                <Pagination count={3} variant="outlined" shape="rounded" />
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ResponsiveDrawer
