import { Handler } from "@netlify/functions";
import { Configuration, OpenAIApi } from "openai";

export const handler: Handler = async (event, context) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletionFromModel({
    model: "curie:ft-personal-2022-05-10-05-46-23",
    prompt: "give julian a birthday message",
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
