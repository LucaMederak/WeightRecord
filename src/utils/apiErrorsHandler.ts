import { isAxiosError } from "axios";

export const handleApiErrors = (error: unknown) => {
  console.log(error);

  if (isAxiosError(error)) {
    if (error.response) {
      const errorStatus = error.response.status;
      switch (errorStatus) {
        case 400:
          // Obsługa błędów o statusie 400
          console.log("Błąd 400:", error.response.data);
          return { alertMessage: "Nieprawidłowe żądanie" };
        case 401:
          // Obsługa błędów o statusie 401 (Unauthorized)
          console.log("Błąd 401:", error.response.data);
          return { alertMessage: "Brak autoryzacji" };
        case 403:
          // Obsługa błędów o statusie 403 (Forbidden)
          console.log("Błąd 403:", error.response.data);
          return { alertMessage: "Brak dostępu" };
        case 404:
          // Obsługa błędów o statusie 404 (Not Found)
          console.log("Błąd 404:", error.response.data);
          return { alertMessage: "Nie znaleziono zasobu" };
        case 409:
          console.log("Błąd 409:", error.response.data);
          return { alertMessage: "Konflikt - zasób już istnieje" };
        case 500:
          console.log("Błąd 500:", error.response.data);
          return {
            alertMessage:
              "Wewnętrzny błąd serwera. Zespół został powiadomiony o błędzie i pracuje nad rozwiązaniem problemu.",
          };

        default:
          // Inny status odpowiedzi - ogólna obsługa błędu
          console.log("Inny błąd:", error.response.data);
          return {
            alertMessage: "Wystąpił błąd podczas przetwarzania żądania",
          };
      }
    } else {
      // Błąd nie zawiera odpowiedzi - ogólna obsługa błędu
      console.log("Inny błąd:", error.message);
      return {
        alertMessage: "Wystąpił błąd podczas przetwarzania żądania",
      };
    }
  }

  if (error instanceof Error) {
    // Obsługa błędów typu Error
    console.log("Błąd typu Error:", error.message);
    return { alertMessage: error.message };
  }

  return {
    alertMessage: "Wystąpił błąd podczas przetwarzania żądania",
  };
};
