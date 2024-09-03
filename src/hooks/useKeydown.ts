import { useEffect } from "react";

const useKeydown = (keyCombination: [string, string], callback: () => void) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			const matchedKey = keyCombination.every(
				(item) =>
					(item === "Ctrl" && e.ctrlKey) ||
					item.toLowerCase() === e.key.toLowerCase(),
			);

			if (matchedKey) {
				e.preventDefault();
				callback();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [keyCombination, callback]);
};

export default useKeydown;
