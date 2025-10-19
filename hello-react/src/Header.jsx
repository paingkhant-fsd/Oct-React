import { AppBar, Toolbar, Typography, Badge } from "@mui/material";

export default function Header( { count }) {
    return (
        <AppBar position="static">
            <Toolbar>
                <Badge
                    badgeContent={cont}
                    color="error">
                        <Typography>Todo</Typography>
                </Badge>
            </Toolbar>
        </AppBar>
    );
}