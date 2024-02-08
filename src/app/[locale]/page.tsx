/**
 * Learn more about the Relivator Next.js starter:
 * @see https://github.com/blefnk/relivator#readme
 */
import { ArrowRight, Download, ShoppingCart, Store } from "lucide-react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Balancer } from "react-wrap-balancer";

import { REPOSITORY_URL, siteConfig } from "~/app";
import { Link } from "~/core/link";
import { seo } from "~/data/meta";
import { env } from "~/env.mjs";
import { FeaturedStoreItems } from "~/islands/commerce/featured-store-items";
import { HeroSection } from "~/islands/marketing/hero-section";
import { SiteFooter } from "~/islands/navigation/site-footer";
import { SiteHeader } from "~/islands/navigation/site-header";
import { FrequentlyAskedQuestions } from "~/islands/sections/questions";
import { GeneralShell } from "~/islands/wrappers/general-shell";
import { Link as NavLink } from "~/navigation";
import { Features, GithubStarsPlugin } from "~/plugins/islands/github/stars";
import { productCategories } from "~/server/config/products";

import About from "../[locale]/About/index";
import Companies from "../[locale]/Companies/index";
import { Features_function } from "../[locale]/showoff_function_Features/Features_function";
import { HeroHome } from "../[locale]/showoff_video/video_showoff";
import FeaturesBlocks from "./FeaturesBlocks";

/*export async function generateMetadata({ params }) {
  const t = await getTranslations();
  const metadata = seo({
    title: `${t("metadata.title.home")} – ${siteConfig.name}`,
  });
  return metadata;
}*/

export default function HomePage() {
  // useTranslations works both on the server and client
  // we only need the getTranslations on async components
  //const t = useTranslations();

  return (
    <>
      <SiteHeader />
      <GeneralShell>
        <section
          aria-labelledby="hero-heading"
          className="mx-auto mb-2 mt-8 flex w-full flex-col items-center justify-center gap-4 pt-10 text-center"
          id="hero"
        >
          <HeroSection />
          <Balancer
            as="p"
            className="!max-w-5xl text-base leading-normal text-primary/90 sm:text-lg sm:leading-7"
          >
            {/*t("landing.about")*/}
            At H&T AI TECH, we leverage cutting-edge AI techniques like object detection, video content analysis, image recognition, and predictive maintenance to develop innovative solutions that extract insights from visual data and keep critical systems running smoothly.
          </Balancer>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-4">
            {env.DEV_DEMO_NOTES === "true" ? (
              <Link
                href={REPOSITORY_URL}
                size="lg"
                target="_blank"
                variant="secondary"
              >
                <Download className="mr-2 h-4 w-4" />
                {/*t("landing.main-cta")*/}
                Download Starter
              </Link>
            ) : (
              <Link href="/" size="lg" variant="secondary">
                <ShoppingCart className="mr-2 h-4 w-4" />
                {/*t("landing.buy-now")*/}
                Book a demo
              </Link>
            )}

            <Link
              className="border-2 border-zinc-900 dark:border-zinc-800"
              href="/"
              size="lg"
              variant="outline"
            >
              <Store className="mr-2 h-4 w-4" />
              {env.DEV_DEMO_NOTES === "true"
													? `${/*t("demo.launch")*/ "Book a demo"}`
													: `${/*t("landing.sell-now")*/ "Learn more"}`}
            </Link>
          </div>
        </section>

        <Features_function />
        <HeroHome />
        <About />
        <Companies />
        <FeaturesBlocks />
        {env.DEV_DEMO_NOTES === "true" && <Features />}

        <FrequentlyAskedQuestions />

        <section
          aria-labelledby="create-a-store-banner-heading"
          className="mb-14 mt-10 grid place-items-center gap-6 bg-card px-6 text-center text-card-foreground"
          id="create-a-store-banner"
        >
          <div className="text-xl font-medium sm:text-2xl">
            {/*t("landing.footer-cta")*/}
            Are you ready?
          </div>
          <Link href="" size="lg" variant="secondary">
            {/*t("landing.get-started-btn")*/}
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </section>
      </GeneralShell>
      <SiteFooter />
    </>
  );
}
