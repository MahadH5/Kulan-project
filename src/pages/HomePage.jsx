import Hero from "../components/Hero";
import NearbyEvents from "../components/NearbyEvents";
import OnlineEvents from "../components/OnlineEvents";
import MembershipCTA from "../components/MembershipCTA";
import EventCategories from "../components/EventCategories";
import PopularCities from "../components/PopularCities";
import HowKulanWorks from "../components/HowKulanWorks";
import CommunityStories from "../components/CommunityStories";

function HomePage() {
  return (
    <>
      <Hero />
      <NearbyEvents />
      <OnlineEvents />
      <MembershipCTA />
      <EventCategories />
      <PopularCities />
      <HowKulanWorks />
      <CommunityStories />
    </>
  );
}

export default HomePage;
