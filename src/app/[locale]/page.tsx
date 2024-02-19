import PageComponent from "./PageComponent";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

export default async function IndexPage({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations('IndexPage');
  const currentLanguageText = {
    title: t('title'),
    description: t('description'),
    loadingText: t('loadingText'),
    buttonText: t('buttonText'),
    loginText: t('loginText'),
    h1Text: t('h1Text'),
    pDescription0: t('pDescription0'),
    pDescription1: t('pDescription1'),
    pDescription2: t('pDescription2'),
  };


  return (
    <PageComponent
      locale={locale}
      currentLanguageText={currentLanguageText}
    >

    </PageComponent>
  )
}
