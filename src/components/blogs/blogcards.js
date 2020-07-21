import React, { Component } from 'react';
import Blogs from '../blogs/blogs';
import About from '../about/about';
import WFH from '../blogs/wfh'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    root: {
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: 500,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: spacing(2),
        [breakpoints.up('md')]: {
            flexDirection: 'row',
            paddingTop: spacing(2),
        },
    },
    media: {
        width: '88%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: spacing(-3),
        height: 0,
        paddingBottom: '48%',
        borderRadius: spacing(2),
        backgroundColor: '#fff',
        position: 'relative',
        [breakpoints.up('md')]: {
            width: '100%',
            marginLeft: spacing(-3),
            marginTop: 0,
            transform: 'translateX(-8px)',
        },
        '&:after': {
            content: '" "',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
            borderRadius: spacing(2), // 16
            opacity: 0.5,
        },
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
}));

const BlogCards = () => {
    const styles = useStyles();
    const {
        button: buttonStyles,
        ...contentStyles
    } = useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();
    return (
        <React.Fragment>
            <section id="portfolio">
                <h1>More Blog posts coming soon!</h1>
                <Grid container direction="row"
                    justify="space-around"
                    alignItems=""
                    flexGrow="1"
                    spacing={8}
                    className="Grid"
                    px={6}


                >

                    <Grid item lg={6}>
                        <Card className={cx(styles.root, shadowStyles.root)}>
                            <CardMedia
                                className={styles.media}
                                // image={
                                //     'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
                                // }
                                image="images/blogs/WFH/scavenger.jpg"
                            />
                            <CardContent>
                                <TextInfoContent
                                    classes={contentStyles}
                                    overline={'16 JUNE 2020'}
                                    heading={'Work From Home Fun!'}
                                    body={
                                        'Here\'s how my team and I Work From Home on Thursdays! '
                                    }
                                />
                                <Link to={`/blogs/workfromhomefun`}>

                                    <Button className={buttonStyles}>Read more</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>


                </Grid>

            </section>
            {/* <Switch>
                <Route exact path='/blogs' component={Blogs} />
                <Route path='/blogs/travel' component={About} />
            </Switch> */}
        </React.Fragment>

    );
};

export default BlogCards;