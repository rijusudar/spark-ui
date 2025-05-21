/**
 * Retrieves nested object by going through each keys in the received path.
 * @param {object} record object
 * @param {array || string} path Single key or full path in an array
 *
 * @example
 * getValueByPath(record, ['person', 'name'])
 * returns nested value: record.person.name
 *
 * getValueByPath(record, 'person')
 * returns nested value: record.person
 */
export const getValueByPath = (record: any, path: any) => {
    const fullPath = Array.isArray(path) ? path : [path];
    return fullPath.reduce((record, key) => record?.[key], record);
};
