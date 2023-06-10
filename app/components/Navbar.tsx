import Link from 'next/link';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className='px-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl bg-slate-900 py-4 lg:px-24 xl:px-40'>
      <h1 className={`text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0`}>
        <Link href='/'>Github Finder</Link>
      </h1>
      <Search />
    </nav>
  );
}
