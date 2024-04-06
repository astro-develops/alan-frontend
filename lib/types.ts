interface FormData {
  image: string; // URL of the uploaded image
  selection: string; // Selected value from dropdown
  sliderValue: number; // Value from the slider
}

export interface UploadResponse {
  url: string;
}
