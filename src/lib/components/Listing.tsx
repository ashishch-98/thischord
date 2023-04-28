import Image from "next/image";
import Link from "next/link";
import { SlugPrefix } from "../types";

type ListingProps = {
  slugPrefix: SlugPrefix;
  slug: string;
  imageSource: string;
  imageAltText: string;
  title: string;
  subTitle?: string;
};

export default function Listing(props: ListingProps): JSX.Element {
  return (
    <Link
      href={`${props?.slugPrefix?.path}/${props?.slug}`}
      className="grid grid-cols-3"
    >
      <Image
        loader={() => props?.imageSource}
        src={props?.imageSource}
        alt={props?.imageAltText}
        width={100}
        height={100}
        className="col-span-1 mb-3"
      />
      <div className="flex-col col-span-2 ml-2">
        <p className="font-medium">{props?.title}</p>
        {props?.subTitle && <p>{props?.subTitle}</p>}
      </div>
    </Link>
  );
}
