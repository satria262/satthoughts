import reactLogo from '../src/assets/system/react.png'

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center bg-[#171819] space-y-4 p-4">
            <h1 className="font-imperial-script text-[#DAC5A7] text-5xl font-normal">Aditama</h1>
            <span className="text-white flex items-center">Made with <img src={reactLogo} alt="" width={40} className=''/></span>
            <div className="border-t py-8 border-gray-600/50">
                <p className="text-white text-center font-thin tracking-wider">Personal blog website</p>
            </div>
        </footer>
    )
}
