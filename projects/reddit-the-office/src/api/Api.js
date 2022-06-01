export const Api = 'https://www.reddit.com/r/DunderMifflin.json'
export const response = await fetch(Api);
export const json = await response.json()