
module.exports.findObjectLike = function(schema, haystack) {
  let result = {}; 
  let remainingKeys = { ...schema };

  for (let key in Object.keys(remainingKeys)) {
    if (remainingKeys[key] == Boolean && typeof haystack[key] == 'boolean') {
      result[key] = haystack[key];
      delete remainingKeys[key];
    }
  }

  if (result.length == schema.length) {
    return result;
  }

  return null;
}

