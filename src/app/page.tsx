import Link from 'next/link';
import Image from 'next/image';

const ABOUT_ID = 'about';
const MISSION_ID = 'mission';
const CONNECT_ID = 'connect';

export default function Home() {
  return (
    <main>
      <Nav></Nav>
      <div className="pl-[5%]">
        <Image src="/logo.png" alt="Picture of SLP" width={300} height={100} className="pl-3" />
      </div>
      <div className="p-[5%] text-xl">
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
            <h2 className="text-3xl font-bold">about me</h2>
            <Image
              src="/katie.png"
              alt="Picture of SLP"
              width={200}
              height={300}
              className="float-right pl-3"
            />
            <p className="text-xl">
              Since first learning about stuttering, I have had a deep interest in working with
              people who stutter. I had the privilege of earning my Master’s degree at the
              University of Texas, Austin. There, I was fortunate to train at the Arthur M. Blank
              Center for Stuttering Education and Research, learning to implement their cutting edge
              C.A.R.E. model. I have worked with children as young as two, all the way through to
              adults in their golden years.
              <br />
              <br />
              Research shows us that stuttering occurs due to differences in brain structure and
              function (Chang, 2013,) and I believe that the most impactful way for people who
              stutter to effect long-term change is to develop strong communication skills,
              resiliency, self-advocacy, and self-compassion.
            </p>
            <br />
            <p className="text-xs font-thin">
              Chang, S., & Zhu, D.C., (2013). Neural network connectivity differences in children
              who stutter. Brain: a journal fo neurology, 136 Pt 12, 3709-26.
            </p>
          </div>
          <div id={MISSION_ID} className="bg-grey-200 w-11/12 rounded-lg p-5 text-secondary-500">
            <h2 className="text-3xl font-bold text-center">
              Whether you speak fluently or stutter on every word you say, your voice matters.
              <br />
              <br />
              Isn’t it time you showed that to the rest of the world?
            </h2>
          </div>
          <div
            id={CONNECT_ID}
            className="bg-grey-200 w-11/12 rounded-lg p-5 flex flex-col justify-center"
          >
            <div className="">
              <Image
                src="/one-word-logo.png"
                alt="Picture of SLP"
                width={300}
                height={100}
                className="mx-auto"
              />
            </div>
            <div className="text-center w-full">
              <h2 className="text-3xl font-bold">connect now for a free consultation</h2>
            </div>
            <div className="text-center w-full">
              <form>
                <div>
                  <div>
                    <label className="block text-gray-700 text-xl font-bold mb-2">Email</label>
                  </div>
                  <div>
                    <input
                      className="shadow appearance-none border text-xl rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                      id="email"
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-4 w-full">
                  <label className="block text-gray-700 text-xl font-bold mb-2">Message</label>
                  <textarea
                    className="shadow appearance-none border rounded py-2 px-3 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                    id="message"
                  />
                </div>
                <div className="w-full">
                  <button
                    className="bg-primary-500 hover:bg-primary-700 text-grey-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="p-1" />
        </div>
      </div>
    </main>
  );
}

function Nav() {
  return (
    <div className="flex flex-row-reverse space-x-3 space-x-reverse pr-[5%] pt-4 text-2xl font-medium">
      <Link href={`#${CONNECT_ID}`}>connect</Link>
      <Link href={`#${ABOUT_ID}`}>about</Link>
    </div>
  );
}
