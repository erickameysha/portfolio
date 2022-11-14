import React from 'react';
import styleContainer from './../common/styles/Container.module.css'
import s from './MyProjects.module.css'
import Project from "./Project/Project";

const MyProjects = () => {
    return (

        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <div>
                    MY PROJECT
                </div>
                <div className={s.projectsList}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;