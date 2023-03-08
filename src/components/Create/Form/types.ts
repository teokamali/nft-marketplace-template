export interface Properties {
    type: string;
    value: string;
}
export interface Levels {
    name: string;
    value: number;
    of: number;
}
export interface Stats {
    name: string;
    value: string;
    of: string;
}

export interface FormState {
    file: FileList | null;
    name: string;
    externalLink: string;
    description: string;
    collection: string;
    supply: string;
    blockChain: string;
    freezeMetaData: string;
    properties: Properties[];
    levels: Levels[];
    stats: Stats[];
    isUnlockableContent: boolean;
    unlockableContent?: string;
    isExplicit: boolean;
}
export interface CreateFileState {
    file?: File | null;
}
