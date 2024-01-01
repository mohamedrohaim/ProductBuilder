/**
 * Slices a given text to a specified maximum length, appending "..." if needed.
 *
 * @param {string} text - The input text to be sliced.
 * @param {number} [max=50] - The maximum length to which the text should be sliced.
 * @returns {string} - The sliced text, possibly appended with "..." if it exceeds the maximum length.
 *
 * @example
 * // Slicing text to a maximum length of 20 characters
 * const result = textSlicer("This is a long text to be sliced", 20);
 * console.log(result); // Output: "This is a long te..."
 */

export function textSlicer(text:string,max:number=50):string{
    if (text.length>=max) {
    return text.slice(0,max)+" ...."
    }
    return text;
}

