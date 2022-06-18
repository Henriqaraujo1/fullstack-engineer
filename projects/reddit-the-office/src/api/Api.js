export const Api = 'https://www.reddit.com'

export const getDataReddit = async (subreddit) => {
    const response = await fetch(`${Api}/${subreddit}.json`)
    const json = await response.json();

    return json.data.children.map((post) => post.data)
};


export const getPostComments = async (permalink) => {
    const response = await fetch(`${Api}${permalink}.json`);
    const json = await response.json();

    return json[1].data.children.map((subreddits) => subreddits.data);
}