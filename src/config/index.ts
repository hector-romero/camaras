interface AppConfig {
    ZONEMINDER_HOST: string
}

export const config: AppConfig = {
    ZONEMINDER_HOST: import.meta.env.VITE_ZONEMINDER_HOST,
};
