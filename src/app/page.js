import Appraisals from "@/components/Appraisal";
import Banner from "@/components/Banner";
import ExtraSection from "@/components/Extrasection";
import ServicesFeatures from "@/components/ServicesFeature";
import Link from "next/link";
import BrowselawyersPage from "./(mainLayout)/events/page";

export default function Home() {
  return (
   <div>
    <Banner/>
    <BrowselawyersPage/>
    <ExtraSection/>
    <ServicesFeatures/>
    <Appraisals/>
   </div>
  );
}