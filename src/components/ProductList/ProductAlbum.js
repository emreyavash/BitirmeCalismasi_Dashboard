import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ProductContextProvider from '../../Services/ProductService/ProductContext';
import ProductAlbumCard from '../Product/ProductAlbumCard';




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ProductAlbum() {

    return (
        <ProductContextProvider>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />

                <main>
                    <Container sx={{ py: 8 }} maxWidth="md">
                        <Grid container spacing={4}>
                           <ProductAlbumCard/>
                        </Grid>
                    </Container>
                </main>

            </ThemeProvider>
        </ProductContextProvider>
    );
}