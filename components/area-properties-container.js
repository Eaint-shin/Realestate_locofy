import SellYourHomeContainer from "./sell-your-home-container";

const AreaPropertiesContainer = () => {
  return (
    <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0 text-center text-21xl text-primary-800 font-body-large-400">
      <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%px]">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px] text-5xl text-gray-700">
          <SellYourHomeContainer
            listingImageId="/icon.svg"
            homeActionImageUrl="Sell your home"
          />
          <SellYourHomeContainer
            listingImageId="/icon1.svg"
            homeActionImageUrl="Rent your home"
            propWidth="312px"
          />
          <SellYourHomeContainer
            listingImageId="/icon2.svg"
            homeActionImageUrl="Buy a home"
            propWidth="unset"
          />
          <SellYourHomeContainer
            listingImageId="/icon3.svg"
            homeActionImageUrl="Free marketing"
            propWidth="312px"
          />
        </div>
      </div>
    </div>
  );
};

export default AreaPropertiesContainer;
