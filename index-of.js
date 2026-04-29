const indexOf = (arr, value, index = 0) => {
    index = normalizeIndex(arr, index);

    for (let i = index; i < arr.length; i++) {
        if (value === arr[i]) {
            return i;
        }
    }
    return -1;
};
const lastIndexOf = (arr, value, index = arr.length - 1) => {
    index = normalizeIndex(arr, index, true);

    for (let i = index; i >= 0; i--) {
        if (value === arr[i]) {
            return i;
        }
    }
    return -1;
};
const includes = (arr, value, index = 0) => {
    index = normalizeIndex(arr, index);

    for (let i = index; i < arr.length; i++) {
        if (value === arr[i]) {
            return true;
        }
    }
    return false;
};

const normalizeIndex = (len, index, fromEnd = false) => {
    if (index === undefined) {
        return fromEnd ? len - 1 : 0;
    }

    if (index < 0) {
        index = len + index;
    }


    if (fromEnd) {
        if (index >= len || index <0 ) return len - 1;
        return index;
    }

    if (index < 0) return 0;
    if (index > len) return len;

    return index;
};