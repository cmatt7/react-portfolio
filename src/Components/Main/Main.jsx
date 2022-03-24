import React, { useState } from 'react';
import Menu from './Menu/Menu';
import AboutWork from './AboutWork/AboutWork';
import Projects from './Projects/Projects';
import Certificates from './Certificates/Certificates';
import { CSSTransition } from 'react-transition-group';
import './Main.scss';

const Main = () => {
    const [page, setPage] = useState('about');

    return (
        <main id="main">
            <Menu setPage={setPage}/>

            {
                <CSSTransition
                    in={page === 'about'}
                    timeout={600}
                    classNames="fade"
                    unmountOnExit
                >
                    <AboutWork/>
                </CSSTransition>
            }
            
            {
                <CSSTransition
                    in={page === 'projects'}
                    timeout={600}
                    classNames="fade"
                    unmountOnExit
                >
                    <Projects/>
                </CSSTransition>
            }

            {
                <CSSTransition
                    in={page === 'certificates'}
                    timeout={600}
                    classNames="fade"
                    unmountOnExit
                >
                    <Certificates/>
                </CSSTransition>
            }
        </main>
    )
}

export default Main;