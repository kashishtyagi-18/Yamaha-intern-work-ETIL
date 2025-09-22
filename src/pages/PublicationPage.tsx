import { useParams } from "react-router-dom";
import { PublicationsSection } from "../components/PublicationsSection";

const PublicationsPage = () => {
  const { topic } = useParams<{ topic: string }>();

  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold text-center mb-8">
        {topic ? `Publications in ${topic}` : "All Publications"}
      </h1>
      <PublicationsSection topic={topic} />
    </div>
  );
};

export default PublicationsPage;
