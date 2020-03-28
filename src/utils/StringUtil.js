class StringUtil {
    toSnakeCase(value) {
        return value.toLowerCase().replace(' ', '_');
    }
}

export default new StringUtil();
