export default function BoxContainer(props) {
	const { children } = props;
	return (
		<>
			<div className="justify-items-center mt-2 h-full grid grid-cols-1 p-4 md:p-10 w-full">
				<div className="border border-white h-auto w-90  md:w-200 bg-pink-300 rounded-xl p-4">
					{children}
				</div>
			</div>
		</>
	);
}
