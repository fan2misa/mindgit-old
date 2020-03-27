
export default {
    hash: {
        format: '%H',
        parser: value => value
    },
    abbr_hash: {
        format: '%h',
        parser: value => value
    },
    parent: {
        format: '%P',
        parser: value => value.split(' ').filter(parent => parent.length)
    },
    abbr_parent: {
        format: '%p',
        parser: value => value.split(' ').filter(parent => parent.length)
    },
    tree: {
        format: '%T',
        parser: value => value
    },
    abbr_tree: {
        format: '%t',
        parser: value => value
    },
    author_name: {
        format: '%aN',
        parser: value => value
    },
    author_email: {
        format: '%ae',
        parser: value => value
    },
    subject: {
        format: '%s',
        parser: value => value
    },
    body: {
        format: '%b',
        parser: value => value
    },
    date: {
        format: '%ai',
        parser: value => value
    },
    refs: {
        format: '%D',
        parser: value => value.split(', ')
    },
    message: {
        format: '%s',
        parser: value => value
    }
};