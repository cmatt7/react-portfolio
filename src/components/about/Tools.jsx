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

export default function Tools() {
    const languagesStyle = "w-16 h-16 rounded-lg m-3";
    const languagesLayout = "flex flex-wrap mx-10 my-6 justify-center"

    return (
        <div className="flex flex-col justify-center items-center my-8">

            <h1 className="text-2xl my-2 font-semibold" data-aos="fade-right">Languages and Tools</h1>

            <div className="flex flex-row flex-wrap justify-center">
                <figure className={`${languagesLayout} w-72`}>
                    <img src={JavaScript} alt="JavaScript Logo" className={languagesStyle} data-aos="fade-down"/>
                    <img src={TypeScript} alt="TypeScript Logo" className={languagesStyle} data-aos="fade-down"/>
                    <img src={PHP} alt="PHP Logo" className={languagesStyle} data-aos="fade-down"/>
                    <img src={NodeJS} alt="NodeJS Logo" className={languagesStyle} data-aos="fade-down"/>
                    <img src={SCSS} alt="SCSS Logo" className={languagesStyle} data-aos="fade-down"/>
                    <img src={TailwindCSS} alt="TailwindCSS Logo" className={languagesStyle} data-aos="fade-down"/>
                </figure>

                <figure className={`${languagesLayout} w-52`}>
                    <img src={ReactJS} alt="ReactJS Logo" className={languagesStyle} data-aos="fade-down"/>
                    <img src={VueJS} alt="VueJS Logo" className={languagesStyle} data-aos="fade-down"/>
                    <img src={NextJS} alt="NextJS Logo" className={languagesStyle} data-aos="fade-down"/>
                    <img src={Laravel} alt="Laravel Logo" className={languagesStyle} data-aos="fade-down"/>
                </figure>

                <figure className={`${languagesLayout}`}>
                    <img src={Firebase} alt="Firebase Logo" className={languagesStyle} data-aos="fade-down"/>
                    <img src={MySQL} alt="MySQL Logo" className={languagesStyle} data-aos="fade-down"/>
                    <img src={Git} alt="Git Logo" className={languagesStyle} data-aos="fade-down"/>
                </figure>
            </div>

            <div className="flex text-center w-4/6 lg:w-6/12 mx-auto font-normal text-lg" data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officia nostrum? Nobis voluptatum assumenda in numquam. Obcaecati quaerat esse quia facere sint eaque alias optio. Pariatur corrupti itaque optio commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ratione dolore molestias ex ea. Unde autem explicabo id laboriosam doloribus, totam dolor non! Accusantium fugit similique tenetur at maxime? Aliquam.
            </div>

        </div>
    )
}