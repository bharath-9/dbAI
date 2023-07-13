import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {connect} from 'react-redux';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LinearProgress from '@material-ui/core/LinearProgress';
import ErrorIcon from '@material-ui/icons/Error';
import CloudDownload from "@material-ui/icons/CloudDownload";
import { CSVLink } from "react-csv";
import axios from "axios";
import CloudUpload from "@material-ui/icons/CloudUpload";
import Button from "@material-ui/core/Button";
import "filepond/dist/filepond.min.css";
import {Utility} from '../utility/utility';
import {FilePond, File} from 'react-filepond';
import Box from '@material-ui/core/Box';
import InputLabel from "@material-ui/core/InputLabel";
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

class CSVUploader extends React.Component {
    constructor(props) {
        super(props)
        this.onFileChange = this.onFileChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.pond = React.createRef();

        this.state = {
            file: '',

        }
    }

    render() {
        return (
            <FilePond
            />
        )
    }
}