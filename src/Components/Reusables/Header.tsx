import {RxAvatar} from "react-icons/rx"
const Header = () => {
  return (
    <div className="flex justify-between m-3">
        <div className="flex flex-col gap-1">
            <h1 className="font-bold font-font leading-4 text-[15px] text-[#2E2E3A]">Setup your SAMPAY account</h1>
            <p className="font-normal font-font text-[12px] leading-3 text-[#2E2E3A]">Takes approximately 10 minutes</p>
        </div>

        <div className="flex items-center justify-center gap-1">
            <RxAvatar size={25} className="bg-slate-400 rounded-full" />
            <p className="font-font text-[16px]">James Glory</p>
        </div>
    </div>
  )
}

export default Header;