import {ShoppingCart, UserIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";


const Header = () => {  
    return <header className="w-full border-b">
        <div className="wrapper flex justify-between items-center py-4">
            <div className="flex items-center">
                <Link href="/" className="flex items-center">
                    <Image src="/images/logo.svg" alt="Logo" width={40} height={40} priority={true}/>  
                    <span className="hidden lg:block font-bold text-2xl ml-3">Prostore</span>  
                </Link>
            </div>
            <div className="space-x-2 flex items-center">
                <Button asChild variant="ghost">
                    <Link href="/cart">
                        <ShoppingCart /> Cart
                    </Link>
                </Button>
                <Button asChild variant="ghost">
                    <Link href="/sign-in">
                        <UserIcon /> Sign in 
                    </Link>
                </Button>
            </div>
        </div>
    </header>
}
 
export default Header;