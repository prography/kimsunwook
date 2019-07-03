import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Waiting from '../assets/Waiting.png'

// const useStyles = makeStyles({
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

export default function SimpleCard() {
    //   const classes = useStyles();
    //   const bull = <span className={classes.bullet}>•</span>;
    const cardStyle = {
        textAlign:'center'

    }

    return (
        <Card style={cardStyle}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    COFFEE SQUARE
                </Typography>
                <Divider />
                <br />

                <Typography variant="h5" component="h2">
                    주문번호 357                    
                </Typography>
                <img src={Waiting} width="100" />


                {/* <Divider /> */}
                <Typography>
                    맛있는 커피가 준비되고 있어요! 
                </Typography>
                <br />
                <Typography>
                    주문 목록
                </Typography>
                <Typography color="textSecondary">
                    카페라떼와 
                    아이스 아메리카노
                </Typography>
                <Typography variant="body2" component="p">
                    {'예상 소요시간 5분'}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}