function recursiveLog(start, end) {
    function recurse(i) {
        console.log(i);
        if (i >= end) {
            return;
        }
        recurse(i + 1);
    }

    return recurse(start);
}

recursiveLog(2147483647);