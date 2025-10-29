

export default function Navigation () {
    return (
        <>  

            <nav className="inline-flex  rounded-full pt-4 pb-4 pl-6 pr-6
             bg-[#C39FFD] text-white font-bold">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-2 cursor-pointer">
                    <div className="p-2">
                        <div className="justify-items-center">
                            <img src="src/images/250px-0007Squirtle.png" alt="squirtle" 
                            className="h-6 hover:animate-bounce" />
                            <p className="hover:animate-ping">Home</p>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="justify-items-center">
                            <img src="src/images/pikachu.png" alt="pikachu" 
                            className="h-6 hover:animate-bounce" />
                            <p className="hover:animate-ping">About</p>
                        </div>
                </div>

                    <div className="p-2">
                        <div className="justify-items-center">
                            <img src="src/images/eevee.png" alt="eeve" 
                            className="h-6 hover:animate-bounce" />
                            <p className="hover:animate-ping">Education</p>
                        </div>
                    </div>

                    <div className="p-2">
                        <div className="justify-items-center">
                           <img src="src/images/0195Quagsire.png" alt="quagsire" 
                            className="h-6 hover:animate-bounce" />
                            <p className="hover:animate-ping">Work</p> 
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="justify-items-center">
                            <img src="src/images/250px-0730Primarina.png" alt="primarina" 
                            className="h-6 hover:animate-bounce" />
                            <p className="hover:animate-ping">Projects</p>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="justify-items-center">
                            <img src="src/images/800px-0094Gengar.png" alt="gengar" 
                            className="h-6 hover:animate-bounce" />
                            <p className="hover:animate-ping">Inspiration</p>
                        </div>
                    </div>
                </div>
                
            </nav>
        </>
    )
}