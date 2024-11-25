// Re-export all validation rules for easy imports
import { validateEmail } from "./rules/email";
import { validateMinLength, validateMaxLength } from "./rules/length";
import { validateRequired } from "./rules/required";
import { validateRegex } from "./rules/regex";

// Utility to combine multiple validation rules
/**
 * Combine multiple validation rules into a single object.
 * Usage: combineRules(validateRequired(), validateEmail(), ...)
 */
export const combineRules = (...rules) => {
  return Object.assign({}, ...rules);
};

// Example usage of `combineRules` for users (add in docs or comments)
export const examples = {
  emailValidation: combineRules(
    validateRequired("Email is required"),
    validateEmail("Enter a valid email")
  ),
  passwordValidation: combineRules(
    validateRequired("Password is required"),
    validateMinLength(8, "Password must be at least 8 characters")
  ),
};


export default {
    validateEmail,
    validateMinLength,
    validateMaxLength,
    validateRequired,
    validateRegex,
    combineRules,
  };

