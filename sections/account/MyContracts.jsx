import RevenueStat from "@/components/RevenueStat";
import RevenueStatList from "@/components/RevenueStatList";
import { makeApiUrl } from "@/constants/beroute";
import useFetchRequest from "@/hooks/useFetch";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import MTHead from "@/components/MTHead";
import CircleSpinner from "@/components/CircleSpinner";
import { formatDate } from "@/constants/constants";

const MyContracts = () => {
  const [contracts, setContracts] = useState([]);
  const { mutate: getContracts, isLoading: isGettingContracts } =
    useFetchRequest(
      makeApiUrl("/api/v1/dashboard/my-contracts/"),
      (response) => {
        setContracts(response.data.results);
      },
      (error) => {}
    );

  useEffect(() => {
    getContracts();
  }, []);
  return (
    <section className="w-full">
      <RevenueStatList />

      <div className="flex flex-col w-full mt-4">
        <h2 className="text-darkmuted font-semibold text-[26px]">
          Your contracts
        </h2>

        {isGettingContracts ? (
          <div className="flex flex-col items-center justify-center w-full">
            <CircleSpinner />
          </div>
        ) : (
          <div>
            <Table className={"bg-[#fafafa] rounded-2xl p-[22px]"}>
              <TableHeader>
                <TableRow className={"p-[22px]"}>
                  <MTHead className={"p-[30px]"} label={"Id"}></MTHead>
                  <MTHead className={"p-[30px]"} label={"Name"}></MTHead>
                  <MTHead className={"p-[30px]"} label={"Purchase price"}></MTHead>
                  <MTHead className={"p-[22px]"} label={"Hashpower"}></MTHead>
                  <MTHead label={"Start date"}></MTHead>
                  <MTHead label={"Status"}></MTHead>
                </TableRow>
              </TableHeader>
              <TableBody className={"bg-[#fafafa] p-[22px]"}>
                {contracts.map((contract) => (
                  <TableRow
                    className={"cursor-pointer"}
                    // onClick={setDetailOpen}
                  >
                    <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                      #{contract.contract_id}
                    </TableCell>
                    <TableCell className="text-[#8e61bf] text-[20px] font-semibold">
                      {contract?.plan_name}
                    </TableCell>

                    <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                      {contract.purchase_price}TH/s
                    </TableCell>
                    <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                      {contract.hashpower}TH/s
                    </TableCell>
                    <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                      {formatDate(contract.created_at)}
                    </TableCell>
                    <TableCell className="p-[30px] text-darkmuted text-[20px] font-semibold">
                      {contract.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyContracts;
