import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { userActions } from '../../Actions/userActions';
import { connect } from 'react-redux';
// import AssignmentIcon from '@material-ui/icons/Assignment';

import { NavLink as RouterLink } from 'react-router-dom';

function ListItemNavLink(props) {
    const { icon, primary, to } = props;
  
    const renderLink = React.useMemo(
      () =>
        React.forwardRef((itemProps, ref) => (
          // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
          <RouterLink to={to} {...itemProps} innerRef={ref} />
        )),
      [to],
    );
  
    return (
        <ListItem button component={renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
    );
}

ListItemNavLink.propTypes = {
    icon: PropTypes.node.isRequired,
    primary: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};


class SidemenuItems extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    logout = event => {
        const { dispatch } = this.props;
        dispatch(userActions.logout());
    }

    render() {
        return (
            <div>
                {/* <ListItemNavLink to='/dashboard' primary='Dashboard' icon={<DashboardIcon />} /> */}
                {/* <ListItemNavLink to='/products' primary='Products' icon={<ShoppingBasketIcon />} /> */}
                <ListItemNavLink to='/dashboard' primary='Dashboard' icon={<DashboardIcon />} />
                <ListItemNavLink to='/user-order' primary='Orders Status' icon={<ShoppingCartIcon />} />
                <ListItemNavLink to='/' primary='Home' icon={<HomeIcon />} />
            
                <ListItem button onClick={(e) => {this.logout()}}>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Keluar" />
                </ListItem>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    const { loggingIn } = state.authentication;
    return {
       loggingIn
    };
}
export default connect(mapStateToProps)(SidemenuItems);