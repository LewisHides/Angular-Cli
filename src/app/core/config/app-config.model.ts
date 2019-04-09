export interface IAppConfig {
    env: string;
    baseUrl: string;
    api: {
        assetUrl: string;
        baseUrl: string;
        apiUrl: string;
        public: {
            key: string;
        };
    };
    addressbook: {
        search: {
            type: string;
        };
    };
    supportEmail: string;
    brands: {
        domain: {
            'ingot-web-staging.s3-website.eu-west-2.amazonaws.com'?: {
                title: string;
                name: string;
                logo: string;
                theme: {
                    css: string;
                };
            };
            party: {
                id: number
            };
        };
    };
    default: {
        title: string;
        logo: string;
        name: string;
    };
}