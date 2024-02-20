'use client'
import {useRouter} from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Link from "next/link";
import HeadInfo from "~/components/HeadInfo";
import Markdown from "react-markdown";
import Highlight from 'react-highlight'

const PageComponent = ({
                         locale = '',
                         currentLanguageText= {
                           title: '',
                           description: '',
                           loadingText: '',
                           buttonText: '',
                           loginText: '',
                           h1Text: '',
                           pDescription0: '',
                           pDescription1: '',
                           pDescription2: '',
                         }
                       }) => {
  const router = useRouter();

  const requestBody = [
    {
      paramName: "prompt",
      type: "string",
      require: "Required",
      description: "A text description of the desired video. The maximum length is 1000 characters."
    },
    {
      paramName: "model",
      type: "string",
      require: "Optional Defaults to sora-1.0-turbo",
      description: "The model to use for video generation."
    },
    // {
    //   paramName: "n",
    //   type: "integer",
    //   require: "Optional Defaults to 1",
    //   description: "The number of video to generate."
    // },
    {
      paramName: "size",
      type: "string",
      require: "Optional Defaults to 1920X1080",
      description: "The size of the generated video."
    }
  ]

  const responseBody = {
    "data":
      [
        {
          "revised_prompt": "",
          "url": "https://XXXXXX.mp4"
        }
      ]
  };

  return (
    <>
      <HeadInfo
        title={currentLanguageText.title}
        description={currentLanguageText.description}
        locale={locale}
        page={""}
      />
      <Header locale={locale}/>
      <div className={"my-auto"}>
        <div className="h-full my-auto block overflow-hidden bg-[#020d24] bg-cover bg-center text-white"
             style={{backgroundImage: 'https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg'}}>
          <div className="mx-auto w-full max-w-7xl px-5 mb-5">
            <div
              className="mx-auto flex max-w-4xl flex-col items-center text-center py-10">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">{currentLanguageText.h1Text}</h1>
              <div className="mb-5 max-w-[568px] lg:mb-8 mt-8">
                <p className="text-[#7c8aaa] text-2xl">
                  {currentLanguageText.pDescription0}
                  <Link
                    href={"https://sorawebui.com"}
                    className={"hover:text-blue-500"}
                    target={"_blank"}>SoraWebui</Link>
                  {currentLanguageText.pDescription1}
                </p>
                <p className="text-blue-600 text-2xl mt-4">
                  {currentLanguageText.pDescription2}
                </p>
              </div>
            </div>

            <div className={"border-[14px] border-[#ffffff1f] object-fill w-[90%] mx-auto mt-2"}>
              <div className={"mx-auto bg-white py-8"}>
                <div className={"pb-2 border-b-2"}>
                  <h2
                    className={"text-blue-500 pt-4 text-4xl flex justify-center items-center"}>API Reference</h2>
                </div>
                <div className={"w-[96%] text-gray-700 prose mx-auto mt-4"}>
                  <h3>Request url</h3>
                  <p className={"mt-1"}>
                    POST https://fake-sora-api.sorawebui.com/v1/video/generations
                  </p>
                  <h3>Request body</h3>
                  <hr className={"mt-0 mb-2"}/>
                  {
                    requestBody.map((item, index) => {
                      return (
                        <div key={item.description}>
                          <span>
                            <span className={"font-bold"}>{item.paramName}</span>&nbsp;&nbsp;
                            <span className={"text-gray-400"}>{item.type}</span>&nbsp;&nbsp;
                            <span
                              className={`${item.require == 'Required' ? 'text-red-400' : 'text-gray-400'}`}>{item.require}</span>
                          </span>
                          <p className={"mt-1"}>{item.description}</p>
                          {
                            index < 2 ? <hr className={"-mt-2 mb-2"}/> : null
                          }
                        </div>
                      );
                    })
                  }
                  <h3>Example request</h3>
                  <Highlight language="javascript">
                    {`
curl https://fake-sora-api.sorawebui.com/v1/video/generations \\
-H "Content-Type: application/json" \\
-H "Authorization: Bearer $OPENAI_API_KEY" \\
-d '{
  "model": "sora-1.0-turbo",
  "prompt": "A cute baby sea otter",
  "size": "1920x1080"
}'
                    `}
                  </Highlight>
                  <h3>Example response body</h3>
                  <Highlight language="javascript">
                    {JSON.stringify(responseBody, null, 2)}
                  </Highlight>
                </div>
                <div key={"more"} className={"px-6 py-4"}>
                  <Link href={`https://sorawebui.com`}
                        target={"_blank"}
                        className={"flex justify-center items-center text-xl text-gray-600 hover:text-blue-600"}>
                    Test API {'>>'}
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer
        locale={locale}
        description={currentLanguageText.description}
      />
    </>
  )


}
export default PageComponent
