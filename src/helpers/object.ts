export function flattenToArray(obj, prefix = "", result = []) {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) continue;

    const value = obj[key];
    const newKey = prefix ? `${prefix} / ${key}` : key;

    if (value && typeof value === "object" && !Array.isArray(value)) {
      flattenToArray(value, newKey, result);
    } else {
      result.push({
        key: newKey,
        value: value,
      });
    }
  }

  return result;
}
