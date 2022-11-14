import React from 'react';
import s from './Skils.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skils = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>skills </h2>
                <div className={s.skills}>
                    <Skill title={'js'} description={'Loreeffkkfkf kkfkkf lrprplrwe[[r, prprprmepe'}/>
                    <Skill title={'css'} description={'Loreeffkkfkf kkfkkf'}/>
                    <Skill title={'react'} description={'Loreeffkkfkf kkfkkf'}/>
                </div>

            </div>
        </div>
    );
};

export default Skils;