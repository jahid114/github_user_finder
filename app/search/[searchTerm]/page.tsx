import getSearchResults from '@/lib/getSearchResults';
import UserCard from './components/UserCard';

type Props = {
  params: {
    searchTerm: string;
  };
};

export default async function SearchResults({ params: { searchTerm } }: Props) {
  const resultData: Promise<SearchResult> = getSearchResults(searchTerm);
  const data = await resultData;
  const results: Result[] | undefined = data?.items;

  const content = (
    <main className='py-4 px-4 xl:px-40 text-white grid grid-cols-1 gap-8 2xl:grid-cols-3 md:grid-cols-2'>
      {results ? (
        Object.values(results).map((result) => {
          return <UserCard key={result.id} userName={result.login} avatarUrl={result.avatar_url} />;
        })
      ) : (
        <h2 className='p-2 text-xl'>{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
