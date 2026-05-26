export function getCurrentYear(): number {
	return new Date().getFullYear();
}

export function getYearsLabel(startYear: number): string {
	const now = new Date();

	const currentYear = now.getFullYear();
	const currentMonth = now.getMonth(); // 0-11

	const years = currentYear - startYear;

	// Más de 3 meses desde enero
	const exceededThreeMonths = currentMonth > 2;

	return exceededThreeMonths ? `+${years}` : `${years}`;
}
