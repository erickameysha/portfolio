import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import s from './Footer.module.css'
const Footer = () => {
    return (
        <div  className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.footerContainer} `}>

                <h3>Eric Kameysha</h3>
                <div className={s.links}>
                    <div className={s.link}>

                    </div>
                    <div className={s.link}>

                    </div>
                    <div className={s.link}>

                    </div>
                    <div className={s.link}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;