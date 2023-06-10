import React from 'react';

import { FaStar } from 'react-icons/fa';
import { CgGitFork } from 'react-icons/cg';

interface PropTypes {
  repo: Repo;
}

const RepoItem = ({ repo }: PropTypes) => {
  return (
    <div className='bg-slate-900 text-slate-300 p-3 rounded-md flex flex-col gap-2 justify-between'>
      <h1 className='font-bold'>{repo.name}</h1>
      {repo.description && <p className='pt-2'>{repo.description}</p>}
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col justify-start'>
          <div className='flex flex-row items-center'>
            <CgGitFork className={'mr-2'} />
            {repo.forks_count}
          </div>
          <div className='flex flex-row items-center'>
            <FaStar className={'mr-2'} />
            {repo.stargazers_count}
          </div>
        </div>
        <div className='p-2 bg-slate-300 text-slate-900 rounded-md'>
          <a href={repo.html_url} target='_blank'>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
