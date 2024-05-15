import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-auto max-h-screen">
      <div className="bg-gray-200 flex justify-between items-center h-14 p-5 w-auto">
        <div>
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        <div className="flex text-black">
          <h1 className="px-10">Package</h1>
          <h1 className="px-10">Artist</h1>
          <h1 className="px-10">Gallery</h1>
        </div>
        <div>
          <div className="bg-red-500 h-auto w-22 px-2 py-1 rounded-lg">
            <button className="text-xs text-center m-0">Buy Ticket</button>
          </div>
        </div>
      </div>
      <div className="text-black p-10">
        <div className="flex justify-between items-center ">
          <div className="w-auto text-start">
            <div className="w-[500px]">
              <h1 className="px-4 py-2 font-semibold text-lg">
                What is Nyeni Fest 2024?
              </h1>
              <h1 className="p-4">
                Event Organized By The Student Executive Board Of The Bali
                Institute Of Design And Business That Carsries The Concept Of
                “Art And Music Festival” Which Contains Art Exhibitions, Music
                Concerts And Several Competitions. Established Since 2023 Which
                Successfully Brought National Bands Such As HiVi! And Fiersa
                Besari With A Total Audience Of 3,603 People.
              </h1>
            </div>
          </div>
          <div>
            <Image
              src="/3.png"
              width={400}
              height={400}
              alt="konser"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="bg-gray-200 w-80 h-[128px] p-2 mx-4 rounded-md">
          <div className="px-4">
            <div className="flex items-center">
              <Image
                src="/location.png"
                width={20}
                height={20}
                alt="icon location"
              />
              <p className="p-2">Denpasar, Bali</p>
            </div>
            <div className="flex items-center">
              <Image
                src="/calendar.png"
                width={20}
                height={20}
                alt="icon calendar"
              />
              <p className="p-2">7 - 8 June 2024</p>
            </div>
            <div className="flex items-center">
              <Image src="/clock.png" width={20} height={20} alt="icon clock" />
              <p className="p-2">08:00 - 23:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
