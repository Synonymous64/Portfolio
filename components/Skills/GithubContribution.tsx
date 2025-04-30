'use client';
import { BsGithub } from 'react-icons/bs';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import OverviewItem from './OverviewGithub';
import Calendar from './GithubCalender';
import axios from 'axios';

function GithubContributions() {
  const [data, setData] = useState<any>(null);
  // console.log('🚀 ~ GithubContributions ~ data:', data);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/github`,
        );
        if (response.status >= 400) {
          throw new Error('Error fetching GitHub data');
        }
        setData(response.data.data);
      } catch (error: any) {
        console.error('Frontend Error:', error.message);
      }
    };
    fetchGithubData();
  }, []);
  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;
  const totalContributions = contributionCalendar?.totalContributions || 0;
  const weeks = contributionCalendar?.weeks || [];

  const totalThisWeekContribution =
    weeks[weeks.length - 1]?.contributionDays
      ?.map((item: any) => item.contributionCount)
      ?.reduce(
        (previousValue: any, currentValue: any) => previousValue + currentValue,
        0,
      ) || 0;
  const totalContributionList = weeks
    .map((week: any) =>
      week.contributionDays.map(
        (contributionDay: any) => contributionDay.contributionCount,
      ),
    )
    .flat();

  const bestContribution = Math.max(...totalContributionList) || 0;
  const averageContribution = totalContributions / totalContributionList.length;
  // if (!data) {
  //     return
  // }
  return (
    <section className="relative mr-0 px-4 py-7 sm:px-5 lg:mr-5 lg:px-10 xl:mr-0">
      <div className="mx-auto w-full">
        <div className="flex w-full flex-col justify-between border-b border-dashed border-neutral-500 pb-4 sm:flex-row sm:items-center">
          <div className="flex flex-col justify-start">
            <h2 className="font-manrope flex items-center text-3xl font-semibold leading-normal text-gray-100 sm:text-center lg:text-start">
              <BsGithub className="mr-1" /> Contributions
            </h2>
            <div className="ml-1 dark:text-neutral-400 md:flex-row md:items-center">
              <span>My </span>
              <Link
                target="_blank"
                href="https://github.com/Synonymous64"
                className="text-primaryColor px-1 hover:underline"
              >
                Github
              </Link>
              <span>contributions from last year on github.</span>
            </div>
          </div>
        </div>
        {data ? (
          <>
            <div className="mt-6 grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
              <OverviewItem label="Total" value={totalContributions} />
              <OverviewItem
                label="This Week"
                value={totalThisWeekContribution}
              />
              <OverviewItem label="Best Day" value={bestContribution} />
              <OverviewItem
                label="Average"
                value={averageContribution}
                unit="/ day"
              />
            </div>
            <div className="mx-auto mt-5 w-full">
              <Calendar data={contributionCalendar} />
            </div>
          </>
        ) : (
          <div className="container mx-auto mt-8 flex flex-col p-1 lg:flex-row">
            <div className="w-full">
              <div
                role="status"
                className="flex h-[300px] w-full animate-pulse items-center justify-center rounded-lg bg-gray-300 dark:bg-[#151515]"
              >
                <svg
                  className="h-10 w-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default GithubContributions;
