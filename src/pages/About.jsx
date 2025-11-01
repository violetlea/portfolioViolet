import BoxContainer from "../layout/Box";
import { aboutMe } from "../data/aboutMe";
export default function AboutMe() {
	return (
		<>
			<BoxContainer>
				<div className="text-center">
					<div className="inline-flex gap-2">
						<img
							src="src/images/pngimg.com - pokeball_PNG24.png"
							className="h-6"
						/>
						<h1 className="font-bold text-xl">About Me</h1>
						<img
							src="src/images/pngimg.com - pokeball_PNG24.png"
							className="h-6"
						/>
					</div>
					<div className="grid grid-cols-1 gap-2 justify-items-center p-2">
						<div className="bg-violet-300 rounded-full p-5 border border-white shadow-xl">
							<img src="src/images/faceannoy.png" className="h-20" />
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center p-2">
						<div className="border border-gray-500 bg-neutral-200 rounded-full p-2 w-full">
							<p>Name : {aboutMe.basicInfo.name}</p>
						</div>
						<div className="border border-gray-500 bg-neutral-200 rounded-full p-2 w-full">
							<p>Date of birth : {aboutMe.basicInfo.DOB}</p>
						</div>
						<div className="border border-gray-500 bg-neutral-200 rounded-full p-2 w-full">
							<p>Email : {aboutMe.basicInfo.mail}</p>
						</div>
						<div className="border border-gray-500 bg-neutral-200 rounded-full p-2 w-full">
							<p>Location : {aboutMe.basicInfo.location}</p>
						</div>
					</div>
					<div className="p-4 w-full">
						<p>Description :</p>
						<p className="text-sm md:text-base italic">
							{aboutMe.basicInfo.longText}
						</p>
					</div>
					<div className="grid grid-cols-2 gap-2 p-2 mt-2 ">
						<div className="p-2">
							<p className="italic font-bold">I can speak...</p>
							<ul>
								<li>{aboutMe.Languages.lang1}</li>
								<li>{aboutMe.Languages.lang2}</li>
								<li>{aboutMe.Languages.lang3}</li>
								<li>{aboutMe.Languages.lang4}</li>
							</ul>
						</div>
						<div className="p-2">
							<p className="italic font-bold">I love/enjoy...</p>
							<ul>
								<li>{aboutMe.Interest.int1}</li>
								<li>{aboutMe.Interest.int2}</li>
								<li>{aboutMe.Interest.int3}</li>
								<li>{aboutMe.Interest.int4}</li>
								<li>{aboutMe.Interest.int5}</li>
							</ul>
						</div>
						{/* socials */}
					</div>
					<div className="grid grid-cols-1 justify-items-center  p-2 w-full">
						<div>
							<div className="font-bold italic">
								<p className="pb-3">Connect with me at...</p>
								<div className="inline-flex gap-3 ">
									<a
										href={aboutMe.Links.github}
										target="_blank"
										className="cursor-pointer">
										<img src="src/images/github.png" className="h-10" />
									</a>
									<a
										href={aboutMe.Links.linkedin}
										target="_blank"
										className="cursor-pointer">
										<img src="src/images/linkedin.png" className="h-10" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</BoxContainer>
		</>
	);
}
