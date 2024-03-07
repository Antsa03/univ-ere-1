import { useState } from "react";

export const useDelete = <T>(url: string, onSuccess?: () => void) => {
  // State variables for loading, error, and data
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  // Function for deleting data with robust error handling
  const handleDelete = async (id: string | number) => {
    setIsDeleting(true);

    try {
      // Send DELETE request with ID in the URL path
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Process successful response
        setData(null); // Optionally, set data to null or a specific value
        if (onSuccess) onSuccess(); // Call optional success callback
      } else {
        // Handle failed response with error message
        setError(new Error(`Error deleting data: ${response.statusText}`));
      }
    } catch (error) {
      // Handle general errors
      setError(error as Error);
    } finally {
      // Always reset loading state
      setIsDeleting(false);
    }
  };

  // Return the necessary data and functions
  return { isDeleting, error, data, handleDelete };
};
