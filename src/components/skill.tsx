import { FaLongArrowAltLeft } from "react-icons/fa"
import Circles from "./circles"

type Props = {}

export default function Skill({ }: Props) {
    return (
        <div className=" flex flex-col gap-10">
            <div className=" flex flex-row justify-center gap-6 text-6xl font-bold">
                <h1>My skills</h1>
                <FaLongArrowAltLeft />
            </div>
            <div className=" flex md:flex-row justify-evenly text-xl flex-col items-center w-full">
                <div className=" space-y-4">
                    <div className=" flex flex-col gap-2">
                        <p>React JS</p>
                        <Circles rating={11} />
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>Next JS</p>
                        <Circles rating={9} />
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>Tailwind CSS</p>
                        <Circles rating={13} />
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>Git</p>
                        <Circles rating={7} />
                    </div>

                </div>
                <div className=" space-y-4">
                    <div className=" flex flex-col gap-2">
                        <p>MongoDB</p>
                        <Circles rating={8} />
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>My SQL</p>
                        <Circles rating={7} />
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>Spring Boot</p>
                        <Circles rating={10} />
                    </div>
                    <div className=" flex flex-col gap-2">
                        <p>AWS</p>
                        <Circles rating={7} />
                    </div>

                </div>
            </div>
        </div>
    )
}