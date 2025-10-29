

export default function Navigation () {
    return (
        <>  

            <nav className="inline-flex  rounded-full p-8
             bg-[#C39FFD] text-white font-bold">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                    <div className="border border-black p-2">
                        <div className="justify-items-center">
                            <img src="src/images/pngimg.com - pokeball_PNG24.png" alt="pokeball image" 
                            className="h-5" />
                            <p>Home</p>
                        </div>
                    </div>
                    <div className="border border-black p-2">
                        <div className="justify-items-center">
                            <img src="src/images/pngimg.com - pokeball_PNG24.png" alt="pokeball image" 
                            className="h-5" />
                            <p>About</p>
                        </div>
                </div>

                    <div className="border border-black p-2">
                        <div className="justify-items-center">
                            <img src="src/images/pngimg.com - pokeball_PNG24.png" alt="pokeball image" 
                            className="h-5" />
                            <p>Education</p>
                        </div>
                    </div>

                    <div className="border border-black p-2">
                        <div className="justify-items-center">
                           <img src="src/images/pngimg.com - pokeball_PNG24.png" alt="pokeball image" 
                            className="h-5" />
                            <p>Work</p> 
                        </div>
                    </div>
                    <div className="border border-black p-2">
                        <div className="justify-items-center">
                            <img src="src/images/pngimg.com - pokeball_PNG24.png" alt="pokeball image" 
                            className="h-5" />
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="border border-black p-2">
                        <div className="justify-items-center">
                            <img src="src/images/pngimg.com - pokeball_PNG24.png" alt="pokeball image" 
                            className="h-5" />
                            <p>Inspiration</p>
                        </div>
                    </div>
                </div>
                
            </nav>
        </>
    )
}