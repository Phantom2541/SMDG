const handleDuplicate = (error, customText) => {
  if (error.name === "MongoServerError" && error.code === 11000) {
    const item = error.keyValue[Object.keys(error.keyValue)[0]];
    const field = Object.keys(error.keyPattern)[0];

    if (customText) return customText;

    return `The ${field}: ${item} is already taken.`;
  }

  return error.message;
};

module.exports = handleDuplicate;
