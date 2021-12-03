import React from 'react';

import styles from '../style.module.scss';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

function Сomments(props) {
  const deleteCommentHandler = props.onClick;

  return (
    <div className={styles.comment}>
      {props.dataComments.map((item, index) => (
        <div key={item.id} className={styles.commentItem}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            style={{ marginRight: '25px' }}
            primary={item.fullName}
            secondary={<React.Fragment>{item.text}</React.Fragment>}
          />
          <p>{item.createdAt}</p>
          <Button
            onClick={() => deleteCommentHandler(item.id)}
            style={{ marginLeft: '25px' }}
            variant="outlined"
            color="error">
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Сomments;
