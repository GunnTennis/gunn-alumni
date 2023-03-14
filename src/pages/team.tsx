import Head from "next/head";
import Link from "next/link";

/* TODO:
* 
*/

export default function Team() {
    return (
        <>
            <Head>
                <title>Gunn Alumni | Team</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="box-border md:px-[25%] px-20 py-10 flex flex-col gap-y-4">
                <div className="border-b-2 border-dotted">
                    <h1 className="text-2xl font-bold"> About the Team </h1>
                    <div className="p-5">
                    <p>
                        We are a group of  students in Mr. Paley’s 4th period CS Capstone class who are building a website to connect Gunn alumni. We hope to give our graduates an accessible way to: 
                    </p>
                    <ul className="list-disc px-10 py-3">
                        <li>Connect with and celebrate each other, current students and teachers </li>
                        <li>Support their school and community through donations, events, etc.</li>
                        <li> and for administrators to get feedback from alumni for students to communicate with recent graduates</li>
                    </ul>

                    <p>To learn more about us, see our&#160;
                        <Link className="underline text-primary" href="https://blog.gunnhigh.school/">blog</Link>.
                    </p>
                    

                    </div>
                    
                </div>

                <div className="text-center p-20">[Insert Group Image Here]</div>

                <div className="grid grid-cols-3 gap-2 text-center">
                    <p className="font-bold">Connections</p>
                    <p className="font-bold">Front End</p>
                    <p className="font-bold">Back End</p>

                    <p>Ethan Zhang</p>

                    <div className="pb-3">
                        <p>Basil Lera</p>
                        <p>Lily Bedicheck</p>
                    </div>

                    <p>Sarah Dou</p>
                    

                    {/* Connections Team */}
                    <div>
                        <p>Ian Chen</p>
                        <p>Vincent Huai</p>
                        <p>Veer Ruparel</p>
                    </div>

                    {/* Front End Team */}
                    <div className="">
                        
                        <p>Patrick Chi</p>
                        <p>Emir Durakovic</p>
                        <p>Albert Lee</p>
                        <p>Aydan See</p>
                        <p>Michael Wu</p>
                        <p>Tunan Zhuang</p>
                        <p>Hubert Liu</p>
                    </div>

                    {/* Back End Team */}
                    <div>
                        <p>Matthew Grupenhoff</p>
                        <p>David Li</p>
                        <p>Zephan Sanghani</p>
                    </div>
                </div>
                
                <div className=" flex flex-col mb-20">
                    <h1 className="text-xl font-bold p-2">Contact Us:</h1>
                    <p>All feedback is greatly appreciated!</p>
                    <iframe className="h-96 rounded-3xl m-4 shadow-lg" src="https://forms.gle/o9bmzkr5rjCiduLs5" title="Contact Form"></iframe>
                </div>
            </div>
            
        </>
    )
}
