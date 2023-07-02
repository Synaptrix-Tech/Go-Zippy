import React, { PropsWithChildren, RefObject } from 'react';
import BottomSheetLib, { BottomSheetProps } from '@gorhom/bottom-sheet';

type Props = BottomSheetProps & {
  bottomSheetRef: RefObject<BottomSheetLib>;
};

export const BottomSheet = ({
  bottomSheetRef,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <BottomSheetLib ref={bottomSheetRef} {...rest}>
      {children}
    </BottomSheetLib>
  );
};
