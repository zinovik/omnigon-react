const url = 'https://api.massrelevance.com/MassRelDemo/kindle.json';

export const getPosts = async () => {
  const fetchResult = await fetch(url);

  const fetchResultParsed = await fetchResult.json();

  if (fetchResultParsed.error) {
    throw new Error(fetchResultParsed.message);
  }

  return fetchResultParsed;
};
