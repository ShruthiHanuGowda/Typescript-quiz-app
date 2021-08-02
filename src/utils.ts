// functions to randomise answers to questions
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const shuffleArray = (array: any[]) => [...array].sort( () => Math.random() - 0.5)