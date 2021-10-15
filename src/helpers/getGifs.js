

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iiy2K8DU5xZSdE5PFgY0ZCk5kAJe2H0f&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}