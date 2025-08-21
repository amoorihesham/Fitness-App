import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const ContentWrapper = ({ className, children }: { className?: string; children: ReactNode }) => {
  return <div className={cn('max-w-[1560px] mx-auto px-3 lg:px-0', className)}>{children}</div>;
};

export default ContentWrapper;
