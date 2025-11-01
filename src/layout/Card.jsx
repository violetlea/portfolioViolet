export default function Card() {
	return (
		<>
			<div
				className="border border-white 
            h-110 w-90 md:h-120 md:w-100 pt-4.5 pb-2.5 pr-2 pl-2 justify-items-center
            rounded-xl bg-linear-to-r from-pink-400 via-rose-200 to-fuchsia-300
            shadow-md">
				<div
					className="inset-shadow-sm inset-shadow-[#FF98E3]-500
                h-100 w-80 md:h-110 md:w-90 rounded-xl bg-[#FF98E3]  ">
					<div
						className="bgCard h-100 w-80 md:h-110 md:w-90 
                        rounded-xl ">
						<div className="relative">
							<img
								src="src/images/picture for portfolio.png"
								className="h-100 w-80 md:h-110 md:w-90"
							/>
							<div>
								<div
									className="absolute top-2 bg-gray-300  
                                        left-1  p-0.5 rounded-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]
                                        ">
									<p
										className="font-bold text-gray-500 drop-shadow-sky-900
                                             text-xs italic">
										SPECIAL
									</p>
								</div>
								<div className="absolute top-1 right-40 md:right-45 ">
									<h1 className="text-xl md:text-2xl font-bold textStroke">
										AliaNabila
									</h1>
								</div>
								<div className="absolute top-2 md:top-2.5 right-18.5 md:right-20 ">
									<h1 className="text-2xs font-bold textStroke">HP</h1>
								</div>
								<div className="absolute top-1 right-10">
									<h1 className="text-xl md:text-2xl font-bold textStroke">
										999
									</h1>
								</div>
								<div className="absolute top-1.5 md:top-2 right-3">
									<img src="src/images/paw (1).png" className="h-6" />
								</div>
								<div className="absolute bottom-35 left-1">
									<div
										className="bg-linear-to-br from-slate-900 via-red-600 to-slate-900 pt-0.2 pb-0.2 pr-3 pl-3 
											border-2 border-gray-400 rounded-sm inset-shadow-red-50">
										<p className="text-xs text-white font-semibold tracking-widest italic">
											Ability
										</p>
									</div>
								</div>
								<div className="absolute bottom-34 left-22">
									<h1 className="text-xl  font-extrabold text-red-500 textStroke">
										Eagle Eye
									</h1>
								</div>
								<div className="absolute bottom-25 left-1">
									<h2 className="text-sm textStroke font-bold">
										She can spot a cat within a seconds and steal opponent's
										cat!
									</h2>
								</div>
								<div className="absolute inline-flex bottom-15 left-1">
									<img
										src="src/images/paw (1).png"
										className="h-6 drop-shadow-black "
									/>
									<img
										src="src/images/paw (1).png"
										className="h-6 drop-shadow-black"
									/>
								</div>
								<div className="absolute bottom-15 left-22">
									<h1 className="font-bold text-lg textStroke">Wink & Meow</h1>
								</div>
								<div className="absolute bottom-15 right-3">
									<h1 className="font-bold text-lg textStroke">120</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
