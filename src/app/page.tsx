"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [listItem, setListItem] = useState("");
  const [listItems, setListItems] = useState([
    "Type and add text to make your todo list",
  ]);

  const handleAdd = () => {
    setListItems([...listItems, listItem]);
    setListItem("");
  };

  const handleDeleteListItem = (index: number) => {
    setListItems(listItems.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col place-content-center place-items-center max-h-max min-h-screen ">
      <div className="flex flex-col place-content-center place-items-center bg-gray-400 bg-opacity-5 rounded-2xl border-2 border-black my-2 max-h-max w-custom2 shadow-md shadow-blue-700">
        <input
          className="rounded-2xl border-2 border-black  px-4 py-5 mt-10 my-3 w-custom shadow-md shadow-blue-700"
          type="text"
          value={listItem}
          onChange={(e) => {
            setListItem(e.target.value);
          }}
          placeholder="Type text to add in todo list"
        />

        <button
          onClick={handleAdd}
          className="rounded-2xl border-2 border-black text-lg px-8 py-2 mb-3 bg-gray-400 bg-opacity-10 text-white hover:shadow-md hover:shadow-blue-700 hover:bg-blue-700"
        >
          <b>Add</b>
        </button>

        <div className=" bg-gray-400 bg-opacity-10    rounded-2xl w-custom  mb-10 min-h-72 shadow-md shadow-blue-700">
          <ul>
            {listItems.map((item, index) => {
              return (
                <div className="flex place-items-center">
                  <li
                    className="rounded-2xl border-2 border-black flex justify-between items-center my-2 p-2 m-auto text-xl w-cust bg-yellow-100 shadow-md shadow-blue-700"
                    key={index}
                  >
                    <div className="inline-block"> {item}</div>
                    <span>
                      <button
                        className="bg-white rounded-xl border-2 border-black text-xl w-10 h-10 m-aouto mx-2"
                        onClick={() => handleDeleteListItem(index)}
                      >
                        <Image 
                          src="/dustbin.png"
                          alt="png of dustbin" width={100} height={100}
                          className="p-0.5"
                        />
                      </button>
                    </span>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
