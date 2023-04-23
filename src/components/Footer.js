import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex item-center">
          Check Out My&nbsp;
          <Link
            href="https://github.com/elin03277"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Github
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/eric-lin-03277"
          className="underline underline-offset-2"
          target={"_blank"}
        >
          LinkedIn
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
