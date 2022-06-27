import HTML from '../../images/languages/html-logo.png';
import CSS from '../../images/languages/css-logo.png';
import JavaScript from '../../images/languages/js-logo.png';
import TypeScript from '../../images/languages/ts-logo.png';
import PHP from '../../images/languages/php-logo.png';
import ReactJS from '../../images/languages/react-logo.png';
import VueJS from '../../images/languages/vue-logo.png';
import NextJS from '../../images/languages/next-logo.png';
import Laravel from '../../images/languages/laravel-logo.png';
import NodeJS from '../../images/languages/node-logo.png';
import SCSS from '../../images/languages/scss-logo.png';
import TailwindCSS from '../../images/languages/tailwind-logo.png';
import Firebase from '../../images/languages/firebase-logo.png';
import MySQL from '../../images/languages/mysql-logo.png';
import Git from '../../images/languages/git-logo.png';
import Jest from '../../images/languages/jest-logo.png';
import Cypress from '../../images/languages/cypress-logo.png';

export default function Tools() {
    const languagesStyle = "w-16 h-16 rounded-lg m-3";
    const languagesLayout = "flex flex-row flex-wrap mx-2 md:mx-12 mb-6 w-72 justify-center"

    return (
        <div className="flex flex-col justify-center items-center my-16">

            <h1 className="text-2xl my-2 font-semibold" data-aos="fade-right">Languages and Tools</h1>

            <section className="flex flex-wrap justify-center mx-0 my-10">
                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold my-4">Skills</h3>

                    <figure className={languagesLayout}>
                        <img src={HTML} alt="HTML5 - Logo" className={languagesStyle} data-aos="fade-down" />
                        <img src={CSS} alt="CSS3 - Logo" className={languagesStyle} data-aos="fade-down" />
                        <img src={PHP} alt="PHP - Logo" className={languagesStyle} data-aos="fade-down" />
                        <img src={JavaScript} alt="JavaScript - Logo" className={languagesStyle} data-aos="fade-down" />
                        <img src={TypeScript} alt="TypeScript - Logo" className={languagesStyle} data-aos="fade-down" />
                        <img src={Git} alt="Git - Logo" className={languagesStyle} data-aos="fade-down" />
                    </figure>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold my-4">Frameworks & Libraries</h3>

                    <figure className={languagesLayout}>
                        <img src={ReactJS} alt="ReactJS - Logo" className={languagesStyle} data-aos="fade-down"/>
                        <img src={NextJS} alt="NextJS - Logo" className={languagesStyle} data-aos="fade-down"/>
                        <img src={Firebase} alt="Firebase - Logo" className={languagesStyle} data-aos="fade-down"/>
                        <img src={SCSS} alt="SCSS - Logo" className={languagesStyle} data-aos="fade-down"/>
                        <img src={TailwindCSS} alt="" className={languagesStyle} data-aos="fade-down"/>
                    </figure>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-lg font-semibold my-4">Studying</h3>

                    <figure className={languagesLayout}>
                        <img src={NodeJS} alt="NodeJS Logo" className={languagesStyle} data-aos="fade-down"/>
                        <img src={VueJS} alt="VueJS Logo" className={languagesStyle} data-aos="fade-down"/>
                        <img src={Laravel} alt="Laravel Logo" className={languagesStyle} data-aos="fade-down"/>
                        <img src={MySQL} alt="MySQL Logo" className={languagesStyle} data-aos="fade-down"/>
                        <img src={Jest} alt="Jest - Logo" className={languagesStyle} data-aos="fade-down"/>
                        <img src={Cypress} alt="Cypress - Logo" className={languagesStyle} data-aos="fade-down"/>
                    </figure>
                </div>
            </section>
        </div>
    )
}