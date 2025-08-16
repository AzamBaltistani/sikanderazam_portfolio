import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";
import { Mail, Menu, BookOpenText, FolderGit2, User2 } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";

const Navbar = () => {
    const navItems = [
        { label: "Sikander Azam", icon: <User2 />, href: "#about" },
        // { label: "Skills", icon: <CodeXml />, href: "#skills" },
        { label: "Portfolio", icon: <FolderGit2 />, href: "#portfolio" },
        { label: "Education", icon: <BookOpenText />, href: "#education" },
        { label: "Contact Me", icon: <Mail />, href: "#contact" },
    ];

    return (
        <nav className="flex w-full dark:bg-black bg-white border-b py-1 px-4 sticky top-0 z-30 opacity-90 items-center justify-between">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 justify-center w-full">
                {navItems.map((item) => (
                    <Button
                        asChild
                        variant="ghost"
                        className="hover:cursor-pointer gap-2 text-sm items-center justify-center"
                        size="sm"
                        key={item.label}
                    >
                        <a href={item.href}>
                            {item.icon}
                            {item.label}
                        </a>
                    </Button>
                ))}
            </div>

            {/* Mobile Menu */}
            <div className="flex md:hidden items-center gap-2">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-56">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-2 mt-4">
                            {navItems.map((item) => (
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="justify-start gap-2"
                                    key={item.label}
                                >
                                    <a href={item.href}>
                                        {item.icon}
                                        {item.label}
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Mode Toggle */}
            <ModeToggle />
        </nav>
    );
};

export default Navbar;
