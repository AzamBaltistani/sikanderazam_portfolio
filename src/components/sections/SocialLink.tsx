import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { ReactNode } from "react";

type SocialLinkProps = {
    link: string;
    icon: ReactNode;
    description: string;
};

const SocialLink = ({ link, icon, description }: SocialLinkProps) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <a href={link} target="blank" className="hover:cursor-pointer h-8 w-8 text-black/100 hover:text-black/80 dark:text-white dark:hover:text-white/80 ">
                    {icon}
                    <span className="sr-only">{description}</span>
                </a>
            </TooltipTrigger>
            <TooltipContent >
                <p>{description}</p>
            </TooltipContent>
        </Tooltip>
    )
}
export default SocialLink