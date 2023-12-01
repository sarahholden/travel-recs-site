import { ReactNode } from 'react';

type PageProps = {
  children: ReactNode;
}

export default function Page({children}: PageProps) {
  return (
    <div>
      Page Wrapper
      {children}
    </div>
  )
}