const Footer = () => {
    return (
        <>
        <div className="h-64 bg-black px-20 pt-10 flex justify-start mt-[250px]">
            <div className="w-[15%] mr-[60px]">
                <p className="text-base text-white">ABOUT</p>
                <p className="text-[9px] text-white mt-6">Bloowatch is specialized software for watersports 
                    schools (surfing, kitesurfing, sailing, and diving) and 
                    outdoor activity providers (skiing, climbing
                </p>
            </div>
            <div className="w-[20%] mr-10px">
                <p className="text-base text-white">CONTACT</p>
                <p className="text-[9px] text-white mt-4">156-677-446-442-2887</p>
                <p className="text-[9px] text-white mt-4">wave@bloowatch.com</p>
                <p className="text-[9px] text-white mt-4">Spain</p>
            </div>
            <div className="w-[20%] mr-10px">
                <p className="text-base text-white">UNUSEFUL LINKS</p>
                <p className="text-[9px] text-white mt-4">About Us</p>
                <p className="text-[9px] text-white mt-4">History</p>
                <p className="text-[9px] text-white mt-4">Contact Us</p>
            </div>
            <div className="w-1/4 mr-10px">
                <p className="text-base text-white">INSTAGRAM</p>
                <div className="flex flex-start gap-2">
                    <img src="/image/Bitmap (6).png" className="h-10 w-10"></img>
                    <img src="/image/Bitmap (7).png" className="h-10 w-10"></img>
                    <img src="/image/Bitmap (8).png" className="h-10 w-10"></img>
                    <img src="/image/Bitmap (7).png" className="h-10 w-10"></img>
                    <img src="/image/Bitmap (6).png" className="h-10 w-10"></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;