import * as React from "react";
    import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
    import { currencyRates } from "@/lib/utils";
    
    type CurrencySelectProps = {
      onCurrencyChange: (currency: keyof typeof currencyRates | "NPR") => void;
      defaultCurrency?: keyof typeof currencyRates | "NPR";
    };
    
    const CurrencySelect = ({ onCurrencyChange, defaultCurrency = "NPR" }: CurrencySelectProps) => {
      const [currency, setCurrency] = React.useState<keyof typeof currencyRates | "NPR">(defaultCurrency);
    
      const handleCurrencyChange = (value: keyof typeof currencyRates | "NPR") => {
        setCurrency(value);
        onCurrencyChange(value);
      };
    
      return (
        <Select onValueChange={handleCurrencyChange} defaultValue={defaultCurrency}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NPR">NPR (Nepal)</SelectItem>
            {Object.keys(currencyRates).map((currency) => (
              <SelectItem key={currency} value={currency as keyof typeof currencyRates}>
                {currency} ({currency === "USD" ? "USA, Canada" : currency === "GBP" ? "UK" : currency === "EUR" ? "Europe" : currency === "AUD" ? "Australia" : currency === "INR" ? "India" : currency === "SAR" ? "Saudi Arabia" : currency === "SGD" ? "Singapore" : currency === "MYR" ? "Malaysia" : ""})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    };
    
    export default CurrencySelect;
