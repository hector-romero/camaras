/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_ZONEMINDER_HOST: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
