import {headers} from "next/headers";
import {getExampleVideo} from "~/server/exampleVideo";


export async function POST(req: Request, res: Response) {
  const headerAll = headers();
  const userIp = headerAll.get("x-forwarded-for");
  console.log('userIp-=-=-=->', userIp);
  const bearStr = headerAll.get("Authorization");
  console.log('bearStr-=-=-=->', bearStr);
  const json = await req.json();

  // model
  const model = json.model;
  // prompt
  const prompt = json.prompt;
  // resolution of video
  const size = json.size;

  if (!bearStr) {
    const errorResult = {
      "error": {
        "code": null,
        "message": "You didn't provide an API key. You need to provide your API key in an Authorization header using Bearer auth (i.e. Authorization: Bearer YOUR_KEY), or as the password field (with blank username) if you're accesing the API from your browser and are prompted for a username and password. You can obtain an API key from https://platform.openai.com/account/api-keys.",
        "param": null,
        "type": "invalid_request_error"
      }
    }
    return Response.json(errorResult);
  }

  const apiKey = bearStr.replace("Bearer ", "");

  if (!apiKey) {
    const errorResult = {
      "error": {
        "code": null,
        "message": "Invalid authorization header",
        "param": null,
        "type": "server_error"
      }
    }
    return Response.json(errorResult);
  }

  // 如果 key 未通过，也需返回错误


  if (!model) {
    const errorResult = {
      "error": {
        "code": null,
        "message": "Invalid model",
        "param": null,
        "type": "invalid_request_error"
      }
    }
    return Response.json(errorResult);
  }

  if (!prompt) {
    const errorResult = {
      "error": {
        "code": null,
        "message": "Invalid prompt",
        "param": null,
        "type": "invalid_request_error"
      }
    }
    return Response.json(errorResult);
  }

  if (!size) {
    const errorResult = {
      "error": {
        "code": null,
        "message": `${size} is not one of ['256x256', '512x512', '1024x1024', '1024x1792', '1792x1024'] - 'size'`,
        "param": null,
        "type": "invalid_request_error"
      }
    }
    return Response.json(errorResult);
  }

  //todo call openai api in the future


  // call local function now
  const resultVideo = await getExampleVideo(prompt);
  const successResult = {
    "data": [
      {
        "revised_prompt": resultVideo.revised_prompt,
        "url": resultVideo.video_url
      }
    ]
  }

  return Response.json(successResult);
}
