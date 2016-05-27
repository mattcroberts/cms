import Immutable from "immutable";

const defaultState = new Immutable.Map();

export default function(state = defaultState, action) {

    switch (action.type) {
    case "CREATE_SCHEMA_RECEIVED":
        return state.set(action.id, {
            items: []
        });
    default:
        return state;
    }
}
