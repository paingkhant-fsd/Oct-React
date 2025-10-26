import { createContext, useContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import App from "./App";

const AppContext = createContext();

export default function AppProvider() {
    const [mode, setMode] = useState("dark");

    const theme = useMemo(() => {
        console.log("running create theme function");
        return createTheme({
            palette: {
                mode,
            },
        });
    }, [mode]);

    return (
        <AppContext.Provider value={{ mode, setMode }}>
            <ThemeProvider theme={theme}>
                <App />
                <CssBaseline />
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export function useApp() {
    return useContext(AppContext);
}