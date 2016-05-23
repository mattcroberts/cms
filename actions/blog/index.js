export function create(text, date = new Date()) {
    return {
        type: "CREATE_BLOG",
        text,
        date
    };
}

export function publish(id) {
    return {
        type: "PUBLISH_BLOG",
        id
    };
}

export function deleteBlog(id) {
    return {
        type: "DELETE_BLOG",
        id
    };
}
