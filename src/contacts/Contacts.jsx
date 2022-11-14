import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import s from './Contacts.module.css'


const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={styleContainer.container}>
                <div className={s.containerBlock}>
                <h3>Contacts</h3>
                <div className={s.inputContainer}>
                    <input type="text" title={'input'}/>
                    <input type="text" title={'input'}/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                    <div className={s.contactsButton}>
                        <button >button</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contacts;