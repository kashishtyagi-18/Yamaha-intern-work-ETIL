import React from "react";
import { Link } from "react-router-dom";
import { Book, ExternalLink } from "lucide-react";
import { publications } from "@/data/publications";

type PublicationsSectionProps = {
  topic?: string;
  limit?: number;
};

export const PublicationsSection = ({
  topic,
  limit,
}: PublicationsSectionProps) => {
  // Normalizer to handle case & spaces
  const normalize = (str: string) => str.toLowerCase().trim();

  // Filter publications by normalized topic
  const filteredPublications = topic
    ? publications.filter(
        (paper) => normalize(paper.topic) === normalize(topic)
      )
    : publications;

  const displayedPublications = limit
    ? filteredPublications.slice(0, limit)
    : filteredPublications;

  // About text for each topic
  const aboutTexts: Record<string, string> = {
    "medical imaging":
      "Medical Imaging research focuses on using artificial intelligence and deep learning to interpret complex medical scans such as MRI, CT, and X-rays. These technologies help radiologists and doctors detect diseases earlier, improve accuracy, and reduce human error in diagnosis. AI-powered imaging models can analyze millions of pixels in seconds and highlight regions of interest that may otherwise go unnoticed, making healthcare faster and more reliable.\n\nBeyond diagnostics, medical imaging is also being used to personalize treatment plans. For example, AI can predict how a tumor may respond to a particular therapy or identify subtle changes in follow-up scans to track patient progress. This area of research combines computer vision, healthcare knowledge, and machine learning to revolutionize medical practice and save lives.",

    "precision agriculture":
      "Precision Agriculture integrates AI, IoT sensors, drones, and satellite data to improve farming practices and crop management. Instead of applying uniform resources like water, fertilizer, or pesticides across entire fields, smart systems analyze soil conditions, weather patterns, and crop health to deliver inputs exactly where they are needed. This leads to higher yields, lower costs, and more sustainable farming. AI models in agriculture can also predict pest outbreaks, detect nutrient deficiencies, and even classify crops through aerial imagery. By providing farmers with real-time insights and data-driven recommendations, precision agriculture enables more efficient use of resources while reducing environmental impact. This research area is vital for ensuring food security in a world with a rapidly growing population.",

    "autonomous driving":
      "Autonomous Driving research develops the technologies that allow vehicles to sense, interpret, and navigate the world without human intervention. This includes perception systems for detecting lanes, pedestrians, and obstacles, as well as decision-making algorithms for safe route planning. AI models combine camera vision, LiDAR data, and sensor fusion techniques to create a real-time understanding of the driving environment. The ultimate goal is to build cars that are not only self-driving but also safer than human drivers. Research in this area tackles challenges like handling unpredictable traffic, adverse weather, and ethical decision-making. Advances in autonomous driving have the potential to reduce road accidents, optimize traffic flow, and improve mobility for people who cannot drive themselves.",

    "3d point cloud":
      "3D Point Cloud research involves analyzing and processing data collected from LiDAR, depth sensors, or 3D cameras. A point cloud is essentially a set of data points in three-dimensional space, which collectively represent the shape and size of real-world objects or environments. This technology is widely used in mapping, robotics, and augmented/virtual reality (AR/VR). By applying machine learning, researchers can classify objects, reconstruct 3D environments, and even enable robots to interact intelligently with their surroundings. For example, self-driving cars use 3D point cloud analysis to detect road boundaries, vehicles, and pedestrians with high accuracy. The research continues to make 3D data processing faster and more precise, opening up new opportunities in navigation, urban planning, and immersive experiences.",

    "language model":
      "Language Models are AI systems designed to understand, process, and generate human language. They are trained on massive text datasets and can perform tasks like translation, summarization, question answering, and text generation. Modern language models use deep learning techniques such as transformers to capture the meaning and context of words in sentences. These models are the backbone of conversational AI, powering chatbots, voice assistants, and advanced search systems. In research, language models are being adapted for specialized domains like healthcare, law, and education, where they can assist professionals by providing instant insights and recommendations. This area of AI represents the bridge between human communication and machine intelligence.",

    eeg: "EEG research focuses on analyzing brainwave signals recorded from electrodes placed on the scalp. These signals reflect the brain’s electrical activity and provide insights into cognitive processes, sleep patterns, emotions, and neurological disorders. Machine learning is applied to EEG data to detect abnormalities, such as epileptic seizures, and to study brain-computer interfaces (BCI). BCI powered by EEG enables direct communication between the brain and external devices. This has applications in assistive technologies for people with disabilities, such as controlling prosthetic limbs or wheelchairs with thought. Beyond healthcare, EEG research is also being explored in gaming, mental health monitoring, and human-computer interaction, making it a powerful field that combines neuroscience with AI innovation.",
  };

  // Select about text using normalized topic
  const aboutText = topic && aboutTexts[normalize(topic)];

  // Debug logs
  console.log("Topic from URL:", normalize(topic || ""));
  console.log("All keys:", Object.keys(aboutTexts));

  return (
    <section className="py-20 bg-gray-50" data-section="publications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section (optional) */}
        {aboutText && (
          <div className="bg-white rounded-xl shadow-md p-12 mb-12 text-gray-700 text-lg leading-relaxed">
            {aboutText}
          </div>
        )}

        {/* Research Papers */}
        <div className="grid gap-8">
          {displayedPublications.map((paper, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-2xl 
                         hover:-translate-y-2 transform transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {paper.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{paper.authors}</p>
                  <p className="text-blue-600 font-medium mb-3">
                    {paper.venue} ({paper.year})
                  </p>
                  <p className="text-gray-700 mb-4">{paper.abstract}</p>
                  <Link
                    to={`/paper/${paper.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    Read Paper
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
