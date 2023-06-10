import Image from 'next/image';
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import Card from './Card';
import RepoList from './RepoList';

export default function UserDetails(user: UserResult) {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-3 mb-8 mt-8 md:gap-8'>
        <div className='col-span-1 mt-6 mb-6 md:mb-0 flex justify-center items-start'>
          <Image src={user.avatar_url} alt={user.name} width={200} height={200} className='rounded-full' />
        </div>
        <div className='col-span-2'>
          <div className='mb-6'>
            <h1 className='text-3xl card-title'>{user.name}</h1>
            <p>{user.bio}</p>
            <div className='flex justify-center mt-4'>
              <a
                className='bg-slate-300 text-slate-900 p-3 rounded-md shadow-md hover:shadow-indigo-800'
                href={user.html_url}
                target={'_blank'}
              >
                Visit Github Profile
              </a>
            </div>
          </div>
          <div className='w-full flex flex-col gap-2 md:gap-0 md:flex-row justify-start md:justify-between items-center'>
            {user.location && <Card tittle='Location' value={user.location} />}
            {user.twitter_username && <Card tittle='Twitter' value={user.twitter_username} link={true} />}
            {user.blog && <Card tittle='Website' value={user.blog} blog={true} />}
          </div>
        </div>
      </div>
      <div className='w-full py-5 mb-6 grid grid-cols-1 md:grid-cols-4 gap-2'>
        <div className='bg-slate-900 p-4 flex flex-row justify-between items-center gap-4 rounded-md'>
          <div className='flex flex-col justify-start'>
            <div className='pr-5'>Followers</div>
            <div className='pr-5 text-3xl md:text-4xl'>{user.followers}</div>
          </div>
          <FaUsers className={'text-3xl md:text-5xl'} />
        </div>
        <div className='bg-slate-900 p-4 flex flex-row justify-between items-center gap-4 rounded-md'>
          <div className='flex flex-col justify-start'>
            <div className='pr-5'>Following</div>
            <div className='pr-5 text-3xl md:text-4xl'>{user.following}</div>
          </div>
          <FaUserFriends className={'text-3xl md:text-5xl'} />
        </div>
        <div className='bg-slate-900 p-4 flex flex-row justify-between items-center gap-4 rounded-md'>
          <div className='flex flex-col justify-start'>
            <div className='pr-5'>Public Repos</div>
            <div className='pr-5 text-3xl md:text-4xl'>{user.public_repos}</div>
          </div>
          <FaCodepen className={'text-3xl md:text-5xl'} />
        </div>
        <div className='bg-slate-900 p-4 flex flex-row justify-between items-center gap-4 rounded-md'>
          <div className='flex flex-col justify-start'>
            <div className='pr-5'>Public Gists</div>
            <div className='pr-5 text-3xl md:text-4xl'>{user.public_gists}</div>
          </div>
          <FaStore className={'text-3xl md:text-5xl'} />
        </div>
      </div>
      <RepoList repos_url={user.repos_url} />
    </>
  );
}
