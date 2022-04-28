import { createMuiTheme } from "@mui/material/colors";

export const theme = createMuiTheme({

    overrides: {
        MuiTextField: {
            root: {
                backgroundColor: "red"
            }
        }
    },
    props: {
        MuiTextField: {
            variant: "filled",
            InputLabelProps: {
                shrink: true
            }
        }
    }
});