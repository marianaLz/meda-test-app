import React, { createContext, useState, ReactNode } from 'react';

export type Employee = {
  name: string;
  username: string;
  password: string;
};

export interface ContextProps {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  loggedInUser: string;
  setLoggedInUser: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<ContextProps>({
  employees: [],
  setEmployees: () => {},
  loggedInUser: '',
  setLoggedInUser: () => {},
});

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<string>('');

  return (
    <Context.Provider
      value={{ employees, setEmployees, loggedInUser, setLoggedInUser }}
    >
      {children}
    </Context.Provider>
  );
};
