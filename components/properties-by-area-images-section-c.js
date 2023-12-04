import Link from "next/link";

const PropertiesByAreaImagesSectionC = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Properties by Area
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%px] text-left text-5xl text-gray-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
              href="/properties-grid-view"
            >
              <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                <div className="relative leading-[32px] font-semibold">
                  Centerville
                </div>
                <div className="relative text-base leading-[24px] text-center">
                  25 listings
                </div>
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-2@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
              href="/properties-grid-view"
            >
              <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                <div className="relative leading-[32px] font-semibold">
                  Centerville
                </div>
                <div className="relative text-base leading-[24px] text-center">
                  25 listings
                </div>
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-3@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
              href="/properties-grid-view"
            >
              <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                <div className="relative leading-[32px] font-semibold">
                  Centerville
                </div>
                <div className="relative text-base leading-[24px] text-center">
                  25 listings
                </div>
              </div>
            </Link>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <Link
              className="cursor-pointer [text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
              href="/properties-grid-view"
            >
              <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                <div className="relative leading-[32px] font-semibold">
                  Arlington
                </div>
                <div className="relative text-base leading-[24px] text-center">
                  25 listings
                </div>
              </div>
            </Link>
            <a
              className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] text-[inherit] md:flex-[unset] md:self-stretch"
              target="_blank"
              href="/properties-grid-view"
            >
              <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                <div className="relative leading-[32px] font-semibold">
                  Centerville
                </div>
                <div className="relative text-base leading-[24px] text-center">
                  25 listings
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesByAreaImagesSectionC;
