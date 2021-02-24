import React from 'react';

const PersonalInfo = ({ userInfo }) => {
    const {
        personalLastName,
        personalFirstName,
        personalEmail,
        personalPhoneNumber,
        personalResidence,
    } = userInfo;

    return (
        <section className="section">
            <h2 className="name">{`${personalFirstName} ${personalLastName}`}</h2>
            <div className="details">
                <h3>{personalEmail}</h3>
                <h3> ❖ {personalPhoneNumber} ❖ </h3>
                <h3>{personalResidence}</h3>
            </div>
        </section>
    );
};

export default PersonalInfo;
