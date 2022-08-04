interface ImportMetaEnv {
  readonly VITE_COMICO_SERVER: string
  readonly VITE_COMICO_GRAPHQL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
