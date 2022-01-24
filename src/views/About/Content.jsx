import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import React, { Fragment } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(7)
    },
    image: {
        width: "100%",
        height: "auto",
        [theme.breakpoints.down('md')] : {
            marginBottom: theme.spacing(3)
        }
    },
    video: {
        [theme.breakpoints.down('md')] : {
            marginBottom: theme.spacing(3)
        }
    },
    titleContent: {
        fontWeight: 900
    },
    subTitle: {
        marginTop: theme.spacing(2)
    },
    gridContent: {
        [theme.breakpoints.down('md')] : {
            flexDirection: "column-reverse",
            alignItems: "inherit"
        }
    },
}))

function Content() {
    const classes = useStyles()
    return (
        <Fragment>
            <Box>
                <Container className={classes.root}>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid
                            item
                            lg={4}
                            xs={12}
                        >
                            <iframe 
                                className={classes.video}
                                width="100%"
                                height="257"
                                src="https://www.youtube.com/embed/N-E4-PRzJyg" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </Grid>

                        <Grid
                            container
                            lg={7}
                            xs={12}
                        >
                            <Grid item>
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                Desa Tirtomulyo
                                </Typography>

                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Desa Tirtomulyo merupakan desa yang terletak di Kecamatan Plantungan, Kabupaten Kendal, Jawa Tengah.
                                    Desa ini berbatasan langsung dengan Kabupaten Batang di sebelah barat. Luas wilayah Desa Tirtomulyo yaitu 382,3 hektar yang terdiri dari 6 dusun yaitu Wonokambang, Saron, Wonotirto, Gondangan, Wonokerso, dan Sikemplong dengan sarana dan prasarana di Desa Tirtomulyo cukup lengkap yaitu tersedia mulai dari pendidikan, kesehatan, olahraga, kesenian, keagamaan, balai desa, pasar, perkebunan serta kandang eduwisata peternakan
                                     </Typography>
                            </Grid>

                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box 
                bgcolor={green[50]} 
                py={7} 
                className={classes.root}
            >
                <Container>
                    <Grid
                        className={classes.gridContent}
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid
                            container
                            lg={7}
                            xs={12}
                        >
                            <Grid item>
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                Kelebihan Desa Tirtomulyo
                                </Typography>

                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                <li>Dekat dengan kaki Gunung Prau sehingga udara di Desa Tirtomulyo dingin dan segar</li>
                                <li>Berbagai macam tumbuhan dapat tumbuh subur di Desa Tirtomulyo</li>
                                <li>Terdapat banyak perkebunan hortikultura</li>
                                <li>Terdapat banyak potensi wisata</li>
                                <li>Warga masyarakatnya ramah dan loyal</li>
                                </Typography>
                            </Grid>

                        </Grid>

                        <Grid
                            item
                            lg={4}
                            xs={12}
                        >
                            <iframe 
                                className={classes.video}
                                width="100%"
                                height="257"
                                src="https://www.youtube.com/embed/uB9RdXJVH1Y" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
}

export default Content
