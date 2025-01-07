export function calculateDays(enter_date: string, exit_date: string): number  {
    // Parse the input dates
    const startDate = new Date(enter_date);
    const endDate = new Date(exit_date);

    // Validate dates
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new Error('Invalid date format');
    }

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to days
    const daysDifference = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return daysDifference;
}
export function convertToNumber(value: string): number | null {
    // Remove spaces and convert to number
    const sanitizedValue = value.replace(/\s/g, ''); // Remove all spaces
    const numberValue = parseFloat(sanitizedValue);

    // Check if the result is a valid number
    return isNaN(numberValue) ? null : numberValue;
}