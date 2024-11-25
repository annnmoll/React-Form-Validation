'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const validateEmail = (message = "Invalid email address") => ({
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message,
    },
  });

const validateMinLength = (min, message = `Must be at least ${min} characters`) => ({
    minLength: {
      value: min,
      message,
    },
  });
  
  const validateMaxLength = (max, message = `Must not exceed ${max} characters`) => ({
    maxLength: {
      value: max,
      message,
    },
  });

const validateRequired = (message = "This field is required"  , defaultValue="") => ({
    defaultValue  , 
    required: {
      value: true,
      message,
    },
  });

const validateRegex = (regex, message = "Invalid format") => ({
    pattern: {
      value: regex,
      message,
    },
  });

// Re-export all validation rules for easy imports

// Utility to combine multiple validation rules
/**
 * Combine multiple validation rules into a single object.
 * Usage: combineRules(validateRequired(), validateEmail(), ...)
 */
const combineRules = (...rules) => {
  return Object.assign({}, ...rules);
};

// Example usage of `combineRules` for users (add in docs or comments)
const examples = {
  emailValidation: combineRules(
    validateRequired("Email is required"),
    validateEmail("Enter a valid email")
  ),
  passwordValidation: combineRules(
    validateRequired("Password is required"),
    validateMinLength(8, "Password must be at least 8 characters")
  ),
};


var index = {
    validateEmail,
    validateMinLength,
    validateMaxLength,
    validateRequired,
    validateRegex,
    combineRules,
  };

exports.combineRules = combineRules;
exports.default = index;
exports.examples = examples;
