import React from 'react';

const SubscribeForm = props => (
    <form onSubmit={props.getRecipe} style={{marginBottom:"2rem"}}>
        First Name: <input className="form__input" type="text" name="firstName"/>
        Last Name: <input className="form__input" type="text" name="lastName"/>
        Email: <input className="form__input" type="text" name="email"/>
        <button className="form__button my-button">Subscribe</button>
    </form>
);

export default SubscribeForm;