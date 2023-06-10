import React from 'react';

interface PropType {
  tittle: string;
  value: string;
  link?: boolean;
  blog?: boolean;
}

function card({ tittle, value, link, blog }: PropType) {
  return (
    <div className='bg-slate-900 p-4 w-11/12 md:w-1/3 rounded-md'>
      <div className='text-md'>{tittle}</div>
      {link && (
        <div className='text-lg font-bold'>
          <a href={`https://twitter.com/${value}`} target={'_blank'}>
            {value}
          </a>
        </div>
      )}
      {blog && (
        <div className='text-lg font-bold'>
          <a href={`https://${value}`} target={'_blank'}>
            {value}
          </a>
        </div>
      )}
      {!link && !blog && <div className='text-lg font-bold'>{value}</div>}
    </div>
  );
}

export default card;
