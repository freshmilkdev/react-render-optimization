import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ListContainer from './components/ListContainer';


const HomeStub = () => <div>Home Page</div>;

const drawerWidth = 220;
const styles = theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        minWidth: drawerWidth
    },
    main: {
        width: '100%',
        padding: theme.spacing.unit,
        paddingTop: theme.spacing.unit * 9,
        paddingLeft: drawerWidth + theme.spacing.unit
    }
});

class App extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Render optimization demo
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    classes={{
                        paper: classes.drawer,
                    }}
                    variant="permanent"
                    anchor="left">
                    <List>
                        <ListItem button component={Link} to={'/home'}>
                            <ListItemText primary={'Home'}/>
                        </ListItem>
                        <ListItem button component={Link} to={'/List'}>
                            <ListItemText primary={'List'}/>
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.main}>
                    <Switch>
                        <Route path={'/list'} exact component={ListContainer}/>
                        <Route path='/' component={HomeStub}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(App);
