class PathToTreeUtil {
    get(paths, callback) {
        if (undefined === callback) {
            callback = (value) => value;
        }

        let tree = [];

        for (let i = 0; i < paths.length; i++) {
            let path = callback(paths[i]).split('/');
            let currentLevel = tree;
            for (let j = 0; j < path.length; j++) {
                let part = path[j];

                let existingPath = this.findWhere(currentLevel, 'name', part);

                if (existingPath) {
                    currentLevel = existingPath.children;
                } else {
                    let newPart = {
                        name: part,
                        children: [],
                    };

                    if (j === path.length - 1) {
                        newPart.value = paths[i];
                    }

                    currentLevel.push(newPart);
                    currentLevel = newPart.children;
                }
            }
        }

        return tree;
    }

    findWhere(array, key, value) {
        let t = 0;

        while (t < array.length && array[t][key] !== value) {
            t++;
        }

        if (t < array.length) {
            return array[t]
        } else {
            return false;
        }
    }
}

export default new PathToTreeUtil();
