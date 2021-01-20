import { useState, useEffect } from 'react';

function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: typeof window !== 'undefined' ? localStorage.getItem('windowWidth') : undefined,
		height: typeof window !== 'undefined' ? localStorage.getItem('windowHeight') : undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
			localStorage.setItem('windowWidth', window.innerWidth);
			localStorage.setItem('windowHeight', window.innerHeight);
		}

		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
}

export default useWindowSize;
