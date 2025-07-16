export function formatDateToYYYYMMDD(date: Date): string {
	if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
		// Return a fallback string or handle the error as needed
		return "Invalid Date";
	}
	return date.toISOString().slice(0, 10);
}
