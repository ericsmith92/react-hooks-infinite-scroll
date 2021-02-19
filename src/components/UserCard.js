import { Card, CardHeader, CardContent, Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 auto',
        maxWidth: '320px',
        '&:not(:last-of-type)':{
            marginBottom: '30px'
        }
    },

}));

const UserCard = ({ user }) => {
    const classes = useStyles();

    return(
       <Card className={classes.root}>
           <CardHeader avatar={ 
                <Avatar aria-label="profile picture." alt={user.name.first} src={user.picture.thumbnail}>

                </Avatar>
            } />
            <CardContent>
                {user.name.first} {user.name.last}
            </CardContent>
       </Card>
    )
}

export default UserCard;

