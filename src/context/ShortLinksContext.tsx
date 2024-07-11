import { createContext, useState, ReactNode } from 'react';

// Define the type for the array items
export interface ShortedLinksObjectType {
  originalUrl: string;
  uniqueId: string;
}

// Define the context type
interface ArrayContextType {
  shortLinks: ShortedLinksObjectType[];
  addToShortLinks: (item: ShortedLinksObjectType) => void;
  removeFromShortLinks: (uniqueId: string) => void;
  assignShortLinks: (array: ShortedLinksObjectType[]) => void
}

// Create the context with a default value
export const ShortLinksContext = createContext<ArrayContextType | undefined>(undefined);

// Create the provider component
export const ShortLinksContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [shortLinks, setShortLinks] = useState<ShortedLinksObjectType[]>([]);

  const assignShortLinks = (array: ShortedLinksObjectType[]) => {
    setShortLinks(array);
  }
  const addToShortLinks = (item: ShortedLinksObjectType) => {
    setShortLinks([...shortLinks, item]);
  };

  const removeFromShortLinks = (uniqueId: string) => {
    setShortLinks(shortLinks.filter(item => item.uniqueId !== uniqueId));
  };

  return (
    <ShortLinksContext.Provider value={{ shortLinks, addToShortLinks, removeFromShortLinks, assignShortLinks }}>
      {children}
    </ShortLinksContext.Provider>
  );
};
