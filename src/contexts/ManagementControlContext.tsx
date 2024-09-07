import { createContext, useState, ReactNode } from "react";

type ManagementControlProviderProps = {
  children: ReactNode;
};

type ManagementControlContextProps = {
  isManagementControlsVisible: boolean;
  onShowManagementControls: () => void;
  onHiddenManagementControls: () => void;
};

export const ManagementControlContext = createContext(
  {} as ManagementControlContextProps
);

export function ManagementControlProvider({
  children,
}: ManagementControlProviderProps) {
  const [isManagementControlsVisible, setIsManagementControlsVisible] =
    useState(false);

  const onShowManagementControls = () => setIsManagementControlsVisible(true);
  const onHiddenManagementControls = () =>
    setIsManagementControlsVisible(false);

  return (
    <ManagementControlContext.Provider
      value={{
        isManagementControlsVisible,
        onShowManagementControls,
        onHiddenManagementControls,
      }}
    >
      {children}
    </ManagementControlContext.Provider>
  );
}
