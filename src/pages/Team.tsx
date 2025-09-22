import { Helmet } from "react-helmet-async";
import { TeamSection } from "../components/TeamSection";

const Team = () => (
  <>
    <Helmet>
      <title>Our Team – ETIL</title>
      <meta name="description" content="Meet the ETIL Research Team" />
    </Helmet>

    <div className="min-h-screen bg-white">
      <TeamSection />
    </div>
  </>
);

export default Team;
