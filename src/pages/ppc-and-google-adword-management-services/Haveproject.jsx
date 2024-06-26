// import LockImg1 from "../../assets/images/locks1.png";
// import LockImg2 from "../../assets/images/locks2.png";
// import LockImg3 from "../../assets/images/locks3.png";
// import LockImg4 from "../../assets/images/locks4.png";
// import LockImg5 from "../../assets/images/locks5.png";
// import LockImg6 from "../../assets/images/locks6.png";
import { MdAddLink } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { FaBox } from "react-icons/fa6";


const TypesOfLocks = () => {
    return (
        <>
            <div className=' w-11/12 mx-auto 2xl:w-9/12 xl:w-5/6 lg:w-11/12 my-16 md:p-14 p-8 QUOTE-Sec  '>
                <div >
                    <div className=" space-y-2 relative">
                        <h2 className=" md:text-4xl text-3xl  font-bold leading-normal text-[#fff] font-sans">Have project in mind? <br /> Get a QUOTE!</h2>
                        <p className="text-white md:text-base text-sm">If you are looking any Web related services or Digital Marketiing services, Please Fill the form below to get a FREE QUOTE!</p>
                    </div>
                    <button className='px-6 relative py-2 Get-bttn rounded-full  lg:text-lg text-sm bg-[#fff] mt-6 text-black font-normal flex  items-center gap-1'>
                        <a target="_blank" href="mailto:digitalsakshipreek@gmail.com">Get A Free Consultation</a>  </button>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default TypesOfLocks
