import React, { useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextType>({
  isOpen: true,
  toggleSidebar: () => {},
});

export const SidebarContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen((prev) => !prev);
  }

  const contextValue: SidebarContextType = {
    isOpen,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={contextValue}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
