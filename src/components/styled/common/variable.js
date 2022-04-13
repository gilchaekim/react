const deviceSizes = {
    mobile: "360px",
    tablet: "768px",
    laptop: "1024px",
};

const device = {
    mobile: `screen and (max-width: ${deviceSizes.mobile})`,
    tablet: `screen and (max-width: ${deviceSizes.tablet})`,
    laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

export {device, deviceSizes};