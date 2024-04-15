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

export default function Chat() {
  return (
    <section className="mx-auto mt-32 min-h-[calc(100vh-4rem)] w-full scroll-smooth md:w-3/4 2xl:w-1/2">
      <h1 className="mb-12 w-full text-center text-3xl font-bold md:text-5xl lg:text-6xl xl:text-8xl">
        Chat
      </h1>

      <div className="flex flex-1 flex-col gap-4 px-4">
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
          className="flex w-full resize-none items-center rounded-lg border-b-2 border-t-2 border-black border-opacity-25 bg-text px-4 pb-0 pt-6 text-background focus:outline-none active:no-underline active:outline-none"
        />
      </div>
    </section>
  );
}
