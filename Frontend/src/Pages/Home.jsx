import Carousel from "./Carousel";

const Home = () => {
  const sec3 = [
    {
      img: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/14ae6b3d-298d-445c-b562-6717b31fee04.png?updatedAt=1755716733798",
    },
    {
      img: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/54260a75-a278-4b04-874a-425fce4d1ca7.png?updatedAt=1755716733867",
    },
    {
      img: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/30a1705d-c34c-4376-9533-0737f2776803.png?updatedAt=1755716733877",
    },
    {
      img: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/af3baf3f-f5a5-4f89-8b4d-e2c25ad5a88b.png?updatedAt=1755716733903",
    },
    {
      img: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/c2868b7d-1900-45d6-bf1b-1cd0d9d2cd1d.png?updatedAt=1755716733912",
    },
  ];
  const sec2 = [
    {
      img1: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/dbca550b-f962-4968-a409-1f19db93ebf6.jpg?updatedAt=1755689030717",
      img2: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/bd06b86f-191b-40d3-a549-07a27b8ea400.jpg?updatedAt=1755689030535",
      text: "BestSeller",
    },
    {
      img1: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/10003.jpg?updatedAt=1755687950579",
      img2: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/10002.jpg?updatedAt=1755687950884",
      text: "New Arrivel",
    },
    {
      img1: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/0bf441a4-1136-4566-8dd5-26ea452972f0.png?updatedAt=1755689030901",
      img2: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/51bb6a87-e998-4bad-907f-28181c934345.png?updatedAt=1755689030807",
      text: "For Women",
    },
    {
      img1: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/59e69538-346f-4949-970b-6bfb208c8ce5.png?updatedAt=1755689030846",
      img2: "https://ik.imagekit.io/6i2qiqf2n/Shoping%20App/aeeec548-58c5-4eec-b771-8205ed8e5e2f.png?updatedAt=1755689031029",
      text: "For Men",
    },
  ];

  return (
    <div className="w-full  px-3 py-2 gap-8 flex flex-col">
      <div className="w-full h-100 rounded-2xl overflow-hidden relative ">
        <video
          src="https://ik.imagekit.io/6i2qiqf2n/hero-video.mp4?updatedAt=1755683242136"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        ></video>

        <div className="absolute inset-0 flex justify-end items-end flex-col text-black p-20 gap-6">
          <p className="uppercase tracking-wider text-sm">
            the new remix collection
          </p>
          <h1 className="capitalize text-xl tracking-wider">
            Sustainably crafted with superior comfort and effortless style.
          </h1>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-black uppercase bg-white rounded-2xl hover:bg-black hover:text-white font-light tracking-wide cursor-pointer duration-200 transition-all">
              shop men
            </button>
            <button className="px-3 py-1 text-black uppercase bg-white rounded-2xl hover:bg-black hover:text-white font-light tracking-wide cursor-pointer duration-200 transition-all">
              shop women
            </button>
          </div>
        </div>
      </div>

      <section className="flex justify-between flex-wrap">
        {sec2.map((e, i) => (
          <div
            key={i}
            className="relative w-[23%] h-80 rounded-lg overflow-hidden cursor-pointer group flex items-center justify-center"
          >
            {/* Default background */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-100 group-hover:opacity-0 rounded-lg"
              style={{ backgroundImage: `url(${e.img1})` }}
            ></div>

            {/* Hover background */}
            <div
              className="absolute inset-0 bg-[url(e.img2)] bg-cover bg-center transition-opacity duration-700 opacity-0 group-hover:opacity-100 rounded-full"
              style={{ backgroundImage: `url(${e.img2})` }}
            ></div>

            {/* Button stays above */}
            <button className="relative z-10 text-white px-2 py-1 border duration-700 cursor-pointer rounded-2xl uppercase hover:bg-black">
              {e.text}
            </button>
          </div>
        ))}
      </section>

      <Carousel/>
    </div>
  );
};

export default Home;
