import React from 'react'
import Card from '@material-ui/core/Card';
import { Avatar, Box, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { image_url } from '../../variable/BaseUrl';

const useStyle = makeStyles((theme) => ({
    titleContent: {
        fontWeight: 900,
        marginBottom: theme.spacing(3)
    },
    cardTitle: {
        fontWeight: 600,
        marginBottom: theme.spacing(3)
    },
    boxAvatar: {
        margin: theme.spacing(5, 0, 3, 0)
    },
    avatar: {
        height: theme.spacing(9),
        width: theme.spacing(9),
        marginRight: theme.spacing(3)
    },
    avatarTitle: {
        fontWeight: 600
    }
}))

const CardComment = (props) => {
    const classes = useStyle()

    return (
        <Card>
            <CardContent>
                <Typography
                    variant="h4"
                    className={classes.cardTitle}
                >
                    Testimoni
                </Typography>
                <Typography color="textSecondary" >
                    Desa tirtomulyo mempunya potensi wisata yang bagus, udaranya disana sejuk dan masyarakatnya juga ramah. 
                    Saya sering berkunjung ke lapas pemandian air panas untuk sekedar melepas lelah.
                    saya juga sering membeli sagon kacang dan kopi hitam khas tirtomulyo.
                </Typography>
                <Box
                    className={classes.boxAvatar}
                    sx={{ 
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Avatar 
                        className={classes.avatar}
                        alt="name user"
                        src={`${image_url}images.png`}
                    />
                    <Box>
                        <Typography className={classes.avatarTitle} >
                            Arifin Nadhif
                        </Typography>
                        <Typography className={classes.avatarSubTitle}>
                            Karyawan Swasta
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

function Comment() {
    const classes = useStyle()
    return (
        <Box 
            py={3}
        >
            <Container>
                <Typography 
                    className={classes.titleContent}
                    variant="h4"
                    color="primary"
                >
                    Komentar Pengunjung
                </Typography>
                <Grid container spacing={5}>
                    <Grid item lg={6}>
                        <CardComment />
                    </Grid>
                    {/* <Grid item lg={6}>
                        <CardComment />
                    </Grid>
                    <Grid item lg={6}>
                        <CardComment />
                    </Grid>
                    <Grid item lg={6}>
                        <CardComment />
                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    )
}

export default Comment
