export default function Header() {
    return (
        <>
            <div className="h-20 w-[100%] fixed top-0 z-10 bg-white flex items-center justify-between px-28">
                <img src="/image/logo.png" />
                <ul className="w-[30%] flex justify-between">
                    <li className="cursor-pointer">SHOP</li>
                    <li className="cursor-pointer">BLOG</li>
                    <li className="cursor-pointer">SEARCH</li>
                    <li className="flex justify-center cursor-pointer"><img src="/image/cart.svg" className="mr-1"/>CART</li>
                </ul>
            </div>
        </>
    )
}