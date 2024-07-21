import { GrProjects } from "react-icons/gr"


type Props = {}

export default function Projects({ }: Props) {
    return (
        <div className="flex flex-col gap-10">
            <div className=" text-6xl font-bold flex flex-row gap-3 justify-end ">
                <p>My Projects</p>
                <GrProjects />
            </div>
            <div className=" text-4xl flex flex-col items-center gap-10 w-full md:px-24">
                <div className=" relative space-y-4 w-full flex flex-col items-center md:items-start">
                    <p className=" md:absolute md:top-20 md:left-96">Spring Store</p>
                    <div className=" bg-red-500 rounded-lg h-[290px] w-[335px] md:w-[450px]">
                        <img src="" alt="" />
                    </div>

                </div>
                <div className=" relative space-y-4 w-full md:flex md:flex-col md:items-end flex flex-col items-center">
                    <p className=" md:absolute md:top-20 md:right-96">Property Listing Application</p>
                    <div className=" bg-red-500 rounded-lg h-[290px] w-[335px] md:w-[450px]">
                        <img src="" alt="" />
                    </div>

                </div>
                <div className=" relative space-y-4 w-full  flex flex-col items-center md:items-start">
                    <p className=" md:absolute md:top-20 md:left-96">Anynomus Message</p>
                    <div className=" bg-red-500 rounded-lg h-[290px] w-[335px] md:w-[450px] ">
                        <img src="" alt="" />
                    </div>

                </div>
                <div className=" relative space-y-4 w-full md:flex md:flex-col md:items-end flex flex-col items-center">
                    <p className=" md:absolute md:top-20 md:right-96">Chating Application</p>
                    <div className=" bg-red-500 rounded-lg h-[290px] w-[335px] md:w-[450px]">
                        <img src="" alt="" />
                    </div>

                </div>
                <button className=" text-sm">Show more projects.... </button>
            </div>
        </div>
    )
}