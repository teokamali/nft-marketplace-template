import { createSelector } from "reselect";
import { ApplicationRootState } from "../../types/types";
import { initialState } from "../../redux/slices/localization/localizationSlice";


/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state: ApplicationRootState) =>
    state.localization || initialState;

/**
 * Select the language locale
 */

const makeSelectLocale = () =>
    createSelector(selectLanguage, state => state.locale);

export { selectLanguage, makeSelectLocale };
