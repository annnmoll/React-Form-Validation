export const validateMinLength = (min, message = `Must be at least ${min} characters`) => ({
    minLength: {
      value: min,
      message,
    },
  });
  
  export const validateMaxLength = (max, message = `Must not exceed ${max} characters`) => ({
    maxLength: {
      value: max,
      message,
    },
  });
  