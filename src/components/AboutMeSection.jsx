    import React from 'react'
    import cv from '/CV.pdf'
    import { Briefcase, Code, User } from "lucide-react"

    const AboutMeSection = () => {
        return (
            <section id="about" className="relative py-24 px-4 min-h-screen">

                <div className="container mx-auto max-w-5xl">

                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="space-y-6">

                            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                                Passionate Web Developer
                            </h3>

                            <p className="text-muted-foreground leading-relaxed">
                                I am a Computer Science student and Full-Stack Web Developer with a strong foundation in modern web technologies. I build responsive, scalable, and user-friendly applications using React, Node.js, and MongoDB.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                I also have a growing passion for cybersecurity and secure software development, with hands-on experience using tools like Nmap, Wireshark, and Burp Suite.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                I am a continuous learner who enjoys solving complex problems and building secure, efficient, and impactful software solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                                <a href="#contact" className="cosmic-button">
                                    Get In Touch
                                </a>

                                <a
                                    href={cv}
                                    download="Utsav_Pandit_CV.pdf"
                                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                >
                                    Download CV
                                </a>

                            </div>

                        </div>

                        <div className="grid grid-cols-1 gap-6">

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Web Development</h4>
                                        <p className="text-muted-foreground">
                                            Creating responsive websites and web applications with
                                            modern frameworks.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <User className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">UI/UX</h4>
                                        <p className="text-muted-foreground">
                                            Building scalable, user-friendly, and highly interactive websites 
                                            designed for seamless navigation and engagement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">Project Management</h4>
                                        <p className="text-muted-foreground">
                                        Leading projects from conception to 
                                        completion with agile methodologies
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        )
    }

    export default AboutMeSection
