import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import homeReducer from "./homeContainer";
import navigation from "./navigation";
import metadata from "./metadata";
import mainForm from "./maquetteForm";
import init from "./init.js";

const rootReducer = combineReducers({
    form: formReducer,
    homeReducer,
    navigation,
    metadata,
    mainForm,
    init
});

export default rootReducer;
