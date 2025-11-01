import BoxContainer from "../layout/Box"
import { education } from "../data/educationMe"
export default function EducationMe () {
    return (
        <BoxContainer>
            <div className="text-center">
                <div className="inline-flex gap-2">
						<img
							src="src/images/pngimg.com - pokeball_PNG24.png"
							className="h-6"
						/>
						<h1 className="font-bold text-xl">Education</h1>
						<img
							src="src/images/pngimg.com - pokeball_PNG24.png"
							className="h-6"
						/>
					</div>
            </div>
			<div className="grid grid-cols-1 pt-3">
				<div className="justify-items-center">
					<ul>
						<li className="border-l-5 border-purple-400  ">
							<div className="ml-5 h-auto">
								{/* year */}
								<div className="p-4">
									<p className="font-bold underline">{education.degree.year}</p>
								</div>
								<div className="bg-pink-100 p-4 rounded-xl">
									<p className="font-bold text-sm italic">{education.degree.course}</p>
									<p className="font-bold text-gray-600 text-xs italic">{education.degree.university}</p>
									<p className="pt-4">{education.degree.activities.act1.desc}</p>
									<ul className="text-sm list-decimal list-inside">
										<li>
											{education.degree.activities.act1.point1}
											<ul className="ml-5 text-xs list-disc list-inside">
												{
													education.degree.activities.act1.points1.map((item) => (
														<li>{item}</li>
													))
												}
												
											</ul>
										</li>
										<li>
											{education.degree.activities.act1.point2}
											<ul className="ml-5 text-xs list-disc list-inside">
												{
													education.degree.activities.act1.points2.map((item) => (
														<li>{item}</li>
													))
												}
											</ul>
										</li>
										<li>
											{education.degree.activities.act1.point3}
											<ul className="ml-5 text-xs list-disc list-inside">
												<li>
													{education.degree.activities.act1.points3}
												</li>
											</ul>
										</li>
									</ul>
								</div>

							</div>
						</li>
						<li className="border-l-5 border-blue-400">
							<div className="ml-5 h-auto">
								<div className="p-4">
									<p className="font-bold underline">{education.diploma.year}</p>
								</div>
								<div className="bg-pink-100 p-4 rounded-xl">
									<p className="font-bold text-sm italic">{education.diploma.course}</p>
									<p className="font-bold text-gray-600 text-xs italic">{education.diploma.university}</p>
									<ul className="mt-4 text-sm list-decimal list-inside">
										<li>
											{education.diploma.activities.act1.desc} 
											<p className="ml-5">{education.diploma.activities.act1.point1}</p>
											<ul className="ml-5 text-xs list-disc list-inside">
												{
													education.diploma.activities.act1.points.map((point) => (
														<li>{point}</li>
													))
												}
											</ul>
										</li>
										<li>
											{education.diploma.activities.act2.desc}
											<ul className="ml-5 text-xs list-disc list-inside">
												{
													education.diploma.activities.act2.points.map((point) => (
														<li>{point}</li>
													))
												}

											</ul>
										</li>
										<li>
											{education.diploma.activities.act3.desc}
											<ul className="ml-5 text-xs list-disc list-inside">
												<li>{education.diploma.activities.act3.point1}</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>

						</li>
					</ul>

				</div>


			</div>
        </BoxContainer>
    )
}