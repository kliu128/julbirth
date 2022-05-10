import { Handler } from "@netlify/functions";
import { Configuration, OpenAIApi } from "openai";

export const handler: Handler = async (event, context) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const prompt = `About Julian:

Hi, I'm Julian 👋
I'm a second-year undergrad at Stanford studying CS. I'm interested in geometric deep learning, RL, neuroscience, and all things AI.
Here are some AI class projects me and my friends @sidsquid and @pinocholsaipant worked on that I'm especially proud of. :)

A personal birthday message to Julian, a CS student at Stanford who likes hiking, cats, and machine learning, from a trustworthy and quirky friend: "julian you are almost as cool as your couch happy birthday"

And another: "happy birthday julian!! you are such an awesome guy - so glad to be your friend! cat cat cat cat cat cat cat"

And another: "have a great birthday julian i'm including the word perspicacious in my message so if perspicacious shows up in the output you'll know that perspicacious was my doing"

And another: "happy birthday julian!!! thank you for being a super cool and talented friend! congrats to another year and i love your hugging face sticker thing :D"

And another: "yayy happy birthday julian u are cool and great to be around and i hope u are doing very good"

And another: "Happy bday! Appreciate your presence – it's always a pleasure hanging out with you!

And another: "happy bday!!! thanks for being such a good friend. I truly cherish the time we've spent together, sober or drunk ;) you're going to do great things; also, don't forget that you're the co-founder of the brion fan club :)"

And another:"`;

  const prompt2 = "To Julian, a birthday message from a friend:";

  const completion = await openai.createCompletionFromModel({
    // model: "text-davinci-002",
    model: "davinci:ft-personal-2022-05-10-06-41-37",
    prompt: prompt2,
    temperature: 0.9,
    max_tokens: 150,
    frequency_penalty: 1,
    presence_penalty: 0.5,
  });

  //@ts-ignore
  console.log(completion.data.choices[0].text);

  return {
    statusCode: 200,
    //@ts-ignore
    body: completion.data.choices[0].text,
  };
};

//@ts-ignore
handler(undefined, undefined);
