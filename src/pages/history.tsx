import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import capstone from '@/../public/images/capstone.jpg';

/* TODO:
 *
 */

export default function History() {
  return (
    <>
      <Head>
        <title>Gunn Alumni | History</title>
        <meta name="description" content="You have to know the past to understand the present" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="box-border px-4 py-4 md:px-24 md:py-10 lg:px-60 lg:py-10 flex flex-col gap-y-4">
        <div className="border-b-2 border-dotted">
          <h1 className="text-2xl font-bold"> History of Gunn </h1>
          <div className="p-5">
            <p>
            Established in 1964, Gunn High School has been a pivotal educational institution in Palo Alto, fostering academic excellence and community engagement.
             Over the decades, the school has grown from a modest beginning to a vibrant and diverse learning environment, adapting to the evolving needs of its students.
             With a rich history of achievements and innovations, Gunn remains committed to preparing future generations for success.
            </p>
            <ul className="list-disc px-10 py-3">
              <li>
                Creative innovation
              </li>
              <li>
                Rapidly developing for an advancing world.
              </li>
              <li>
                {' '}
                Enumerable research, significant impact on teh scientific community.
              </li>
            </ul>

            <p>
              To learn more about us, see our&#160;
              <Link
                className="underline text-primary"
                href="https://blog.gunnhigh.school/"
              >
                blog
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex justify-center px-32">
          <Image
            src={capstone}
            alt="photo of clowns"
            className="shadow-lg rounded-md"
          />
        </div>

        {/* Content in history page */}

        <div className="flex flex-row  justify-around gap-10 pb-10">
          {/* main leads */}
          <div className=" py-3 bg-gray-100 border-dashed border-2 shadow-lg w-56 text-center">
            <p className="font-bold">Oracle production</p>
            <p>Since 1964, establishment of Gunn High School</p>
            <p>Student led newspaper</p>
            <br></br>
            <p>Cycles of edits and review makes a final product every month</p>
          </div>

          {/* connections */}
          <div className="py-3 w-56 bg-gray-100 shadow-lg text-center border-dashed border-2">
            <p className="font-bold">Olympian</p>
            <p>Student led yearbook</p>

            <br></br>
            <p>300s of pages</p>
            <p>Showcase every exciting part of a day at Gunn</p>
            <p>Since 1964</p>
          </div>

          {/* Frontend */}

          <div className="py-3 text-center bg-gray-100 w-56 shadow-lg border-dashed border-2">
            <p className="font-bold">Timeline of Gunn</p>
            <p>From new buildings to repurposed sections</p>
            <p>Teachers and staff</p>
            <br></br>
            <p>Programs and departments</p>
            <p>Wrinkles in time</p>
          </div>

          {/* Backend */}

          <div className="py-3 text-center bg-gray-100 w-56 shadow-lg border-dashed border-2">
            <p className="font-bold">Sports historical records</p>
            <p>Well rounded titans</p>
            <br></br>
            <p>Proud of the past</p>
            <p>Inspires the future</p>
            <p>43 different sports</p>
          </div>
        </div>

        {/* new section - suggestions for the history page  */}

        <div className=" flex flex-col mb-20">
          <h1 className="text-xl font-bold p-2">Suggestions for history pages:</h1>
          <p>All feedbacks are greatly appreciated!</p>
          <iframe
            className="h-96 rounded-3xl m-4 shadow-lg"
            src="https://forms.gle/o9bmzkr5rjCiduLs5"
            title="Contact Form"
          ></iframe>
          <Link
            href="https://forms.gle/o9bmzkr5rjCiduLs5"
            className="text-primary hover:text-black underline"
          >
            https://forms.gle/o9bmzkr5rjCiduLs5
          </Link>
        </div>
      </div>
    </>
  );
}
