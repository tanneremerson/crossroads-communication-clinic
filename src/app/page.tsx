import Link from 'next/link';
import Image from 'next/image';

const ABOUT_ID = 'about';
const MISSION_ID = 'mission';
const CONNECT_ID = 'connect';

export default function Home() {
  return (
    <main>
      <Nav></Nav>
      <Header1>LOGO</Header1>
      <div className="p-[5%]">
        Is a speech therapy clinic based in Sandy, UT. Our mission is to provide holistic,
        neurodiversity-affirming speech therapy to people who stutter of all ages.
        <br />
        <br />
        Learn to embrace your authentic voice, speak confidently and skillfully, and excel as a
        communicator with stuttering specialist, Katie Emerson, M.S., CCC-SLP.
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 justify-items-center text-sm">
          <div id={ABOUT_ID} className="bg-grey-200 w-11/12 rounded-lg p-3">
            <Header2>about me</Header2>
            <Image
              src="/katie.png"
              alt="Picture of SLP"
              width={200}
              height={200}
              className="rounded-xl float-right"
            ></Image>
            <p>
              Since first learning about stuttering, I have had a deep interest in working with
              people who stutter. I had the privilege of earning my Master’s degree at the
              University of Texas, Austin. There, I was fortunate to train at the Arthur M. Blank
              Center for Stuttering Education and Research, learning to implement their cutting edge
              C.A.R.E. model. I have worked with children as young as two, all the way through to
              adults in their golden years.
              <br />
              <br />
              Research shows us that stuttering occurs due to differences in brain structure and
              function (Chang, 2013,) and that the most impactful way for people who stutter to
              effect long-term change is to develop strong communication skills, resiliency,
              self-advocacy, and self-compassion.
            </p>
            <br />
            <p className="text-xs font-thin">
              Chang, S., & Zhu, D.C., (2013). Neural network connectivity differences in children
              who stutter. Brain: a journal fo neurology, 136 Pt 12, 3709-26.
            </p>
          </div>
          <div id={MISSION_ID} className="bg-grey-200 w-11/12 rounded-lg p-3">
            MISSION STATEMENT
          </div>
          <div id={CONNECT_ID} className="bg-grey-200 w-11/12 rounded-lg p-3">
            CONNECT
          </div>
        </div>
      </div>
    </main>
  );
}

function Header1({ children }: { children: string }) {
  // TODO: PADDING SHOULDN'T BE HERE IN IT'S CURRENT FORM
  return <h1 className="text-2xl pl-[5%] font-bold">{children}</h1>;
}

function Header2({ children }: { children: string }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

function Nav() {
  return (
    <div className="flex flex-row-reverse space-x-3 space-x-reverse pr-[5%] pt-4 text-l font-medium">
      <Link href={`#${CONNECT_ID}`}>connect</Link>
      <Link href={`#${ABOUT_ID}`}>about</Link>
    </div>
  );
}
