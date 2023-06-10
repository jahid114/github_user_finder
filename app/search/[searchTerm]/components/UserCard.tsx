import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const UserCard = ({ userName, avatarUrl }: { userName: string; avatarUrl: string }) => {
  return (
    <div className='shadow-sm shadow-slate-500/80 bg-slate-900 rounded-md'>
      <div className='flex flex-row items-center space-x-4 card-body justify-between p-4'>
        <div className='flex flex-row items-center justify-center gap-2'>
          <Image src={avatarUrl} alt='Profile' height={70} width={70} className='rounded-full' />
          <h2 className='w-5'>{userName}</h2>
        </div>
        <div>
          <Link
            href={`/user/${userName}`}
            className='bg-slate-300 p-2 rounded-md text-slate-900 shadow-lg hover:shadow-indigo-700/80'
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
