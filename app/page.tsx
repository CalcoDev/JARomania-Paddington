import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section
      className={`${className} mb-12 min-h-screen w-full scroll-smooth`}
      {...rest}
    >
      {children}
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Section
        className="flex h-[calc(100vh-4rem)] items-center justify-center"
        id="heading"
      >
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <Image
            className="flex-1 md:w-2/3 lg:w-[60vw]"
            alt="Illustratiotn"
            src="/homepage.png"
            width={528}
            height={528}
          />
          <div className="flex-2 flex flex-col items-center gap-6 md:items-start">
            <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl lg:text-6xl xl:text-8xl">
              <span className="inline bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent saturate-150">
                Paddington
              </span>{" "}
              <span className="inline text-background shadow-sm [text-shadow:_1px_0_#FCECDE,_-1px_0_#FCECDE,_0_1px_#FCECDE,_0_-1px_#FCECDE,_1px_1px_#FCECDE,_-1px_-1px_#FCECDE,_1px_-1px_#FCECDE,_-1px_1px_#FCECDE;]">
                CNMV
              </span>{" "}
            </h1>
            <p className="text-md text-center md:text-left lg:text-lg">
              A new, AI powered, take on High School community engagement,
              management and problem solving, <br /> utilizing the power of AI.
            </p>
            <div className="flex flex-row gap-4">
              <Link
                href="#about"
                className="rounded-lg bg-secondary bg-opacity-25 px-6 py-3 transition-all duration-150 ease-in-out hover:scale-105 hover:bg-opacity-50 active:scale-95"
              >
                Learn more
              </Link>
              <Link
                href="/chat"
                className="rounded-lg bg-primary px-6 py-3 transition-all duration-150 ease-in-out hover:scale-105 active:scale-95"
              >
                See the Demo
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section id="information">
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl lg:text-6xl xl:text-8xl">
            Information
          </h1>
          <p className="text-md text-center md:text-left lg:text-lg">
            Entering High School is a challenging task, with many problems faced
            along the way, but most of them stem from the same root cause: the
            lack of a place to gather concrete, accurate, information and
            discuss about it.
          </p>
          <p className="text-md text-center md:text-left lg:text-lg">
            Even in the few rare cases information is available, another area we
            found to be lackluster and a common place necessiting attention is
            engagement with the community, not only teachers and staff but
            fellow students and alumni as well.
          </p>
          <p className="text-md text-center md:text-left lg:text-lg">
            Be it through clubs, meet &apos;n greets or other form of events,
            such interactions are crucial to providing motivation and helping
            feed newer student&apos;s interests, especially in areas of rapid
            developnment and cases where teachers might not be able to provide
            the student adequate information.
          </p>
        </div>
      </Section>
      <Section className="h-fit pb-28" id="about">
        <div className="flex flex-col items-center gap-12">
          <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl lg:text-6xl xl:text-8xl">
            About us
          </h1>
          <p className="text-md text-center md:text-left lg:text-lg">
            We started as a team participating in the JARomania Skills for the
            Future project, where we were tasked to identify a pressing problem
            within our community and, to the best of our abilities, try to solve
            it utilising Agile principles.
          </p>
          <p className="text-md text-center md:text-left lg:text-lg">
            Seeing all of us had issues with community engagement and felt like
            our environment was rather lackluster and oftentimes outright boring
            inducing due to teacher&apos;s absences or the lack of fellow
            student engagement, we decided to take matters into our own hands
            and try to create a place where information is readily available and
            at your fingertips and more than that a place where a sense of
            community can really form and help everyone explore their passions,
            aiding them whenever necessary.
          </p>
          <p className="text-md text-center md:text-left lg:text-lg">
            Our collective journey sprouted from the seeds of disenchantment
            within our community. Beyond the surface of disengagement lay a
            deeper yearning for connection and purpose. We recognized the
            untapped potential within our peers, obscured by the mundane
            routines of academic life. Fuelled by this insight, we envisioned a
            dynamic space where curiosity thrives and passions intertwine. By
            fostering an ecosystem of collaboration and inclusivity, we aim to
            transcend the barriers of traditional education, creating a melting
            pot of diverse perspectives and talents. Our endeavor extends beyond
            mere information dissemination; it&apos;s a catalyst for
            transformation, igniting the spark of creativity and innovation
            within each member.
          </p>
        </div>
      </Section>
    </>
  );
}
