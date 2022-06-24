import Tools from './Tools';

export default function About() {
    return (
        <main className="w-full h-screen relative" id="about">
            <div className="custom-shape-divider-bottom-1655917476">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                </svg>
            </div>

            <section className="flex flex-col items-center mx-12 p-2 lg:p-8" data-aos="fade-right">
                <h1 className="text-2xl font-bold" data-aos="fade-down">About me</h1>
                <p className="font-normal py-4" data-aos="fade-up">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis non error dignissimos odio totam, impedit provident dolor. Fugit vero perferendis et! Aperiam similique sit eligendi magnam excepturi incidunt veritatis pariatur.
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate possimus similique, odit sit, quod nisi dignissimos ab amet nihil cumque totam dolor? Corrupti aliquid repellendus quidem neque ut voluptates possimus. 
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maxime officiis vero voluptatibus, mollitia, earum vel quisquam distinctio voluptatem incidunt tempora? Doloremque quaerat facere nulla? Delectus obcaecati molestias est accusamus! 
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum facilis animi, enim ratione sint consectetur repudiandae velit pariatur possimus illo sed voluptatem! Dolorum nobis voluptate suscipit autem unde soluta.
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur numquam, reiciendis impedit explicabo sint ratione earum quam aut modi, incidunt at, laboriosam deleniti amet accusamus veritatis tempore voluptatem natus quisquam.
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste dignissimos voluptate nesciunt officiis veniam amet temporibus tempora ea optio debitis corrupti voluptas, possimus quod sapiente omnis eaque odit. Repellat.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est eos quia voluptates, ratione aspernatur architecto animi libero corporis ipsum commodi aperiam dignissimos! Explicabo, ipsa sed enim eos eaque magni et.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam asperiores iure corrupti accusantium, exercitationem incidunt quod aliquam iste, quis sint omnis necessitatibus illo! Officiis ut, consequatur numquam asperiores saepe eaque.
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque magnam dicta nesciunt aut voluptatibus unde qui libero illum repellendus? Nostrum, dolorum error ratione porro consectetur quisquam. Ipsa, quo atque?
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda molestiae quos atque saepe fugiat, sit dolorem! Voluptas expedita sit qui asperiores temporibus error, impedit eligendi harum voluptate dignissimos quia ab.
                </p>
            </section>

            <div className="flex flex-col absolute w-full lg:h-3/6 bg-zinc-900 mx-auto lg:bottom-20 border-t-2" data-aos="fade-right">
                <Tools />

                <div className="custom-shape-divider-top-1656022149">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </main>
    )
}