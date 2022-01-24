import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React from "react";
import { image_url } from "../../variable/BaseUrl";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3)
    },
    image: {
        width: "100%",
        height: "auto",
        // [theme.breakpoints.down('sm')] : {
        //     marginTop: theme.spacing(5)
        // },
        borderRadius: 10
    },
    titleContent: {
        fontWeight: 900
    },
    subTitle: {
        marginTop: theme.spacing(2)
    },
    gridContent: {
        marginTop: theme.spacing(3)
    },
    gridContentMobile: {
        [theme.breakpoints.down('md')] : {
            marginTop: theme.spacing(3)
        }
    },
    gridParent: {
        [theme.breakpoints.down('md')] : {
            flexDirection: "column-reverse"
        }
    }
}))

function Content(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Box
                bgcolor={green[50]}
                py={7}
            >       
                <Container> 
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid item lg={5} xs={12}>
                            <img 
                                className={classes.image}
                                src={`${image_url}content2.jpg`}
                                alt="" 
                            />
                        </Grid>

                        <Grid container lg={6} xs={12} >
                            <Grid 
                                item 
                                className={classes.gridContentMobile}
                            >
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                    Curug Kedawung
                                </Typography>
                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >
                                    Wilayah Kecamatan Plantungan Kabupaten Kendal mempunyai  sejumlah potensi wisata yang melimpah, salah satu potensi wisata tersebut adalaha seperti Wisata Jelajah  Sungai dan Curug. Salah satu wisata alam yang dapat dimanfaatkan sebagai jelajah sungai adalah curug kedawung. Curug kedawung merupakan sebuah curug/air terjun yang terdapat di desa Tirtomulyo, Kendal
                                    Curug kedawung tentunya dapat dijadikan potensi wisata bagi orang orang yang memiliki hobi jelajah alam, khususnya jelajah sungai. Curug kedawung juga memberikan view yang indah sehingga dapat memanjakan mata bagi wisatawan yang berkunjung ke curug kedawung
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid> 
                </Container>
            </Box>

            {/* Mobile Component */}
            <Box
                py={7}
            >
                <Container>
                    <Grid
                        className={classes.gridParent}
                        container
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Grid 
                            className={classes.gridContentMobile}
                            container lg={6} xs={12} 
                        >
                            <Grid item >
                                <Typography 
                                    className={classes.titleContent}
                                    variant="h4"
                                    color="primary"
                                >
                                    Kebun Eduwisata
                                </Typography>
                                <Typography
                                    className={classes.subTitle}
                                    variant="subtitle1"
                                >Kebun Eduwisata  merupakan salah satu wisata edukasi mengenai tanamanan perkebunan, hias, dan pertanian. Kebun eduwisata tirtomulyo yang dikembangkan oleh PokDarWis “Gemilang” ini juga juga menyajikan edukasi di bidang peternakan, khususnya edukasi mengenai pengembangan produksi telur ayam arab.
                                 Kebun ini terdapat di dusun Wonokambang, Desa Tirtomulyo, Plantungan, Kendal. Melalui kebun eduwisata ini diharapkan orang-orang tidak hanya hadir untuk dapat menikmati view ataupun spot perkebunan melainkan juga belajar mengenai pertanian dan peternakan.
                           </Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid item lg={5} xs={12}>
                            <img 
                                className={classes.image}
                                src={`${image_url}content1.jpeg`}
                                alt="" 
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Content