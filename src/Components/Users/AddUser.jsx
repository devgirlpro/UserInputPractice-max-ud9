import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModual from '../UI/ErrorModual';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');

    const [error, setError] = useState(null);

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    };

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredUserAge);
        setEnteredUsername('');
        setEnteredUserAge('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            {error && <ErrorModual title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>UserName</label>
                    <input id='username' type='text' value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={enteredUserAge} onChange={userAgeChangeHandler} />

                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
};

export default AddUser;
