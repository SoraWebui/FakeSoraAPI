'use client'
import {useRouter} from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Link from "next/link";

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

  return (
    <>
      <title>{currentLanguageText.title}</title>
      <meta name="description" content={currentLanguageText.description}/>
      <Header locale={locale}/>
      <div className={"my-auto"}>
        <div className="h-full my-auto block overflow-hidden bg-[#020d24] bg-cover bg-center text-white"
             style={{backgroundImage: 'https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg'}}>
          <div className="mx-auto w-full max-w-7xl px-5 mb-5">
            <div
              className="mx-auto flex max-w-4xl flex-col items-center text-center py-10">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">{currentLanguageText.h1Text}</h1>
              <div className="mb-5 max-w-[568px] lg:mb-8 mt-16">
                <p className="text-[#7c8aaa] text-2xl">
                  {currentLanguageText.pDescription0}
                  <Link
                    href={"https://sorawebui.com"}
                    className={"hover:text-blue-500"}
                    target={"_blank"}>SoraWebui</Link>
                  {currentLanguageText.pDescription1}
                </p>
                <p className="text-[#7c8aaa] text-2xl mt-4">
                  {currentLanguageText.pDescription2}
                </p>
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
