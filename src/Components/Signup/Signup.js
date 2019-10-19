import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { history } from '../../Helpers/history';
import { userActions } from '../../Actions/userActions';


import { withStyles } from '@material-ui/core/styles';
import './Signup.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import { HashLink as Links } from 'react-router-hash-link';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="primary" href="https://codepanda.id/">
        Codepanda.id
      </Link>
      {' team.'}
    </Typography>
  );
}

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  buttonProgress: {
    color: '#4caf50',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            sex: '',
            showPassword: false,
            loading: false
        }
    }

    componentDidMount() {
        if(localStorage.getItem('auth')) {
            history.push('/login');
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({ loading: newProps.loading }); // remove the loading progress when logged in or fail to log in
     }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    signup = (e) => {
        this.setState({ loading : true });
        const { name, email, password, sex } = this.state;
        // console.log("Data : ", this.state);
        const { dispatch } = this.props;
        if(name && email && password) {
            dispatch(userActions.signup(name, email, password, sex));
        }
    }

    login = (e) => {
        history.push('/login');
    }

    render() {
        const { classes } = this.props;
        const { loading } = this.state;
        return (
            <Container component="main" maxWidth="xs">
                {loading ? <LinearProgress variant="query" /> : ''}
                <CssBaseline />
                <div className={classes.paper}>
                    <Links to="/">
                        <div className="row text-center">
                            <div className="img-size" style={{ backgroundImage: `url(${"/logo-konveksiana.svg"})`}}></div>
                        </div>
                    </Links>
                    {/* <form className={classes.form} noValidate> */}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Nama User"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Alamat Email User"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={this.state.value}
                            onChange={this.handleChange('password')}

                        />

                        <h5 className="text-left">Pilih Jenis Kelamin</h5>
                        <RadioGroup aria-label="position" name="position" value={this.state.sex} onChange={this.handleChange('sex')} row>
                            <FormControlLabel
                            value="1"
                            control={<Radio color="primary" />}
                            label="Laki-laki"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value="2"
                            control={<Radio color="primary" />}
                            label="Perempuan"
                            labelPlacement="end"
                            />
                        </RadioGroup>

                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className="signup"
                            disabled={loading}
                            onClick={(e) => {this.signup()}} 
                        >
                            Daftar
                        </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={loading}
                            onClick={(e) => {this.login()}} 
                        >
                            Masuk
                        </Button>
                    {/* </form> */}
                </div>
                <Box m={5}>
                    <MadeWithLove />
                </Box>
            </Container>
        );
    }
  
}

Signup.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    const { loggingIn, loading } = state.authentication;
    return {
        loggingIn,
        loading
    };
}

const connectedSignupPage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
}) (withStyles(styles)(Signup)));

export { connectedSignupPage as Signup };