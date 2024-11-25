export const validateRegex = (regex, message = "Invalid format") => ({
    pattern: {
      value: regex,
      message,
    },
  });
  