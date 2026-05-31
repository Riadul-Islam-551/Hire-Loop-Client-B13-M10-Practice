import { Magnifier, Briefcase, ChartColumn, Star } from "@gravity-ui/icons";
import { Button, Card, Input } from "@heroui/react";
import Image from "next/image";

const stats = [
  {
    icon: <Briefcase className="size-5" />,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: <ChartColumn className="size-5" />,
    value: "12K",
    label: "Companies",
  },
  {
    icon: <Magnifier className="size-5" />,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: <Star className="size-5" />,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

const HeroSection = () => {
  return (
    <section
      className="min-h-screen pt-20  bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/globe.png')`,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center pt-16 lg:pt-24">
          {/* Badge */}
          <div className="rounded-full border border-purple-400 dark:border-purple-600 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="text-xs md:text-sm font-medium flex items-center gap-1">
              <Briefcase></Briefcase> 50,000+ NEW JOBS THIS MONTH
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-4xl text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">
            Find Your Dream Job Today
          </h1>

          <p className="mt-5 max-w-2xl text-sm text-gray-600 dark:text-gray-400 md:text-lg">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role faster.
          </p>

          {/* Trending */}

          <div className="mt-5 border p-3 rounded-2xl bg-black/10 dark:bg-white/20  flex flex-col items-center justify-center gap-2">
            <span className="text-sm text-gray-700  dark:text-gray-300">
              Trending Position
            </span>

            <div>
              {["Product Designer", "AI Engineering", "DevOps Engineer"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black dark:border-white/10 bg-white/5 px-3 py-1 text-xs"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Globe Text */}
          <div className="mt-40 md:mt-64">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold ">
              Assisting over 15,000 job seekers
            </h2>

            <p className="mt-3 text-lg  text-gray-600 dark:text-gray-400 md:text-4xl">
              find their dream positions.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 md:mt-12 lg:mt-16 pb-12 lg:pb-20">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <Card
                key={item.label}
                className="border border-white/50 bg-black/20 dark:bg-white/5 backdrop-blur-xl"
              >
                <Card.Description className="p-6 text-gray-200 ">
                  <span >{item.icon}</span>

                  <span className="text-4xl font-bold lg:text-5xl mt-6 md:mt-8 lg:mt-10">
                    {item.value}
                  </span>

                  <span className="mt-3 text-sm ">{item.label}</span>
                </Card.Description>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
