import { toast } from "react-toastify";
import { footerData } from "../..";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Subscribe Sucessfully");
  };
  return (
    <footer className="bg-[#212121] text-white w-full  px-20 py-10 flex flex-col gap-5 justify-between">
      <div className="w-full flex justify-between">
        <div className="">
          <p className="capitalize">Subscribe to our emails</p>
          <form
            action=""
            method="post"
            onSubmit={submitHandler}
            className="flex flex-col w-70 gap-5"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black px-3 py-2 rounded-2xl outline-none"
            />
            <button
              type="submit"
              className="uppercase px-3 py-2 bg-[#ECE9E2] text-black font-bold rounded-2xl cursor-pointer w-30 hover:scale-104 active:scale-97"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <div className="flex gap-12">
            {footerData.map((e, i) => (
              <div className="help flex gap-6 flex-col" key={i}>
                <p className="uppercase">{e.h}</p>
                <div className="flex flex-col gap-3">
                  {e.a.map((a, j) => (
                    <a key={j} href="#" className="hover:underline">
                      {a}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl mb-4">Flow the flocks</h1>
        <div className="social-media flex gap-5">
            <a href=""><FaInstagram className="h-fit w-10 rounded-full border p-1"/></a>
            <a href=""><FaFacebook className="h-fit w-10 rounded-full border p-1"/></a>
            <a href=""><FaTwitter className="h-fit w-10 rounded-full border p-1"/></a>
            <a href=""><FaTiktok className="h-fit w-10 rounded-full border p-1"/></a>
            <a href=""><FaYoutube className="h-fit w-10 rounded-full border p-1"/></a>
        </div>
      </div>
      <hr />
      <div className="w-full flex justify-between">
        <p className="cursor-pointer hover:underline">© 2025 Allbirds, Inc. All Rights Reserved</p>
        <p className="cursor-pointer hover:underline">Refund policy</p>
        <p className="cursor-pointer hover:underline">Privacy policy</p>
        <p className="cursor-pointer hover:underline">Terms of service</p>
        <p className="cursor-pointer hover:underline">California Transparency Act</p>
      </div>
    </footer>
  );
};

export default Footer;
