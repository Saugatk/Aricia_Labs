import { clsx, type ClassValue } from "clsx"
    import { twMerge } from "tailwind-merge"
    
    export function cn(...inputs: ClassValue[]) {
      return twMerge(clsx(inputs))
    }
    
    export const currencyRates = {
      USD: 0.012,
      GBP: 0.0095,
      EUR: 0.011,
      AUD: 0.018,
      INR: 0.83,
      SAR: 0.045,
      SGD: 0.016,
      MYR: 0.056,
    };
    
    export function formatCurrency(
      amount: number,
      currency: keyof typeof currencyRates | "NPR" = "NPR"
    ) {
      if (currency === "NPR") {
        return `रू${amount.toLocaleString()}`;
      }
    
      const rate = currencyRates[currency] || 1;
      const convertedAmount = currency === "INR" ? amount * rate : amount * rate * 2.5;
      const formattedAmount = convertedAmount.toLocaleString(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
      return `${currency}${formattedAmount}`;
    }
