import { MdCircle } from "react-icons/md";
type Props = {rating:number}
const array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
export default function Circles({rating}: Props) {
  return (
    <div className="flex flex-row">
        {
            array.map(n=>(
                <p id={String(n)}>
                    {
                        n<=rating&&<MdCircle/>
                    }
                </p>
            ))
        }
        {
            array.map(n=>(
                <p id={String(n)}>
                    {
                        n>rating&&<MdCircle className=" opacity-30"/>
                    }
                </p>
            ))
        }
    </div>
  )
}