import React from 'react';

if (process.env.NODE_ENV === 'development') {
    console.log("**********");
    const whyDidYouRender = require('@welldone-software/why-did-you-render');
    whyDidYouRender(React, {
        trackAllPureComponents: true,
        trackHooks: true,
        logOwnerReasons: true,
        logOnDifferentValues: true,
        collapseGroups: true
    });
}