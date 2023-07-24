import { motion } from 'framer-motion'

export function Hero(props: any) {
    return (
        <section className={`relative w-full h-screen mx-auto bg-slate-800`}>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto  flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915EFF]"></div>
                    <div className="w-1 h-80 violet-gradient"></div>
                </div>

                <div>
                    <h1 className={`text-white`}>
                        Hi, I'm{' '}
                        <span className="text-[#915EFF]">Enis Zejnilovic</span>
                    </h1>
                    <p className="mt-2 text-white-100">
                        I develop 3D visuals, user <br className="block" />
                        interfaces and web applications
                    </p>
                </div>
            </div>

            <div className="absolute bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}
