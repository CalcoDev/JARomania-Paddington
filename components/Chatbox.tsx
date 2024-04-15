"use client";

import Image from "next/image";
import { useState } from "react";

const BotMessage = ({ text }: { text: string }) => {
  return (
    <div className="w-[80%] self-start rounded-lg bg-[#BD9E82] p-3">{text}</div>
  );
};

const UserMessage = ({ text }: { text: string }) => {
  return (
    <div className="w-[80%] self-end rounded-lg bg-[#BB84BF] p-3">{text}</div>
  );
};

const Chatbox = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-1/2 md:right-20">
      <div className="relative">
        <div
          onClick={() => setOpen(true)}
          className={`absolute bottom-0 right-0 z-10 flex translate-x-1/2 sm:bottom-12 md:translate-x-0 ${"h-24 w-24"} items-center justify-center rounded-full bg-primary transition-all duration-150 ease-in-out ${!open && "hover:-rotate-90"} hover:scale-105 hover:cursor-pointer active:scale-95`}
        >
          <Image
            className="h-1/3 w-1/3"
            src="/JARomania-Paddington/chat_arrow.svg"
            alt="START CHAT"
            width={22}
            height={22}
          />
        </div>

        {/* {open && ( */}
        <div
          className={`${open ? "h-[min(40rem,_75vh)] pb-12" : "h-0 pb-0"} absolute bottom-12 right-1/2 z-0 flex w-[min(24rem,_90vw)] translate-x-1/2 flex-col justify-between gap-5 overflow-hidden rounded-lg bg-text transition-all duration-300 ease-in-out sm:bottom-24 md:bottom-12 md:right-12 md:translate-x-0 md:pb-0`}
        >
          <div className="relative h-[130px] w-full">
            <Image
              className="w-full select-none"
              src="/JARomania-Paddington/ai_helper.png"
              alt="background graident"
              width={235 * 4}
              height={98 * 4}
            />
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-between gap-2 bg-transparent p-6">
              <div className="flex items-center gap-2">
                <Image
                  className="scale"
                  src="/JARomania-Paddington/ai_icon.png"
                  alt="AI ICON"
                  width={37}
                  height={37}
                />
                <h1 className="text-lg font-medium">Arth. Int. Name.</h1>
              </div>
              <Image
                onClick={() => setOpen(false)}
                className="transition-all duration-150 ease-in-out hover:rotate-90 hover:scale-125 hover:cursor-pointer active:scale-95"
                src="close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 overflow-y-scroll px-4">
            <BotMessage text="Welcome to High School Helper! How can I assist you today?" />
            <UserMessage text="Hi! I'm considering enrolling in your high school. Can you provide me with some information?" />
            <BotMessage text="Of course! What would you like to know?" />
            <UserMessage text="What extracurricular activities does your school offer?" />
            <BotMessage text="We offer a wide range of extracurricular activities, including sports such as basketball, soccer, and volleyball. We also have clubs for various interests, such as debate, drama, and chess. Is there a specific activity you're interested in?" />
            <UserMessage text="I'm interested in joining a robotics club. Do you have one?" />
            <BotMessage text="Absolutely! We have a vibrant robotics club where students can explore their passion for technology and engineering. Our club participates in competitions and hosts workshops to enhance skills. It's a fantastic opportunity to learn and collaborate with like-minded peers. Anything else you'd like to know?" />
            <UserMessage text="Yes, what advanced placement (AP) courses do you offer?" />
            <BotMessage text="We offer a comprehensive selection of AP courses, including AP Calculus, AP Biology, AP English Literature, and many more. These courses provide students with the opportunity to earn college credit and challenge themselves academically. Are you considering taking any AP courses?" />
            <UserMessage text="Yes, I'm interested in AP Biology. Can you tell me more about the curriculum?" />
            <BotMessage text="Certainly! Our AP Biology curriculum covers a wide range of topics, including cell biology, genetics, ecology, and evolution. Students engage in hands-on laboratory experiments and critical thinking exercises to deepen their understanding of biological concepts. It's a rigorous course that prepares students for college-level biology studies. Would you like more details?" />
            <UserMessage text="No, that's all the information I need for now. Thank you for your help!" />
            <BotMessage text="You're welcome! If you have any more questions or need assistance in the future, feel free to reach out. Best of luck with your decision!" />
          </div>

          <div className="w-full px-4 py-4">
            <textarea
              placeholder="Enter a message ..."
              className="flex w-full resize-none items-center border-b-2 border-t-2 border-black border-opacity-25 bg-text px-4 pb-0 pt-6 text-background focus:outline-none active:no-underline active:outline-none"
            />
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Chatbox;
