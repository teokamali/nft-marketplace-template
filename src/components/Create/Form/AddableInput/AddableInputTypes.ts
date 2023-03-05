import { Properties } from "../types";

export interface IAddableInputProps {
    onSave: (properties: Properties[]) => void;
    values: Properties[];
}
