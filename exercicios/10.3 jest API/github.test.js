const github = require('./github');
const { getRepositoryInfoFromUsername, getUserReposUrl } = github;
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('when calling getRepositoryInfoFromUsername function', () => {
  it('should parse the response into an object with name, company, location and twitter', async () => {
    
    expect.assertions(1);

    fetch.mockImplementation(async () => {
      return {
        json: async () => {
          return {
            name: 'Gabriel Oliva',
            company: '@betrybe',
            twitter_username: 'gfpoliva',
            location: 'Belo Horizonte'
          }
        }
      }
    });

    const repositoryInfo = await getRepositoryInfoFromUsername('gfpoliva');

    expect(repositoryInfo).toEqual({
      name: 'Gabriel Oliva',
      company: '@betrybe',
      twitter: 'gfpoliva',
      location: 'Belo Horizonte'
    });

  });

  it('should call a function named getUserReposUrl', () => {
    const spiedGetUserReposUrl = jest.spyOn(github, 'getUserReposUrl');

    spiedGetUserReposUrl('xablau');

    expect(spiedGetUserReposUrl).toHaveBeenCalledTimes(1);

    expect(spiedGetUserReposUrl('xablau')).toBe('https://api.github.com/users/xablau');

    spiedGetUserReposUrl('victormartins');
    expect(spiedGetUserReposUrl).toHaveBeenCalledWith('victormartins');
  });
});
