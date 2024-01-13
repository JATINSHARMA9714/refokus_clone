import React from "react";

const Footer = () => {
  return (
    <div className="w-full pb-10">
      <div className="max-w-screen-xl mx-auto flex">
        <div>
          <h1 className="text-[10vw] font-bold tracking-wide">refokus.</h1>
          <div className="elems flex gap-6 ml-2 ">
            {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
              (item,i) => (
                <h4 key={i} className="text-xs text-zinc-500">{item}</h4>
              )
            )}
          </div>
        </div>
        <div className="w-full  pt-12  gap-10 flex pl-40 flex-row-reverse">
        <div className="w-1/4 pt-10">
                    <p className="text-xs font-semibold">Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                    <button className="bg-[#4353FF] text-xs mt-6 px-3 py-1">Enterprise Partner</button>
                </div>
                
                <div className="sitemap flex mx-10 flex-col">
                    <h3 className="mb-10 text-xs text-zinc-400">Sitemap</h3>
                    <a href="#" className="text-xs my-1 text-zinc-400">Home</a>
                    <a href="#" className="text-xs my-1 text-zinc-400">Work</a>
                    <a href="#" className="text-xs my-1 text-zinc-400">Careers</a>
                    <a href="#" className="text-xs my-1 text-zinc-400">Contact</a>
                </div>
                <div className="socials flex flex-col">
                    <h3 className="mb-10 text-xs text-zinc-400">Socials</h3>
                    <a href="#" className="text-xs my-1 text-zinc-400">Instagram</a>
                    <a href="#" className="text-xs my-1 text-zinc-400">Twitter</a>
                    <a href="#" className="text-xs my-1 text-zinc-400">LinkedIn</a>
                </div>
                
        </div>
      </div>
    </div>
  );
};

export default Footer;
