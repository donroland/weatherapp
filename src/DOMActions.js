const _getDOMElements = id => {
    return document.getElementById(id);
}

export const mapListToDOMElements = listOfId => {
    const _viewElements = {};

    for (const id of listOfId) {
        _viewElements[id] = _getDOMElements(id);
    }

    return _viewElements;
};
