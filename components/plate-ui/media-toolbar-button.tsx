import React from 'react';
import { withRef } from '@udecode/cn';
import {
  type ImagePlugin,
  MediaEmbedPlugin,
  useMediaToolbarButton,
} from '@udecode/plate-media/react';

import { Icons } from '@/components/icons';

import { ToolbarButton } from './toolbar';

export const MediaToolbarButton = withRef<
  typeof ToolbarButton,
  {
    nodeType?: typeof ImagePlugin.key | typeof MediaEmbedPlugin.key;
  }
>(({ nodeType, ...rest }, ref) => {
  const { props } = useMediaToolbarButton({ nodeType });

  // Conditionally render the correct icon based on nodeType
  const IconComponent = nodeType === MediaEmbedPlugin.key ? Icons.youtube : Icons.image;

  return (
    <ToolbarButton ref={ref} {...props} {...rest}>
      <IconComponent />
    </ToolbarButton>
  );
});
