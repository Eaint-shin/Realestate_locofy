import Head from "next/head";
import HomeFinderContainer from "../components/home-finder-container";
import FilteredFormCard from "../components/filtered-form-card";
import PropertiesByAreaImagesSectionC from "../components/properties-by-area-images-section-c";
import AreaPropertiesContainer from "../components/area-properties-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import RentCardContainer from "../components/rent-card-container";
import FormContainer from "../components/form-container";


const LandingPage = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-center justify-start">
      <HomeFinderContainer />
      <FilteredFormCard />
      <PropertiesByAreaImagesSectionC />
      <AreaPropertiesContainer />
      <RentPropertiesContainer />
      <RentPropertiesForm />
      <RentCardContainer />
      <FormContainer />
    </div>
  );
};

export default LandingPage;
