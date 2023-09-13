import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
            return;
        }
        if (+enteredUserAge < 1) {
            return;
        }

        props.onAddUser(enteredUsername, enteredUserAge);
        setEnteredUsername('');
        setEnteredUserAge('');
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>UserName</label>
                <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />

                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' value={enteredUserAge} onChange={userAgeChangeHandler} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
