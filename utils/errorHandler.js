export const handleGenericError = (e) => {
    // If response contains field-specific validation errors (Django DRF format)
    if (e?.response?.data && typeof e.response.data === "object") {
      const errorMessages = [];
  
      for (const key in e.response.data) {
        if (Array.isArray(e.response.data[key])) {
          // Convert field-specific errors into readable text
          errorMessages.push(`${key}: ${e.response.data[key].join(", ")}`);
        } else if (typeof e.response.data[key] === "string") {
          errorMessages.push(`${key}: ${e.response.data[key]}`);
        }
      }
  
      if (errorMessages.length > 0) {
        return errorMessages.join("\n"); // Combine multiple field errors into a single string
      }
    }
  
    // If response contains a general "detail" or "message" field
    if (e?.response?.data?.detail) {
      return e.response.data.detail;
    }
  
    if (e?.response?.data?.message) {
      return e.response.data.message;
    }
  
    // Handle network or unexpected errors
    if (e?.message) {
      return e.message;
    }
  
    return "An unexpected error occurred";
  };
  