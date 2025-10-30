import BoxContainer from "../layout/Box";
import { aboutMe } from "../data/aboutMe";
export default function AboutMe() {
	return (
		<>
			<BoxContainer>
				<h1>About Me</h1>
				<p>Name : {aboutMe.basicInfo.name}</p>
			</BoxContainer>
		</>
	);
}
