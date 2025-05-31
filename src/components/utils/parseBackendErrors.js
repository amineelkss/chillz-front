export const parseBackendErrors = (data) => {
    const errorMap = {};

    if (data.errors && Array.isArray(data.errors)) {
        data.errors.forEach((err) => {
            if (!errorMap[err.path]) {
                errorMap[err.path] = [];
            }
            errorMap[err.path].push(err.msg);
        });
    }

    if (!data.errors && data.message) {
        errorMap.general = data.message;
    }

    return errorMap;
};
