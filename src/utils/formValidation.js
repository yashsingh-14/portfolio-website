/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - Is valid email
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - Is valid phone number
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Sanitize input to prevent XSS attacks
 * @param {string} input - User input
 * @returns {string} - Sanitized input
 */
export const sanitizeInput = (input) => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

/**
 * Validate contact form
 * @param {object} formData - Form data object
 * @returns {object} - Validation result
 */
export const validateContactForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (formData.message.trim().length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Format form data for submission
 * @param {object} formData - Raw form data
 * @returns {object} - Formatted form data
 */
export const formatFormData = (formData) => {
  return {
    name: sanitizeInput(formData.name.trim()),
    email: formData.email.trim().toLowerCase(),
    subject: sanitizeInput(formData.subject?.trim() || ''),
    message: sanitizeInput(formData.message.trim()),
    timestamp: new Date().toISOString()
  };
};

/**
 * Handle form submission
 * @param {object} formData - Form data
 * @param {string} endpoint - API endpoint
 * @returns {Promise} - Submission result
 */
export const submitContactForm = async (formData, endpoint = '/api/contact') => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formatFormData(formData)),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return await response.json();
  } catch (error) {
    throw new Error('Network error: Please try again later');
  }
};