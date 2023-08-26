import { countries } from "@/data/country";

export function getFullCountryName(countryCode: string) {
    const fullCountryName = countries[countryCode];
    return fullCountryName || "Unknown";
}
