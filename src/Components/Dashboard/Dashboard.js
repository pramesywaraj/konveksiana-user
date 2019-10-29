import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Component
import { Card } from './Card/card'


const styles = theme => ({
    root : {
        flexGrow: 1
    }
});


class Dashboard extends Component {
    render() {
        const { classes } = this.props;

        return(
            <div className={classes.root}>
                <Card />          
            </div>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return state;
}

const connectedHomePage = withRouter(connect(mapStateToProps, null, null, 
    {
        pure: false
    }
)(withStyles(styles)(Dashboard)));

export { connectedHomePage as Dashboard };