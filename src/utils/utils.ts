export function epochToHumanReadable(epochTime:number) {
    const date = new Date(epochTime); // data coming in milliseconds
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  
  // Example usage
  const epochTime = 1625247600; // Example epoch time
  console.log(epochToHumanReadable(epochTime)); // Output: 2021-07-02 16:00:00
  