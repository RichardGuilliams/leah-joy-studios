'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode
} from 'react';

type ShareData = {
  title: string;
  description: string;
  img: string;
};

type ShareContextType = {
  shareData: ShareData | null;
  setShareData: React.Dispatch<
    React.SetStateAction<ShareData | null>
  >;
};

const ShareContext = createContext<ShareContextType | null>(null);

export function useShare() {
  const context = useContext(ShareContext);

  if (!context) {
    throw new Error(
      'useShare must be used inside ShareProvider'
    );
  }

  return context;
}

export function ShareProvider({
  children
}: {
  children: ReactNode;
}) {
  const [shareData, setShareData] =
    useState<ShareData | null>(null);

  return (
    <ShareContext.Provider
      value={{
        shareData,
        setShareData
      }}
    >
      {children}
    </ShareContext.Provider>
  );
}
