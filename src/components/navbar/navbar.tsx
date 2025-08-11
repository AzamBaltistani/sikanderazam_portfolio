import { Button } from "../ui/button";
import { Home, Info, Mail } from "lucide-react";

const Navbar = () => {
    const navItems = [
        { label: "Home", icon: <Home size={16} />, href: "#" },
        { label: "About", icon: <Info size={16} />, href: "#" },
        { label: "Contact Me", icon: <Mail size={16} />, href: "#" },
    ];

    return (
        <nav className="flex w-full items-center justify-center dark:bg-black bg-white border-b py-3">
            <div className="flex items-center gap-4">
                {navItems.map((item) => (
                    <div key={item.label} className="flex items-center">
                        <Button
                            asChild
                            variant="ghost"
                            className="hover:cursor-pointer gap-1 text-sm"
                        >
                            <a href={item.href}>
                                {item.icon}
                                {item.label}
                            </a>
                        </Button>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
