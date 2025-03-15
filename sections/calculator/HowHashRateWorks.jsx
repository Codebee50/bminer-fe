"use client";

import LandingCtaButton from "@/components/LandingCtaButton";
import MiningResult from "@/components/MiningResult";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";
import { useState, useEffect } from "react";
import useFetchRequest from "@/hooks/useFetch";

const HowHashRateWorks = () => {
  const options = [
    { label: "25 TH/S", value: 25 },
    { label: "50 TH/S", value: 50 },
    { label: "100 TH/S", value: 100 },
    { label: "250 TH/S", value: 250 },
    { label: "500 TH/S", value: 500 },
  ];
  const [selected, setSelected] = useState("25 TH/S");

  const difficultyList = [
    { label: "-20%", factor: 0.8 },
    { label: "Current", factor: 1.0 },
    { label: "+20%", factor: 1.2 },
  ];

  const [selectedDifficulty, setSelectedDifficulty] = useState("Current");

  const [hashRate, setHashRate] = useState(25);
  const [hashRateInputValue, setHashRateInputValue] = useState(25);

  const [difficulty, setDifficulty] = useState(null);
  const [blockReward, setBlockReward] = useState(3.125);

  const [bitcoinInputValue, setBitcoinInputValue] = useState(0);
  const [bitcoinPrice, setBitcoinPrice] = useState(0);
  const [initialBitcoinPrice, setInitialBitcoinPrice] = useState(0);

  const [error, setError] = useState(null);
  const [rewards, setRewards] = useState({
    daily: { btc: 0, usd: 0 },
    monthly: { btc: 0, usd: 0 },
    yearly: { btc: 0, usd: 0 },
    twoYears: { btc: 0, usd: 0 },
  });

  const {
    mutate: getNetworkDifficulty,
    isLoading: isGettingNetworkDifficulty,
  } = useFetchRequest(
    "https://blockchain.info/q/getdifficulty",
    (response) => {
      setDifficulty(parseFloat(response.data));
    },
    (error) => {
      toast.error("Error getting network difficulty");
    }
  );

  const { mutate: fetchBitcoinPrice, isLoading: isFetchingBitcoinPrice } =
    useFetchRequest(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
      (response) => {
        const { data } = response;
        setBitcoinPrice(data.bitcoin.usd);
        setInitialBitcoinPrice(data.bitcoin.usd);
        setBitcoinInputValue(data.bitcoin.usd);
      },
      (error) => {
        toast.error("Error fetching crypto prices");
      }
    );

  const calculateRewards = () => {
    // Convert TH/s to H/s
    const hashRateInHs = hashRate * 1000000000000;

    // Calculate daily BTC reward
    // Formula: (Hash Rate × Block Reward × 86400) ÷ (Network Difficulty × 2^32)
    const dailyBtcReward =
      (hashRateInHs * blockReward * 86400) / (difficulty * Math.pow(2, 32));

    // Calculate USD value
    const dailyUsdReward = dailyBtcReward * bitcoinPrice;

    // Calculate other time periods
    const monthlyBtcReward = dailyBtcReward * 30;
    const monthlyUsdReward = monthlyBtcReward * bitcoinPrice;

    const yearlyBtcReward = dailyBtcReward * 365;
    const yearlyUsdReward = yearlyBtcReward * bitcoinPrice;

    const twoYearsBtcReward = yearlyBtcReward * 2;
    const twoYearsUsdReward = twoYearsBtcReward * bitcoinPrice;

    setRewards({
      daily: { btc: dailyBtcReward, usd: dailyUsdReward },
      monthly: { btc: monthlyBtcReward, usd: monthlyUsdReward },
      yearly: { btc: yearlyBtcReward, usd: yearlyUsdReward },
      twoYears: { btc: twoYearsBtcReward, usd: twoYearsUsdReward },
    });
  };

  useEffect(() => {
    if (difficulty && hashRate) {
      calculateRewards();
    }
  }, [difficulty, hashRate, blockReward, bitcoinPrice]);

  useEffect(() => {
    getNetworkDifficulty();
    fetchBitcoinPrice();
  }, []);

  const handleHashRateChange = (e) => {
    setHashRateInputValue(parseFloat(e.target.value));
  };

  const handleBitcoinPriceChange = (e) => {
    setBitcoinInputValue(parseFloat(e.target.value));
  };

  const formatBtc = (value) => {
    return value.toFixed(8);
  };

  const formatUsd = (value) => {
    return value.toFixed(2);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHashRate(hashRateInputValue);
    }, 600);

    return () => clearTimeout(timer);
  }, [hashRateInputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBitcoinPrice(bitcoinInputValue);
    }, 600);

    return () => clearTimeout(timer);
  }, [bitcoinInputValue]);

  const handleDifficultyPercentageDeduct = (difficulty) => {
    setDifficulty((prev) => prev * parseFloat(difficulty.factor));
    setSelectedDifficulty(difficulty.label);
  };

  return (
    <SectionWrapper pad={true}>
      <section className="w-full p-[60px] bg-[#f8f8f8] flex flex-col gap-[10px] rounded-[24px]">
        <p className="text-[26px] text-[#5b5b5b]">
          A{" "}
          <a href="/" className="underline text-primaryPurple">
            cloud mining platform
          </a>{" "}
          allows you to mine cryptocurrency, such as Bitcoin (BTC), without
          investing in expensive hardware or infrastructure.
        </p>
        <p className="text-[26px] text-[#5b5b5b]">
          Users can lease equipment or rent hash power from a third-party
          company. While a great system, it has some challenges.
        </p>
        <p className="text-[26px] text-[#5b5b5b]">
          Enter the cloud computing calculator- a tool that helps a miner
          estimate profits from renting hashing power and determine whether it’s
          worth the investment.
        </p>
      </section>
      <div className="w-full grid grid-cols-2 gap-[30px] justify-between mt-[100px]">
        <h1 className="text-darkmuted font-semibold text-[48px]">
          Here’s How A Bitcoin Hashrate Calculator Works
        </h1>

        <p className="text-[#5b5b5b] text-[18px]">
          Discover your potential earnings with our Bitcoin Cloud Mining
          Calculator. Use our cloud mining profit and ROI calculators to
          estimate and maximize your cryptocurrency investment returns
        </p>
      </div>

      <div className="mt-10 p-[10px] pl-[40px] rounded-[24px] border border-[#b5b5b5] grid grid-cols-1 xl:grid-cols-[minmax(0,507px)_minmax(0,558px)] justify-between gap-[30px] min-h-[580px]">
        <div className="py-[30px] gap-[35px] flex flex-col">
          <h2 className="text-darkmuted font-semibold text-[40px]">
            Profit calculator
          </h2>
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col">
              <label htmlFor="" className="text-[#b5b5b5] text-[16px]">
                Hash rate TH/s
              </label>
              <div className="relative w-full">
                <input
                  type="number"
                  value={hashRateInputValue}
                  className="pt-[18px] pr-[50px] pb-[20px] pl-[18px] border w-full border-[#848199] rounded-[12px] text-[24px] text-darkmuted text-center"
                  onChange={handleHashRateChange}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex space-x-3 overflow-x-scroll no-scrollbar">
              {options.map((option) => (
                <button
                  key={option.label}
                  onClick={() => {
                    setSelected(option.label);
                    setHashRate(option.value);
                  }}
                  className={`px-[12px] py-2 rounded-[12px] border text-[0.8rem] sm:text-[14px] font-medium transition-all cursor-pointer
            ${
              selected === option.label
                ? "border-darkmuted text-darkmuted"
                : "border-[#b5b5b5] text-[#b5b5b5]"
            }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* section */}
          <div className="flex flex-col">
            <p className="text-darkmuted text-[20px] font-semibold">
              Current Bitcoin price: ${bitcoinPrice}
            </p>
            <p className="text-[#9a9a9a] text-[16px] self-end">$395839</p>

            <input
              type="range"
              min={initialBitcoinPrice}
              max="329607.08"
              className="styles_input__5Stoe"
              onChange={handleBitcoinPriceChange}
              value={bitcoinInputValue}
            ></input>

            <p className="text-[#9a9a9a] text-[16px]">
              Scroll left and right to adjust reference currency price
            </p>
          </div>

          <div className="flex flex-col mt-[10px] gap-[5px]">
            <p className="text-[#b5b5b5]">Difficulty</p>
            <div className="grid grid-cols-3 justify-between gap-[20px]">
              {difficultyList.map((option) => (
                <button
                  key={option.label}
                  onClick={handleDifficultyPercentageDeduct.bind(null, option)}
                  className={`p-[20px] rounded-[12px] border text-[0.8rem] sm:text-[14px] font-medium transition-all cursor-pointer ${
                    selectedDifficulty == option.label
                      ? "border-black text-black"
                      : "border-[#b5b5b5] text-[#b5b5b5]"
                  } `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#6835a0] to-[#3f1d65] rounded-[24px] py-[50px] px-[30px] flex flex-col justify-between">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[25px]">
              <MiningResult
                time_period={"1-Day Result"}
                btc_mined={formatBtc(rewards.daily.btc)}
                usd_mined={formatUsd(rewards.daily.usd)}
              />
              <MiningResult
                time_period={"1-Month Result"}
                btc_mined={formatBtc(rewards.monthly.btc)}
                usd_mined={formatUsd(rewards.monthly.usd)}
              />
              <MiningResult
                time_period={"1-Year Result"}
                btc_mined={formatBtc(rewards.yearly.btc)}
                usd_mined={formatUsd(rewards.yearly.usd)}
              />
              <MiningResult
                time_period={"2-Years Result"}
                btc_mined={formatBtc(rewards.twoYears.btc)}
                usd_mined={formatUsd(rewards.twoYears.usd)}
              />

              {/* {miningResults.map((result) => {
                return <MiningResult {...result} key={result.time_period} />;
              })} */}

              <a
                className={`px-9 py-3.5 w-max rounded-lg bg-yellow100 text-white`}
                href="/cloud-mining#section-packages"
              >
                Order now
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowHashRateWorks;
