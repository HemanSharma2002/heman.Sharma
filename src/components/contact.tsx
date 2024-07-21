import { BsDiscord, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"
import { LiaLinkedin } from "react-icons/lia"
import { MdEmail } from "react-icons/md"

type Props = {}

export default function Contact({ }: Props) {
    return (
        <div className=" w-full flex flex-col gap-12">
            <div className=" w-full">
                <div className=" text-6xl font-bold text-center">Contact me</div>
                <form action="" className=" flex flex-col gap-5 w-full">
                    <fieldset className=" flex flex-col gap-1 rounde">
                        <label htmlFor="">Full name*</label>
                        <input type="text" className=" p-2 rounded-2xl" placeholder="Enter your full name..." />
                    </fieldset>
                    <fieldset className=" flex flex-col gap-1 rounde">
                        <label htmlFor="">Email*</label>
                        <input type="text" className=" p-2 rounded-2xl" placeholder="Enter your email..." />
                    </fieldset>
                    <fieldset className=" flex flex-col gap-1 rounde">
                        <label htmlFor="">Message*</label>
                        <input type="text" className=" p-2 rounded-2xl" placeholder="Enter your message..." />
                    </fieldset>
                    <button className=" bg-purple-800 p-2 px-3 rounded-xl text-lg">See all</button>
                </form>
            </div>
            <div className=" flex md:flex-row gap-3 justify-around flex-col items-center w-full">
                <div className=" text-6xl font-bold">Follow me</div>
                <div className=" text-4xl flex flex-col gap-4">
                    <div className=" flex flex-row gap-4">
                        <BsDiscord/>
                        <BsTwitter/>
                        <BsInstagram/>
                    </div>
                    <div className=" flex flex-row gap-4">
                        <MdEmail/>
                        <LiaLinkedin/>
                        <BsGithub/>
                    </div>
                </div>
            </div>
            <hr />
            <div className=" flex flex-row justify-between ">
                <div className=" text-xl">
                    Heman Sharma
                </div>
                <div className=" space-x-8">
                    <button>Home</button>
                    <button>Skills</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )
}