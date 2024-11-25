export const validateEmail = (message = "Invalid email address") => ({
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message,
    },
  });
  