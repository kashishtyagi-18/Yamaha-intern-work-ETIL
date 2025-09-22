import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { paperDetails } from "@/data/paperdetails";

const ResearchPaper = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:8000/predict/", {
        method: "POST",
        body: formData,
      });
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setResultImage(url);
    } catch (err) {
      console.error("Inference failed", err);
    }
  };

  const { id } = useParams<{ id: string }>();
  const paper = paperDetails.find((p) => p.id === id);

  if (!paper) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Paper Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Publications
        </Link>

        {/* Paper Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">{paper.title}</h1>
          <p className="text-lg text-gray-600 mb-2">{paper.authors}</p>
          <p className="text-blue-600 font-medium mb-6">
            {paper.venue} ({paper.year})
          </p>

          <Button asChild>
            <a
              href={paper.arxivLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View Publication <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Abstract */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Abstract</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{paper.abstract}</p>
          </CardContent>
        </Card>

        {/* Interactive Demo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Play className="h-5 w-5" />
              Interactive Demo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">{paper.demoDescription}</p>

            <div className="flex items-center gap-6">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                className="hidden"
              />
              <Button
                onClick={() => fileInputRef.current?.click()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Choose File
              </Button>

              {selectedFile && (
                <div className="flex flex-col items-center gap-2">
                  <p className="text-gray-600 text-sm">{selectedFile.name}</p>
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Preview"
                    className="max-w-[200px] rounded-lg shadow-md border"
                  />
                </div>
              )}
            </div>

            {resultImage && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Result:</h3>
                <img
                  src={resultImage}
                  alt="Result"
                  className="max-w-sm rounded-lg shadow-md border"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResearchPaper;
