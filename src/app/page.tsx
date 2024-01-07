import Link from 'next/link';

const ABOUT_ID = 'about';
const MISSION_ID = 'mission';
const CONNECT_ID = 'connect';

export default function Home() {
  return (
    <main>
      <Nav></Nav>
      <Header>LOGO</Header>
      <div className="p-[5%]">
        Is a speech therapy clinic based in Sandy, UT. Our mission is to provide holistic,
        neurodiversity-affirming speech therapy to people who stutter of all ages.
        <br />
        <br />
        Learn to embrace your authentic voice, speak confidently and skillfully, and excel as a
        communicator with stuttering specialist, Katie Emerson, M.S., CCC-SLP.
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 justify-items-center">
          <div id={ABOUT_ID} className="bg-grey-200 w-11/12 rounded-lg p-1">
            ABOUT
          </div>
          <div id={MISSION_ID} className="bg-grey-200 w-11/12 rounded-lg p-1">
            MISSION STATEMENT
          </div>
          <div id={CONNECT_ID} className="bg-grey-200 w-11/12 rounded-lg p-1">
            CONNECT
          </div>
        </div>
      </div>
    </main>
  );
}

function Header({ children }: { children: string }) {
  return <h1 className="text-2xl pl-[5%] font-bold">{children}</h1>;
}

function Nav() {
  return (
    <div className="flex flex-row-reverse space-x-3 space-x-reverse pr-[5%] pt-4 text-l font-medium">
      <Link href={`#${CONNECT_ID}`}>connect</Link>
      <Link href={`#${ABOUT_ID}`}>about</Link>
    </div>
  );
}
