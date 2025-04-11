import Link from "next/link";
import Image from "next/image";
import { Workshop } from "./workshopData";

const SingleWorkshop = ({ workshop }: { workshop: Workshop }) => {
  return (
    <div className="mb-10 rounded-2xl bg-white shadow-lg transition duration-300 hover:shadow-2xl dark:bg-dark">
      <div className="relative h-60 w-full overflow-hidden rounded-t-2xl">
        <Image
          src={workshop.image}
          alt={workshop.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
          {workshop.title}
        </h3>
        <p className="mb-4 text-sm text-body-color">{workshop.description}</p>

        <Link
          href={workshop.link}
          className="inline-block rounded-md bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-opacity-90"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default SingleWorkshop;
