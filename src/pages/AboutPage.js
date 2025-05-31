import React from "react";
import photoAbout from "../assets/photoAbout.png";
import teamMember from "../assets/teamMember.png";
import can1 from "../assets/can1.png";
import can2 from "../assets/can2.png";
import can3 from "../assets/can3.png";
import can4 from "../assets/can4.png";
import can5 from "../assets/can5.png";

const AboutPage = () => {
  return (
    <div className="font-sans">
      {/* À propos de nous */}
      <section className="bg-[#FFF5E4] rounded-[20px] mt-[40px] mx-auto max-w-[950px] px-[30px] py-[20px] flex items-center justify-between">
        <div className="max-w-[500px]">
          <h2 className="text-[20px] font-bold mb-2">À propos de nous</h2>
          <p className="text-[14px] leading-[1.5]">
            CHILL'Z est née de l'envie de revaloriser ces boissons en les adaptant aux
            modes de consommation modernes. Pensée pour la jeunesse urbaine, la marque
            insuffle un pont entre héritage culturel et style de vie contemporain.
          </p>
        </div>
        <img src={photoAbout} alt="photo about" className="w-[200px] h-[130px] object-cover rounded-[10px]" />
      </section>

      {/* L'équipe */}
      <section className="bg-[#E72E5A] text-white rounded-[20px] mt-[40px] mx-auto max-w-[950px] px-[30px] py-[30px]">
        <h2 className="text-[20px] font-bold mb-[15px]">L'équipe</h2>
        <p className="text-[14px] leading-[1.5] mb-[30px] max-w-[600px]">
          Derrière CHILL'Z, y’a une équipe, des passionnés, des créatifs, et surtout des gens qui veulent que ça ait du goût.
        </p>
        <div className="flex gap-[25px]">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-white text-[#E72E5A] rounded-[8px] w-[120px]">
              <img
                src={teamMember}
                alt="team member"
                className="w-full h-[120px] object-cover rounded-t-[8px]"
              />
              <div className="px-[10px] py-[8px]">
                <div className="text-[13px] font-semibold leading-tight">Lorem</div>
                <div className="text-[11px]">Lorem Ipsum</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nos racines */}
      <section className="flex flex-col lg:flex-row gap-[30px] mt-[60px] mx-auto max-w-[950px]">
        <div className="bg-[#FFF5E4] p-[30px] rounded-[20px] flex-1">
          <h2 className="text-[20px] font-bold mb-[15px]">Nos racines ont du goût</h2>
          <p className="text-[14px] leading-[1.5]">
            Chez CHILL'Z, on est nés ici, mais on a grandi avec les goûts de là-bas. On a grandi avec le bissap dans les bouteilles de récép, le gingembre aux anniversaires, les recettes que les tantes connaissent par cœur. Et on s’est dit : pourquoi pas ici ? Pourquoi pas nous, ici ? Et c’est de là, dans les rayons communs de l’histoire, qu’est née cette idée : une marque qui parle pour nous, pas pour hier encore, pour notre génération.
          </p>
        </div>
        <div className="bg-gradient-to-b from-white to-[#E72E5A]/20 rounded-[20px] p-[30px] flex-1 grid grid-cols-3 gap-[15px] items-center justify-items-center">
          <img src={can1} alt="can" className="w-[70px] h-auto" />
          <img src={can2} alt="can" className="w-[70px] h-auto" />
          <img src={can3} alt="can" className="w-[70px] h-auto" />
          <img src={can4} alt="can" className="w-[70px] h-auto" />
          <img src={can5} alt="can" className="w-[70px] h-auto" />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
