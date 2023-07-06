import React from "react";

const User = () => {
  return (
    <section className="w-full max-w-7xl flex flex-col h-screen px-3 xl:px-0">
      <p className="w-full font-bold text-2xl relative">
        Reservation list<span className="flex absolute w-full "></span>
      </p>
      <div className="flex mt-5 w-full rounded-lg overflow-x-auto">
        <table className="w-full text-center capitalize rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="p-2">name</th>
              <th className="p-2">reserved time</th>
              <th className="p-2">id number</th>
              <th className="p-2">prosecute id</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-slate-300 hover:shadow-lg transition-all duration-150">
              <td className="p-2">hadi raziei</td>
              <td className="p-2">2022/04/06 - 16:20</td>
              <td className="p-2">0022559988</td>
              <td className="p-2">1548</td>
            </tr>
            <tr className="even:bg-slate-300 hover:shadow-lg transition-all duration-150">
              <td className="p-2">hadi raziei</td>
              <td className="p-2">2022/04/06 - 16:20</td>
              <td className="p-2">0022559988</td>
              <td className="p-2">1548</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default User;
