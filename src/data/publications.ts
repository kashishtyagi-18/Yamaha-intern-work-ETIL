// src/data/publications.ts

// yaha pe jo hum add krenge vo bs main page pe dikhega but jb hum dedicated page open krenge kisi research ppr ka toh ye vala asbtract nahi dikega 
export const publications = [
  {
    id: "neural-networks-segmentation",
    title:
      "Two-Stage, Global-Local Approach for Cell Nuclei Segmentation in Histopathology Images",
    authors:
      "Amit Shakya, Revat Saharan, Chetan Gupta, Rupesh Kumar, Lalit Sharma, Srivatsava Naidu, Subrahmanyam Murala, Chetan Arora",
    venue:
      "IEEE 8th International Conference on Information and Communication Technology (CICT)",
    year: "2024",
    abstract:
      "The proposed framework consists of first stage with Global and second stage with Local learning approach.",
    slug: "neural-networks-segmentation",
    topic: "Medical Imaging",
  },
  {
    id: "transformer-medical-imaging",
    title:
      "DiffMamba: Leveraging Mamba for Effective Fusion of Noise and Conditional Features in Diffusion Models for Skin Lesion Segmentation",
    authors:
      "Amit Shakya, Shruti S Phutke, Chetan Gupta, Rupesh Kumar, Lalit Sharma, Chetan Arora",
    venue:
      "9th International Conference on Computer Vision & Image Processing (CVIP)",
    year: "2024",
    abstract:
      "This work explores the application of transformer architectures to medical imaging tasks, demonstrating significant improvements in diagnostic accuracy.",
    slug: "transformer-medical-imaging", 
    topic: "Medical Imaging",
  },


  // --- New sample papers ---
  {
    id: "cassava-leaf-disease",
    title: "Automatic Early Classification of Cassava Leaf Disease with Ensemble of Lightweight Models",
    authors: "Kaushik Vishwakarma, Udaybhan Rathore, Rupesh Kumar, Amit Shakya, Shruti Phutekar, Chetan Gupta, Lalit Sharma",
    venue: "Indian Institute of Technology Mandi & Emerging Technology and Innovation Lab, Yamaha Motor Solutions India",
    year: "2024",
    abstract: "This research develops a lightweight ensemble of CNN and transformer models for cassava leaf disease detection, achieving 90.35% recall on unseen images with high accuracy, low computation, and mobile deployment suitability.",
    slug: "cassava-leaf-disease",
    topic: "Precision Agriculture"
  },

  {
    id: "fish-disease-yolov7-transformer",
    title: "Do not look so locally to fish skins: Improved YOLOv7 for fish disease detection with Transformers",
    authors: "Shruti Phutke, Amit Shakya, Chetan Gupta, Rupesh Kumar, Tsuyoshi Kuroda, Lalit Sharma",
    venue: "Emerging Technology and Innovation Lab, Yamaha Motor Solutions India; Technical Research and Development Center Yamaha Motor Co., Ltd.",
    year: "2024",
    abstract: "This study proposes a Transformer-enhanced YOLOv7 framework for detecting five fish diseases, achieving high accuracy in classification and supporting automated aquaculture health management.",
    slug: "fish-disease-yolov7-transformer",
    topic: ""
  },

  {
    id: "cell-nuclei-segmentation",
    title: "A Novel Two-Stage Deep Learning Method for Enhanced Cell Nuclei Segmentation",
    authors: "Chetan Gupta, Rupesh Kumar, Amit Shakya, Shruti Phutke, Lalit Sharma",
    venue: "Emerging Technology and Innovation Lab, Yamaha Motor Solutions India",
    year: "2024",
    abstract: "This paper proposes a two-stage deep learning method with an enhancement network and encoder-decoder architecture to improve accuracy in cell nuclei segmentation.",
    slug: "cell-nuclei-segmentation",
    topic: "Medical Imaging"
  },

  {
    id: "oscmamba-medical-image-classification",
    title: "OSCMamba: Omni-directional Selective Scan Convolution Mamba for Medical Image Classification",
    authors: "Shruti Phutke, Amit Shakya, Chetan Gupta, Rupesh Kumar, Lalit Sharma",
    venue: "Emerging Technology and Innovation Lab, Yamaha Motor Solutions India",
    year: "2024",
    abstract: "This work introduces OSCMamba, an omni-directional selective scan convolution approach that enhances accuracy and efficiency in medical image classification.",
    slug: "oscmamba-medical-image-classification",
    topic: "Medical Imaging"
  },


  {
    id: "eeg-1",
    title: "dummy",
    authors: "Shruti Phutke, Amit Shakya, Chetan Gupta, Rupesh Kumar, Lalit Sharma",
    venue: "Emerging Technology and Innovation Lab, Yamaha Motor Solutions India",
    year: "2024",
    abstract: "dummy",
    slug: "eeg-1",
    topic: "eeg"
  },


  {
    id: "point-cloud-augmentations",
    title: "Generating Point Cloud Augmentations via Class-Conditioned Diffusion Model",
    authors: "Shruti Phutke, Amit Shakya, Chetan Gupta, Rupesh Kumar, Lalit Sharma",
    venue: "Emerging Technology and Innovation Lab, Yamaha Motor Solutions India",
    year: "2024",
    abstract: "dummy",
    slug: "point-cloud-augmentations",
    topic: "3d point cloud"
  },

  

];
