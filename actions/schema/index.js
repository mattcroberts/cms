export function create(name) {
    return {
        type: "CREATE_SCHEMA",
        name
    };
}

export function deleteSchema(id) {
    return {
        type: "DELETE_SCHEMA",
        id
    };
}
