const fetchPosts = async (category, limit, page, id) => {
  const baseURL = `https://www.reddit.com/r/${category}.json?limit=${limit}`;
  const pagination = id ? `&${page}=${id}` : '';
  const URL = `${baseURL}${pagination}`;
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export default fetchPosts;
