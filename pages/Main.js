import styles from "../styles/Home.module.css";
import Image from "next/image";
import me from "./assets/me.png";
export default function Main() {
  return (
    <div className="p-12">
      <h1 className="text-heading text-5xl font-pacifico text-nela text-center">
        Student, Designer & Programmer
      </h1>
      <h2 className="text-center text-lg font-ubuntu p-10">
        I design and code beautifully simple things, and I love what I do.
      </h2>
      <div className="flex items-center justify-center">
        <div className="rounded-full shadow-2xl bg-lightBlue">
          <Image
            className="rounded-full"
            width={250}
            height={250}
            src={me}
            alt="my_pfp"
          />
        </div>
      </div>
    </div>
  );
}
