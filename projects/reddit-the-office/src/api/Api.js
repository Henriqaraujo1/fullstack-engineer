export const Api = 'https://www.reddit.com/r/DunderMifflin.json'

export const getDataReddit = async () => {
    const response = await fetch(`${Api}`)
    const json = await response.json();

    return json.data.children.map((post) => post.data)
}