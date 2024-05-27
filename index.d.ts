// IDK if everything will be export declared here initially, 
// but a lot of declarations will gradually appear.
export * from [
    './compiled/device_management.js',
    './compiled/device_policy.js',
    './compiled/extension_policy.js',
    './compiled/install_attributes.js',
    './compiled/signing_key.js'
];
/**
 * An array of Chrome(OS) release channels
 */
export declare const Channel: typeof import('./compiled/device_management.js').Channel;
/**
 * Anonymous variable representing a Crostini application
 */
export declare const CrostiniApp: typeof import('./compiled/device_management.js').CrostiniApp;
/**
 * The Crostini application type
 */
export declare const CrostiniAppType: typeof import('./compiled/device_management.js').CrostiniAppType;
/**
 * Anonymous variable representing signed data
 */
export declare const SignedData: typeof import('./compiled/device_management.js').SignedData;
/**
 * Anonymous variable representing a Chrome(OS) user with sync on
 */
export declare const ChromeSignedInUser: (
    typeof import('./compiled/device_management.js').ChromeSignedInUser
);
/**
 * Anonymous variable representing a Chrome(OS) user's profile info
 */
export declare const ChromeUserProfileInfo: (
    typeof import('./compiled/device_management.js').ChromeUserProfileInfo
);