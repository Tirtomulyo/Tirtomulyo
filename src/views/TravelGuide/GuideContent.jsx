import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import React, { Fragment } from 'react'
import { image_url } from '../../variable/BaseUrl'

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

function GuideContent() {
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
                            <img 
                                className={classes.image}
                                src={`${image_url}content1.jpg`}
                                alt="" 
                            />
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
                                Sekilas Tentang Tirtomulyo
                                </Typography>

                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                Desa Tirtomulyo berada di ujung barat Kabupaten Kendal yang berbatasan langsung dengan Kabupaten Batang. Untuk menuju Desa Tirtomulyo memerlukan waktu tempuh sekitar 1,5 jam dari pusat kota Kendal dan sekitar 2,5 jam dari Kota Semarang. Memiliki beragam potensi wisata, mulai dari eduwisata pertanian dan peternakan, pemandian air panas, kolam renang, kesenian jaran goyang, dan sebagainya.
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
                                Alasan Berkunjung
                                </Typography>

                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Desa Tirtomulyo menjadi destinasi wisata yang cocok apabila anda mencari kenyamanan dalam belajar langsung mengenai peternakan dan pertanian. Didukung atmosfer udara yang segar, kandang ayam arab, serta fasilitas bartander yang memuat informasi tentang suatu tanaman menjadikan pengunjung mendapatkan informasi yang akurat sekaligus menikmati suasana segar pedesaan.
                                    </Typography>
                            </Grid>

                        </Grid>

                        <Grid
                            item
                            lg={4}
                            xs={12}
                        >
                            <img 
                                className={classes.image}
                                src={`${image_url}content1.jpg`}
                                alt="" 
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
}

export default GuideContent
