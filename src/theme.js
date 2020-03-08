import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#3d566e',
            main: '#34495e',
            dark: '#2b3c4e',
            contrastText: '#fff',
            border: {
                light: '#395167',
                main: '#304457',
                dark: '#273747',
            }
        },
        secondary: {
            main: '#8e44ad'
        }
    },
    status: {
        danger: 'orange',
    },
});

export default theme;