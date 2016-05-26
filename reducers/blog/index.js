import Immutable from "immutable";

const defaultState = new Immutable.List();

export default function(state = defaultState, action) {

    switch (action.type) {
    case "CREATE_BLOG":
        return state.concat(action);
    case "PUBLISH_BLOG":
        return state.update(action.id, {
            PUBLISHED: true
        });
    case "DELETE_BLOG":
        return state.delete(action.id);
    default:
        return state;
    }
}
