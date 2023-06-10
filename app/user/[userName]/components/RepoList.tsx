import getRepos from '@/lib/getRepos';
import RepoItem from './RepoItem';

interface PropTypes {
  repos_url: string;
}
const RepoList = async ({ repos_url }: PropTypes) => {
  const resultData = getRepos(repos_url);
  const repos: Repo[] = await resultData;

  console.log(repos);

  return (
    <div className={'rounded-lg shadow-lg card bg-base-100'}>
      <h2 className='text-3xl my-4 font-bold card-title'>Latest Repositories</h2>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {repos.map((repo, key) => (
          <RepoItem key={key} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepoList;
