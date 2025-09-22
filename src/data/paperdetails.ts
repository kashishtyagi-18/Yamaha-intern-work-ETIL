// src/data/paperDetails.ts

// this is for dedicated pages 
export const paperDetails = [
  {
    id: "neural-networks-segmentation",
    title:
      "Two-Stage, Global-Local Approach for Cell Nuclei Segmentation in Histopathology Images",
    authors:
      "Amit Shakya, Revat Saharan, Chetan Gupta, Rupesh Kumar, Lalit Sharma, Srivatsava Naidu, Subrahmanyam Murala, Chetan Arora.",
    venue:
      "IEEE 8th International Conference on Information and Communication Technology (CICT)",
    year: "2024",
    abstract: `Effective management of high-resolution, and spatially wide contextual cues 
    is fundamental to accurate semantic segmentation. Traditional approaches like 
    multi-resolution feature maps and skip-connections are effective but require 
    architectural changes, restricting use of newer models. In this work we propose 
    an architecture-agnostic, two-stage global-local framework (GoLo) for semantic 
    segmentation, focused on cell nuclei boundary segmentation in histopathology images. 
    Stage 1 performs global coarse segmentation, and Stage 2 refines local patches 
    using the coarse map and input image. Experiments on four benchmark datasets 
    show significant performance improvement (average +4.82% mIoU and +4.52% mDSC).`,
    arxivLink: "https://ieeexplore.ieee.org/document/10899523",
    demoDescription:
      "Interactive demo showing real-time image segmentation on uploaded images.",
    demoFeatures: [
      "Real-time webcam segmentation",
      "Upload custom images",
      "Adjustable confidence thresholds",
      "Multiple segmentation models",
    ],
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
    abstract: `DiffMamba is a transformer-Mamba hybrid framework that fuses noise and 
    conditional features for skin lesion segmentation. It uses diffusion-based 
    generative priors and attention-driven fusion to improve lesion boundary 
    delineation. The model outperforms baselines in segmentation accuracy and 
    generalization on multiple medical imaging datasets.`,
    arxivLink: "https://link.springer.com/chapter/10.1007/978-3-031-93703-3_5",
    demoDescription:
      "Medical image analysis demo with pre-trained models for various diagnostic tasks.",
    demoFeatures: [
      "Chest X-ray analysis",
      "MRI tumor detection",
      "CT scan classification",
      "DICOM file support",
    ],
  },

  {
    id: "cassava-leaf-disease",
    title:
      "Automatic Early Classification of Cassava Leaf Disease with Ensemble of Lightweight Models",
    authors:
      "Kaushik Vishwakarma, Udaybhan Rathore, Rupesh Kumar, Amit Shakya, Shruti Phutekar, Chetan Gupta, Lalit Sharma",
    venue:
      "Indian Institute of Technology Mandi & Emerging Technology and Innovation Lab, Yamaha Motor Solutions India",
    year: "2024",
    abstract: `This research focuses on evaluating lightweight deep learning models, specifically CNN and transformer networks, for cassava leaf disease detection using raw images. Based on experiments, an ensemble model consisting of lightweight models (CNN and transformer) was developed for automated early disease detection. ResNeXt, EfficientNet-B5, and TinyViT lightweight models were utilized, optimized using brute force approaches. Experiments with center-crop and multi-crop image transformations were conducted to enhance performance and classify images based on global information. The combined approach achieved state-of-the-art results with an overall recall of 90.35% on the unseen test cassava leaf disease dataset. With high accuracy, fewer parameters, and low computation time, the model is well-suited for deployment on mobile devices.`,
    arxivLink: "https://arxiv.org/abs/2024.00003",
    demoDescription:
      "Upload a cassava leaf image to detect early-stage disease symptoms.",
    demoFeatures: [
      "Upload leaf photo",
      "Real-time disease classification",
      "Confidence score display",
      "Mobile-friendly inference",
    ],
  },

  {
    id: "fish-disease-yolov7-transformer",
    title:
      "Do not look so locally to fish skins: Improved YOLOv7 for fish disease detection with Transformers",
    authors:
      "Shruti Phutke, Amit Shakya, Chetan Gupta, Rupesh Kumar, Tsuyoshi Kuroda, Lalit Sharma",
    venue:
      "Emerging Technology and Innovation Lab, Yamaha Motor Solutions India; Technical Research and Development Center Yamaha Motor Co., Ltd.",
    year: "2024",
    abstract: `This study presents a Transformer-based modified YOLOv7 framework for detecting five types of fish diseases. Automated detection is essential for improving aquaculture production and fish health management. The proposed Transformer feature extraction module (tFEM) captures long-range dependencies from input images and is integrated into the YOLOv7 backbone for improved feature learning. Both qualitative and quantitative evaluations show that the method achieves high accuracy in classifying multiple fish diseases. The source code is available at: https://github.com/shrutiphutke/Fish_disease_detection_YOLO_transformer.`,
    arxivLink: "https://arxiv.org/abs/2024.00004",
    demoDescription:
      "Upload a fish image to identify visible disease symptoms automatically.",
    demoFeatures: [
      "Supports 5 fish diseases",
      "Bounding-box detection",
      "Confidence threshold adjustment",
      "Result visualization",
    ],
  },

  {
    id: "cell-nuclei-segmentation",
    title:
      "A Novel Two-Stage Deep Learning Method for Enhanced Cell Nuclei Segmentation",
    authors:
      "Chetan Gupta, Rupesh Kumar, Amit Shakya, Shruti Phutke, Lalit Sharma",
    venue:
      "Emerging Technology and Innovation Lab, Yamaha Motor Solutions India",
    year: "2024",
    abstract: `We propose a two-stage deep learning approach where the first network 
    enhances image contrast and texture while the second encoder-decoder network 
    produces fine-grained nuclei masks. The modular design improves boundary precision 
    and interpretability over standard U-Net approaches.`,
    arxivLink: "https://arxiv.org/abs/2024.00005",
    demoDescription:
      "Upload a cell microscopy image to get refined nuclei segmentation results.",
    demoFeatures: [
      "Upload histopathology slides",
      "High-precision masks",
      "Boundary refinement visualization",
      "Dice/IoU metrics shown",
    ],
  },

  {
    id: "oscmamba-medical-image-classification",
    title:
      "OSCMamba: Omni-directional Selective Scan Convolution Mamba for Medical Image Classification",
    authors:
      "Shruti Phutke, Amit Shakya, Chetan Gupta, Rupesh Kumar, Lalit Sharma",
    venue:
      "Emerging Technology and Innovation Lab, Yamaha Motor Solutions India",
    year: "2024",
    abstract: `OSCMamba integrates omni-directional selective scan convolutions with 
    Mamba blocks to improve feature context capture while reducing redundancy. 
    It achieves superior classification accuracy on several medical imaging datasets.`,
    arxivLink: "https://arxiv.org/abs/2024.00006",
    demoDescription:
      "Upload a sample medical image to classify using the OSCMamba model.",
    demoFeatures: [
      "Upload X-ray or MRI image",
      "Top-5 predictions with confidence",
      "Fast inference",
      "Model comparison view",
    ],
  },

  {
    id: "eeg-1",
    title: "dummy",
    authors:
      "Shruti Phutke, Amit Shakya, Chetan Gupta, Rupesh Kumar, Lalit Sharma",
    venue:
      "Emerging Technology and Innovation Lab, Yamaha Motor Solutions India",
    year: "2024",
    abstract: `This is a placeholder EEG project entry. Future versions will analyze EEG 
    signals for abnormal pattern detection using transformer-based temporal encoders.`,
    arxivLink: "https://arxiv.org/abs/2024.00007",
    demoDescription:
      "Upload EEG signal data (CSV) to run anomaly prediction (demo placeholder).",
    demoFeatures: [
      "Upload CSV EEG signals",
      "Frequency band visualization",
      "Seizure anomaly demo",
      "Cognitive load estimate",
    ],
  },

  {
    id: "3d-1",
    title: "dummy",
    authors:
      "Shruti Phutke, Amit Shakya, Chetan Gupta, Rupesh Kumar, Lalit Sharma",
    venue:
      "Emerging Technology and Innovation Lab, Yamaha Motor Solutions India",
    year: "2024",
    abstract: `This is a placeholder EEG project entry. Future versions will analyze EEG 
    signals for abnormal pattern detection using transformer-based temporal encoders.`,
    arxivLink: "https://arxiv.org/abs/2024.00007",
    demoDescription:
      "dummy",
    demoFeatures: [
      "Upload CSV EEG signals",
      "Frequency band visualization",
      "Seizure anomaly demo",
      "Cognitive load estimate",
    ],
  },


  {
    id: "point-cloud-augmentations",
    title:
      "Generating Point Cloud Augmentations via Class-Conditioned Diffusion Model",
    authors:
      "Gulshan Sharma, Chetan Gupta, Aastha Agarwal, Lalit Sharma, Abhinav Dhall",
    venue:
      "Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) Workshops",
    year: "2024",
    abstract: `In this paper, we present a class-conditioned Denoising Diffusion Probabilistic Model (DDPM) based approach to augment point cloud data within the latent feature space. Our method focuses on generating synthetic point cloud latent embeddings, which encode both spatial and semantic information of the point cloud. By harnessing the capabilities of DDPM within a class-conditioned framework, our goal is to provide a cost-effective and practical solution for the augmentation of point cloud samples. We conduct experiments on the publicly available point cloud dataset, and our findings suggest that the proposed approach (a) effectively generates high-quality synthetic embeddings directly from the Gaussian noise and (b) improves the classification performance of the point cloud classes within limited data settings.`,
    arxivLink: "https://openaccess.thecvf.com/content/WACV2024W/VAQ/html/Sharma_Generating_Point_Cloud_Augmentations_via_Class-Conditioned_Diffusion_Model_WACVW_2024_paper.html",
    demoDescription:
      "Tool for generating synthetic point cloud embeddings using a class-conditioned diffusion model.",
    demoFeatures: [
      "Generates high-quality point cloud embeddings from noise",
      "Improves classification under limited data settings",
      "Class-conditioned generation control",
      "Operates directly in latent feature space",
    ],
  },



  

];
