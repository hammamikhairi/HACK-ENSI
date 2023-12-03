"use client"

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { Progress } from "@nextui-org/react";
import { Metadata } from "next";
import { useEffect, useState } from 'react';
export const metadata: Metadata = {
  title: "Profile",
  description: "User Profile",
};

import axios from "axios";
import './styles.modules.css';

const Profile = () => {
  const [users, setUsers] = useState<any>(null)

  const [currUser, setCurrUser] = useState(0);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setCurrUser((curr) => Math.max(0, curr - 1));
    } else if (e.key === "ArrowRight") {
      setCurrUser((curr) => Math.min(curr + 1, 5));
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the specified endpoint
        const response = await axios.get("http://20.224.163.78/api/users");

        // Update the state with the retrieved data
        setUsers(response.data);
      } catch (error: any) {
        // Handle errors
        console.error("Error fetching data:", error.message);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  console.log(users)
  if (!users) return <>loading ...</>



  return (
    <>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src={"/images/cover/cover-01.png"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width={970}
            height={260}
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <Image
                src={"/images/user/user-0"+ (currUser + 1)+".png"}
                width={160}
                height={160}
                alt="profile"
              />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
            {users && users[currUser].Name}
            </h3>
            <p className="font-medium">{users && users[currUser].Post}</p>
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  259
                </span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  129K
                </span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  2K
                </span>
                <span className="text-sm">Following</span>
              </div>
            </div>
            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  259
                </span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  129K
                </span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  2K
                </span>
                <span className="text-sm">Following</span>
              </div>
            </div>

            <div className="mx-auto max-w-180 pt-4 pb-4 habibi">
              <Progress aria-label="Loading..." color={"secondary"} value={(calculateXpSum(users[currUser].xps) % 100)} className="max-w-md hihihihihi hihihihihii"/>
              <Progress aria-label="Loading..." color={"primary"} style={{opacity: 0.1}} value={100} className="max-w-md hihihihihi"/>
              <strong  style={{zIndex : 3, fontSize : "1.2rem"}}>{calculateXpSum(users[currUser].xps)} XP - LEVEL {Math.round(calculateXpSum(users[currUser].xps) / 100)}</strong>
            </div>
          <div className="hamma">
            <h1>Achievements</h1>
            <div className="ach_container">

              {users && users[currUser].achievements.map((eee : any, key : any) => 
              {
                  console.log(eee)
                if (eee.type === "clock") {              
                  return(
                    <div className="ach" key={key}>
                      <div className="flex items-center gap-3  ossbb">
                      <Image src={"/images/brand/ClockWork.png"} alt="Brand" width={200} height={100}/>
                      </div>
                  </div>
                    )
                } 
                
                if (eee.type === "xp"){
                  console.log("here")
                  return (

                    <div className="ach" key={key}>
                    <div className="flex items-center gap-3  ossbb">
                      <Image src={"/images/brand/XP.png"} alt="Brand" width={200} height={100}/>
                    </div>
                  </div>
                    )
                }
              }
              )
            
            
          }

            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

const calculateXpSum = (xps: any) => {
  // Ensure that xps is an array
  if (!Array.isArray(xps)) {
    throw new Error("Invalid input. Expected an array of xps.");
  }

  // Use reduce to sum the Amount values
  const xpSum = xps.reduce((sum, xp) => {
    // Convert Amount to a number and add it to the sum
    const amount = parseFloat(xp.Amount);
    return isNaN(amount) ? sum : sum + amount;
  }, 0);

  return xpSum;
};
