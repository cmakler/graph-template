var scopeDefinition = scopeDefinition || { params: {}};
scopeDefinition.params = (scopeDefinition.params || {});
scopeDefinition.params['textbook'] = 'varian';
const urlParams = new URLSearchParams(window.location.search);
for (const [key, value] of Object.entries(scopeDefinition.params)) {
    const urlParamValue = urlParams.get(key);
    if (urlParamValue) {
        scopeDefinition.params[key] = urlParamValue
        console.log(key, 'updated to ', urlParamValue)
    }
}