import getUserResult from '@/lib/getUserResult';
import UserDetails from './components/UserDetails';

type Props = {
  params: {
    userName: string;
  };
};

export default async function UserResults({ params: { userName } }: Props) {
  const resultData: Promise<UserResult> = getUserResult(userName);
  const data: UserResult = await resultData;

  const content = (
    <main className='py-4 px-4 xl:px-40 text-white'>
      {data ? <UserDetails {...data} /> : <h2 className='p-2 text-xl'>{`${userName} Not Found`}</h2>}
    </main>
  );

  return content;
}
