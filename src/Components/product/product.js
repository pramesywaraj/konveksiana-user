import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Component
import { ProductCard } from './productcard/productcard'

const styles = theme => ({
    root : {
        flexGrow: 1
    }
});


class Product extends Component {
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <ProductCard />          
            </div>
        )
    }
}

Product.propTypes = {
    classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return state;
}

const connectedProductPage = withRouter(connect(mapStateToProps, null, null, 
    {
        pure: false
    }
)(withStyles(styles)(Product)));

export { connectedProductPage as Product };