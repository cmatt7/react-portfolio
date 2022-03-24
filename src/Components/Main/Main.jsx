import React, { useState } from 'react';
import Menu from './Menu/Menu';
import AboutWork from './AboutWork/AboutWork';
import Projects from './Projects/Projects';
import Certificates from './Certificates/Certificates';

const Main = () => {
    const [page, setPage] = useState('about');

    return (
        <main id="main">
            <Menu setPage={setPage}/>
            {
                page === 'about' && <AboutWork/>
            }
            
            {
                page === 'projects' && <Projects/>
            }

            {
                page === 'certificates' && <Certificates/>
            }
        </main>
    )
}

export default Main;