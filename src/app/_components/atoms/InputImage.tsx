import { type ChangeEvent } from "react";

interface InputImageProps {
  onSelect: (file: File | null) => void;
}

export function InputImage({ onSelect }: InputImageProps) {

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    onSelect(selectedFile);
  };

  return <input
    type="file"
    accept="image/*"
    onChange={handleFileChange}
    className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
  />
}                   