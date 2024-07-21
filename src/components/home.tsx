import { BiMenu } from "react-icons/bi"

type Props = {}

export default function Home({ }: Props) {
    
    return (
        <div>
            <div className="h-[60px] ">
                {/* navbar */}
                <div className="text-lg font-bold flex flex-row justify-between">
                    <p className="text-xl">Heman Sharma</p>
                    <ul className="flex flex-row justify-between gap-10">
                        <li>Home</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                    <button >Contact me</button>
                    <p className=" md:hidden"><BiMenu className="text-3xl"/></p>
                </div>
            </div>
            <div className=" relative">
                <div>
                    <p>Heman</p>
                    <p>Sharma</p>
                </div>
                <div>
                    <p></p>
                </div>
            </div>
            <div>
                <h1 className=" text-6xl text-bold">About me</h1>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, itaque voluptatibus amet enim voluptatem pariatur rerum distinctio? Perspiciatis necessitatibus quidem, aliquid fuga, dolorem sunt voluptatem ducimus, labore magni perferendis sapiente!
                    </p>
                    <button className=" p-2 px-3 bg-purple-700 rounded-lg text-lg font-bold">Contact me</button>
                </div>
            </div>
        </div>
    )
}