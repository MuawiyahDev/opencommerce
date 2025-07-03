import React from "react";
import { useTranslations } from "next-intl";

const Description = () => {
  const t = useTranslations("productDetail.productTabs");

  return (
    <div className="bg-background rounded-md p-5">
      <h3 className="text-xl font-semibold mb-6">{t("description")}</h3>

      <div className="rich-text">
        <h2>AOC AGON PRO AG276FK 27 520Hz FHD Fast IPS Gaming Monitor</h2>
        <p>
          The AOC <strong>AGON PRO AG276FK</strong> is a cutting-edge 27-inch
          Full HD gaming monitor designed for eSports enthusiasts, featuring an
          astonishing 520Hz refresh rate for ultra-smooth visuals. Equipped with
          a Fast IPS panel, The AGON PRO AG276FK Gaming Monitor offers a 0.5ms
          GtG response time and VESA DisplayHDR 400 certification, ensuring
          vibrant colors and exceptional clarity. The monitor covers 99% of the
          sRGB color space, enhancing gameplay realism, and includes Adaptive
          Sync technology to eliminate screen tearing and stuttering. With
          ergonomic adjustments, customizable RGB lighting, and a suite of
          gaming features like pre-calibrated modes and a gamepad for easy OSD
          access, the AG276FK is built to provide a competitive edge
        </p>
        <h3>520 Hz Refresh Rate</h3>
        <p>
          The AOC AGON PRO AG276FK Gaming monitor features a 520Hz refresh rate
          on a display is a technological marvel that revolutionizes visual
          clarity and responsiveness. The 520Hz refresh rate of a gaming display
          is a technological wonder designed to meet the demands of elite
          competitive players. With this high refresh rate, each frame is
          produced with amazing speed, virtually eliminating motion blur and
          providing you an advantage in fast-paced games where every millisecond
          matters. Its intended for gamers who want the fastest, most fluid
          visual experience possible, with an unprecedented level of fluidity
          and precision that can mean the difference between triumph and failure
          in the gaming arena. In addition to raw speed, unrivaled smoothness
          and precision.
        </p>
        <h3>Fast Response and Low input Lag</h3>
        <p>
          GtG stands for Grey-To-Grey and describes the time it takes for one
          pixel to transition from one gray level to the next. In gaming, every
          millisecond counts and can mean the difference between making or
          missing a shot. Rapid response time also removes ghosting and motion
          blur.Switch to AOC Low Input Lag mode to unleash your reflexes. Forget
          graphical frills: this option rewires the monitor in favor of raw
          response time, providing the greatest advantage in hair trigger
          standoffs.
        </p>
        <h3>RGB LIGHT FX</h3>
        <p>
          AOC AGON PRO AG276FK monitor include special lighting on the back of
          the device that illuminates your gaming setup in a variety of hues.
          Choose your favorite color, sync it with your other AOC devices, and
          experiment with different glowing patterns.
        </p>
        <h2>
          Buy AOC AGON PRO AG276FK 27 520Hz FHD Fast IPS Gaming Monitor From
          Star Tech
        </h2>
        <p>
          In Bangladesh, you can get original{" "}
          <strong>
            AOC AGON PRO AG276FK 27 520Hz FHD Fast IPS Gaming Monitor
          </strong>{" "}
          From Star Tech. We have a large collection of latest{" "}
          <a href="https://www.startech.com.bd/aoc-monitor">AOC Monitor</a> to
          purchase. Order Online Or Visit your Nearest{" "}
          <a href="https://www.startech.com.bd/">Star Tech Shop </a>to get yours
          at lowest price. The AOC AGON PRO AG276FK 27 520Hz FHD Fast IPS Gaming
          Monitor comes with a 3-Years Warranty.
        </p>
      </div>
    </div>
  );
};

export default Description;
