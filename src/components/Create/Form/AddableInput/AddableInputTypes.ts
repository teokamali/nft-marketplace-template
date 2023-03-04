export interface AddableInputValue {
    name: string;
    value: string;
}
export interface IAddableInputProps {
    onSave: (properties: AddableInputValue[]) => void;
}
