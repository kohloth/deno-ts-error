export function sepCase(subject, sep = '-') {
	return subject
		.replace(/[A-Z]/g, (letter, index) => {
			const lcLet = letter.toLowerCase();
			return index ? sep + lcLet : lcLet;
		})
		.replace(/([-_ ]){1,}/g, sep);
}
