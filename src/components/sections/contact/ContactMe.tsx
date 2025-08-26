import { useState } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import SocialLink from "../SocialLink";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithubSquare, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import CopySectionLink from "../CopySectionLink";
import emailjs from "emailjs-com";

type ContactItemProps = {
    title: string;
    icon: ReactNode;
    description: string;
};

const ContactItem = ({ title, icon, description }: ContactItemProps) => {
    return (
        <div className="flex items-center gap-3 w-full">
            <div className="flex w-[25%] text-nowrap gap-2 md:gap-4 items-center">
                {icon}
                <p className="font-semibold">{title}</p>
            </div>
            <div className="flex w-fit text-wrap overflow-auto border items-center p-1 px-2 rounded md:p-2 md:px-3">
                <p className="text-neutral-800 dark:text-neutral-200">{description}</p>
            </div>
        </div>
    );
};

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setStatus(null);

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
        )
            .then(() => {
                setStatus("✅ Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                setStatus("❌ Failed to send message. Try again later.");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="w-full min-h-[90vh] py-12 flex flex-col items-center justify-center px-4 ">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Contact Me
                <span>
                    <CopySectionLink sectionId="contact" />
                </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* Contact Info */}
                <div className="flex flex-col gap-2 md:gap-4 w-full text-center items-start justify-center">
                    <ContactItem icon={<FaEnvelope className="text-xl" />} title={"Email"} description={"sikanderazam276@gmail.com"} />
                    <ContactItem icon={<FaPhoneAlt className="text-xl" />} title={"Phone"} description={"+923185836395"} />
                    <ContactItem icon={<FaMapMarkerAlt className="text-xl" />} title={"Location"} description={"Pakistan"} />

                    <div className="flex items-center gap-3 w-full my-6 md:m-0 md:mt-2">
                        <div className="flex w-full text-nowrap gap-4 md:gap-6 items-center justify-start">
                            <SocialLink link="https://github.com/AzamBaltistani" icon={<FaGithubSquare className="w-full h-full p-0 m-0" />} description={"Github"} />
                            <SocialLink link="https://www.linkedin.com/in/sikander-azam-899822265/" icon={<FaLinkedin className="w-full h-full p-0 m-0" />} description={"LinkedIn"} />
                            <SocialLink link="https://leetcode.com/u/sikanderazam276/" icon={<SiLeetcode className="w-full h-full p-0 m-0" />} description={"LeetCode Profile"} />
                            <SocialLink link="https://www.facebook.com/s.azam.baltistani" icon={<FaFacebook className="w-full h-full p-0 m-0" />} description={"Facebook"} />
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="w-full max-w-3xl rounded-xl p-6 border border-neutral-500 dark:border-neutral-800 md:mt-0">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 dark:border-neutral-800 p-3 rounded-lg w-full focus:outline-none focus:border-black dark:focus:border-neutral-400"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 dark:border-neutral-800 p-3 rounded-lg w-full focus:outline-none focus:border-black dark:focus:border-neutral-400"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border border-gray-300 dark:border-neutral-800 p-3 rounded-lg w-full mt-6 h-32 resize-none focus:outline-none focus:border-black dark:focus:border-neutral-400"
                        required
                    ></textarea>
                    <Button
                        type="submit"
                        variant={'outline'}
                        className="w-full mt-4"
                        disabled={isSending}
                    >
                        {isSending ? "Sending..." : "Send Message"}
                    </Button>
                    {status && <p className="mt-3 text-center">{status}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
