import React from 'react';
import  s from './Project.module.css'
const Project = () => {
    return (
        <div className={s.projectContainer}>
            <div className={s.projectBlock}>
                картинка
                <img src="" alt="картинка"/>
                <button>button</button>

            </div>
            <div className={s.projectSpan}>
                <span>name project</span>
                <span>discription</span>
            </div>
        </div>
    );
};

export default Project;