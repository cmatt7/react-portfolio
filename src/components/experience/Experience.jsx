import Inovanex from '../../images/companies/inovanex.png';
import TopNetworks from '../../images/companies/topnetworks.png';
import TopSvg from './TopSvg';
import BottomSvg from './BottomSvg';

export default function Experience() {
    const companyLogoStyle = "rounded-full my-6 mx-auto md:ml-24 w-32";
    const dividerLayout = "flex flex-col md:flex-row justify-center my-4 p-8 lg:p-10";

    return (
        <section className="bg-zinc-900 py-20" data-aos="fade-right">
            <TopSvg/>

            <div className="flex flex-col text-center relative">
                <h2 className="text-lg uppercase font-semibold">Work Experience</h2>
                <h1 className="text-2xl md:text-3xl p-4 font-bold">Let me tell you where I've worked</h1>
            </div>

            <div className={dividerLayout} data-aos="fade-right">
                <figure className="md:mr-10">
                    <img
                        className={companyLogoStyle}
                        src={Inovanex}
                        alt="Institute InovaNex - Logo"
                    />
                </figure>

                <JobInfo>

                    <CompanyName>Instituto InovaNex - BR</CompanyName>
                    <CompanyTitle>Full Stack Developer</CompanyTitle>
                    <span className="text-md">Oct 2021 - Feb 2022</span>

                    <div className="flex flex-col p-2">

                        <span className="font-semibold">Front End Development - HTML5, CSS3 & JS</span>
                        <p className="mt-2 mb-6">Designed all elements of every page within the platform in the term of two weeks, since I delivered ahead of schedule I was told to deal with the Back End.</p>

                        <span className="font-semibold">Back End Development - PHP & MySQL</span>
                        <p className="mt-2 mb-6">My performance was quite good for someone who never studied or coded PHP before, I was able to learn a lot, had some help and rebuilt the API working along with the engineering team</p>

                        <span className="font-semibold">GitHub Manager</span>
                        <p className="mt-2">After three weeks I was indicated to manage the Git/GitHub for the engineering team, so I structured the repositories properly and automated the deployment of any features related to projects to the server with CI/CD</p>

                    </div>

                </JobInfo>
            </div>

            <div className={dividerLayout} data-aos="fade-right">
                <figure className="md:mr-10">
                    <img
                        className={companyLogoStyle}
                        src={TopNetworks}
                        alt="TopNetworks - Logo"
                    />
                </figure>

                <JobInfo>

                    <CompanyName>TopNetworks - BR</CompanyName>
                    <CompanyTitle>Internship</CompanyTitle>
                    <span className="text-md">Aug 2021 - Oct 2021</span>

                    <div className="flex flex-col p-2">

                        <span className="font-semibold">First Experience</span>
                        <p className="mt-2 mb-6">I received this opportunity where I started to handle with clients and their requests, first time that I applied
                            my computer skills in a professional environment.</p>

                        <span className="font-semibold">Activities</span>
                        <p className="mt-2 mb-6">IT Consulting, technical support and computer repair for multiple companies</p>

                    </div>

                </JobInfo>
            </div>

            <BottomSvg/>
        </section>
    )
}

function JobInfo({ children }) {
    return (
        <div className="text-left w-full md:w-3/6 lg:w-5/12">
            {children}
        </div>
    )
}

function CompanyName({ children }) {
    return (
        <h1 className="font-bold text-2xl text-blue-600">
            {children}
        </h1>
    )
}

function CompanyTitle({ children }) {
    return (
        <h2 className="font-semibold text-md">{children}</h2>
    )
}