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
import { PageTitle } from "@/widgets/layout";
import LineChart from "../charts/Linechart"
import Map from "../charts/Map"
import Progress from "../charts/ProgressPlot"
import StackedBar from "../charts/StackedBar"

export function Home() {
  

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

      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Contents." heading="Contents.">
          Contents.
          </PageTitle>
          
          <LineChart />
        
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
      <div className="container mx-auto">
        <PageTitle section="Contents." heading="Contents.">
        Contents.
        </PageTitle>
        
        <Map />
      
      </div>
    </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Contents." heading="Contents.">
          Contents.Contents.Contents.Contents.Contents.
          </PageTitle>
          <Progress />
          
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Contents." heading="Contents.">
          Contents.Contents.Contents.Contents.Contents.
          </PageTitle>
          <StackedBar />
        
      </div>
    </section>
    </>
  );
}

export default Home;
