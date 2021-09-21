import React from 'react';
import styles from './userCard;'

const children = props.children;

const UserCard = (props) => {
  return (
    <div className={styles.userCard} >
      {props.children}
    </div>
  )
}

export default UserCard;