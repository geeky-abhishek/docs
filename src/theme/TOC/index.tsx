import { useLocation } from '@docusaurus/router';
import OriginalTOC from '@theme-original/TOC';
import EditThisPage from '@theme/EditThisPage';
import React, { useEffect, useState } from 'react';
import { PrismicRichText } from '@prismicio/react';

export default function TOC({ toc, editUrl, ...props }) {
 
  const location = useLocation();

  const isEmpty = toc.length <= 0;



  if (isEmpty) return null;

  return (
    <div className="toc-wrapper">
      <h2>Contents</h2>
      <OriginalTOC toc={toc} {...props} />
      <EditThisPage editUrl={editUrl} />

    
    </div>
  );
}
