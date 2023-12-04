import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import Heatmap from "../charts/Heatmap";
import BarChart from "../charts/Barplot";
import LineChart from "../charts/Linechart"

export function Home() {

  const data = [
    {"Race":"Asian","Measure Names":"Women","Measure Values":1310},
    {"Race":"Asian","Measure Names":"Men","Measure Values":1617},
    {"Race":"Black","Measure Names":"Women","Measure Values":877},
    {"Race":"Black","Measure Names":"Men","Measure Values":975},
    {"Race":"Hispanic/Latino","Measure Names":"Women","Measure Values":788},
    {"Race":"Hispanic/Latino","Measure Names":"Men","Measure Values":892},
    {"Race":"White","Measure Names":"Women","Measure Values":1016},
    {"Race":"White","Measure Names":"Men","Measure Values":1201},
    {"Race":"All","Measure Names":"Women","Measure Values":993},
    {"Race":"All","Measure Names":"Men","Measure Values":1181}
  ];
  

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                HCI Project 2
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Contents. Contents. Contents.
              </Typography>

              <Button className="mt-16" variant="filled">read more</Button>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Contents.
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Contents.
                <br />
                <br />
                Contents. Contents. Contents. Contents. Contents. Contents. Contents. Contents. Contents. Contents. Contents. Contents.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <Heatmap />
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Contents." heading="Contents.">
          Contents.
          </PageTitle>
          
          <BarChart data={data} />
        
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Contents." heading="Contents.">
          Contents.Contents.Contents.Contents.Contents.
          </PageTitle>
          <LineChart />
          
        </div>
      </section>
    </>
  );
}

export default Home;
