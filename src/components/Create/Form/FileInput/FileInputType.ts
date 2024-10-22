import { InputHTMLAttributes, ReactNode } from "react";

export interface IFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    description?: string;
    file: File | null | undefined;
    onFileChange: (file: File) => void;
    onDeleteFileHandler: () => void;
    icon?: ReactNode;
}
export interface FileInputState {
    fileType: null | "audio" | "video" | "image";
    error: string | null;
    draggedInto: boolean;
}
