import { useState } from "react";
import { SlLink } from "react-icons/sl";
import { FaRegCheckCircle } from "react-icons/fa";

interface CopyLinkProps {
    sectionId: string;
}

const CopySectionLink = ({ sectionId }: CopyLinkProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;

        // Update the browser URL without reload
        window.history.pushState(null, "", `#${sectionId}`);

        // Copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <button
            onClick={handleCopy}
            className="p-2 px-4 rounded-full hover:cursor-pointer hover:scale-125 hover:rotate-3 transition"
            title="Copy section link"
        >
            {copied ? (
                <FaRegCheckCircle className="w-4 h-4 md:w-6 md:h-6 text-green-300 dark:text-green-800" />
            ) : (
                <SlLink className="w-4 h-4 md:w-6 md:h-6 text-neutral-500 dark:text-neutral-400" />
            )}
        </button>
    );
};

export default CopySectionLink;