"use client"

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Sbb from "@/components/Tables/Sbb";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Leaderboard",
  description: "Leaderboard page",
  // other metadata
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Leaderboard" />

      <div className="flex flex-col gap-10">
        <TableTwo />
        <Sbb />
      </div>
    </>
  );
};

export default TablesPage;
