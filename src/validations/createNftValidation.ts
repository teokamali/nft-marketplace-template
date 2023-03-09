import * as yup from "yup";

export const createNftValidation = yup.object().shape({
    file: yup.mixed().required("you must select your nft file"),
    name: yup.string().required("you must set a name for this nft"),
    externalLink: yup.string(),
    description: yup
        .string()
        .required("you must enter description for this nft"),
    collection: yup.string(),
    supply: yup.string(),
    blockChain: yup.string(),
    freezeMetaData: yup.string(),
    properties: yup
        .array(
            yup.object({
                type: yup.string().required(),
                value: yup.string().required(),
            })
        )
        .min(1, "enter at least one Property"),
    levels: yup
        .array(
            yup.object({
                name: yup.string().required(),
                value: yup.number().required(),
                of: yup.number().required(),
            })
        )
        .min(1, "enter at least one Level"),
    stats: yup
        .array(
            yup.object({
                name: yup.string().required(),
                value: yup.number().required(),
                of: yup.number().required(),
            })
        )
        .min(1, "enter at least one Stat"),
    isUnlockableContent: yup.boolean(),
    unlockableContent: yup.string(),
    isExplicit: yup.boolean(),
});
