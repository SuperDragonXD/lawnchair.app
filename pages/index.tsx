// (c) 2021 Raphael Tang
// This code is licensed under MIT license (see LICENSE for details)

import Layout from "@components/Layout"
import DownloadButton from "@components/DownloadButton"
import clsx from "clsx"
import SocialLinkTile from "@components/SocialLinkTile"

export default function IndexPage() {
  return (
    <Layout title="Lawnchair App">
      {/* Hero section */}
      <div className={clsx("hero text-white pt-28 px-8", "md:pt-24 md:px-36")}>
        <img
          src={`${process.env.BACKEND_URL}/images/lawnchair-icon.webp`}
          alt="Lawnchair icon"
          className={clsx("rounded-full w-28", "md:w-32")}
        />
        <p className="text-4xl font-bold font-sans-alt mt-7">Lawnchair</p>
        <p className="text-2xl font-medium font-sans-alt mt-3">
          No clever tagline needed.
        </p>
        <div
          className={clsx(
            "mt-12 flex flex-wrap flex-row space-y-4",
            "md:space-x-6 md:space-y-0"
          )}
        >
          <DownloadButton link="https://play.google.com/store/apps/details?id=ch.deletescape.lawnchair.plah">
            <img
              src={`${process.env.BACKEND_URL}/images/google-play-icon-1.svg`}
              alt="Google Play icon"
              className="mr-2"
            />{" "}
            <span className="text-base font-medium">Google Play</span>
          </DownloadButton>
          <DownloadButton link="https://f-droid.org/packages/ch.deletescape.lawnchair.plah">
            <img
              src={`${process.env.BACKEND_URL}/images/f-droid-logo-1.svg`}
              alt="F-Droid logo"
              className="mr-2"
              style={{ filter: "grayscale(1)" }}
            />{" "}
            <span className="text-base font-medium mr-2">F-Droid</span>
          </DownloadButton>
          <DownloadButton link="https://www.apkmirror.com/apk/deletescape/lawnchair">
            <img
              src={`${process.env.BACKEND_URL}/images/apk-mirror-logo-1.png`}
              alt="APKMirror logo"
              className="mr-4 w-10 my-3 md:my-0"
              style={{ filter: "invert(0.8)" }}
            />{" "}
            <span className="text-base font-medium">APKMirror</span>
          </DownloadButton>
        </div>
      </div>

      {/* Features */}
      <FeatureSection
        imgSrc={`${process.env.BACKEND_URL}/images/preview-screenshot-1.png`}
        imgAlt="Preview screenshot 1"
        direction="ltr"
        headerText="No clever tagline needed"
        bodyText="Yup. Get it? Lawnchair. It's a bad pun, we know. Lawnchair is a
                  supercharged version of the AOSP Launcher you know and love. Being
                  an open-source project, you get all the latest Pixel Launcher
                  features shipped by Google in their latest Android release, plus
                  added customisablity. The best part? No root required. 🥳"
      />
      <FeatureSection
        imgSrc={`${process.env.BACKEND_URL}/images/preview-screenshot-2.png`}
        imgAlt="Preview screenshot 2"
        direction="rtl"
        headerText="Fully customizable"
        bodyText="Icon size, label, rows, and columns are all adjustable.
                  Lawnchair also supports icon packs, and the Pill is customizable
                  as well. These aren't the only features, and more are added
                  regularly."
      />
      <FeatureSection
        imgSrc={`${process.env.BACKEND_URL}/images/android-robot-logo.svg`}
        imgAlt="Android logo"
        direction="ltr"
        headerText="Latest Android features"
        bodyText="Icon size, label, rows, and columns are all adjustable.
                  Lawnchair also supports icon packs, and the Pill is customizable as well.
                  These aren't the only features, and more are added regularly."
      />

      {/* Socials section */}
      <div
        className={clsx(
          "contact-section flex flex-col mt-10",
          "py-8 pt-20",
          "md:px-36 md:pt-32"
        )}
      >
        <div className="px-8">
          <p className="text-6xl font-medium font-sans-alt">Find us</p>
          <p className="text-2xl font-sans-alt mt-10">
            If you have an issue with Lawnchair, we're more than happy to help.
            Ask around in our Telegram Group, or mention us on Twitter. Follow
            us on Twitter for announcements as well.
          </p>
          <p className="text-2xl font-sans-alt mt-4">
            Check out Lawnchair's GitHub. Help out by fixing bugs, flagging
            issues, or even by just downloading and testing!
          </p>
        </div>
        <div
          className={clsx(
            "flex flex-row overflow-y-auto gap-8 px-8 py-10 pb-24",
            "md:px-20 md:-mx-20 md:pt-20 md:pb-32",
            "md:scrollbar-hide"
          )}
        >
          <SocialLinkTile
            link="https://twitter.com/lawnchairapp/"
            imageSrc="/images/twitter-logo-blue.svg"
            label="Twitter"
          />
          <SocialLinkTile
            link="#telegram"
            imageSrc="/images/telegram-icon-without-bg.svg"
            label="Telegram"
          />
          <SocialLinkTile
            link="https://www.instagram.com/lawnchairapp/"
            imageSrc="/images/instagram-icon-1.svg"
            label="Instagram"
          />
          <SocialLinkTile
            link="https://lawnchair.freshdesk.com"
            imageSrc="/images/help-circle-outline.svg"
            label="Support"
          />
          <SocialLinkTile
            link="https://github.com/LawnchairLauncher/Lawnchair"
            imageSrc="/images/github-logo-1.svg"
            label="Github"
          />
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: no-repeat fixed
            url("${process.env.BACKEND_URL}/images/hero-bg.svg");
          background-size: cover;
          min-height: calc(100vh - 70px);
        }
        .contact-section {
          background: no-repeat local
            url("${process.env.BACKEND_URL}/images/contact-us-bg.png");
          background-size: contain;
        }
      `}</style>
    </Layout>
  )
}

type FeatureSectionProps = {
  imgSrc: string
  imgAlt?: string
  className?: string
  direction: "ltr" | "rtl"
  headerText?: string
  bodyText?: string
}

function FeatureSection({
  imgSrc,
  imgAlt,
  className,
  direction,
  headerText,
  bodyText,
}: FeatureSectionProps) {
  return (
    <div
      className={clsx(
        "md:px-56 md:py-28 px-8 py-16 flex flex-col",
        direction === "ltr" ? "md:flex-row" : "md:flex-row-reverse",
        className
      )}
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        className={clsx(
          "w-96 place-self-center md:place-self-start",
          direction === "ltr" ? "md:mr-20" : "md:ml-20"
        )}
      />
      <div className="flex flex-col">
        <p className="text-2xl font-medium md:mt-32 mt-16">{headerText}</p>
        <p className="text-xl font-light mt-6 leading-8">{bodyText}</p>
      </div>

      <style jsx>{`
        img {
          filter: drop-shadow(0px 12px 20px rgba(0, 0, 0, 0.4));
        }
      `}</style>
    </div>
  )
}
