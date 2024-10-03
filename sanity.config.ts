import schema from '@/sanity/schemas'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'


const config = defineConfig({

    projectId: 'q008mup4',

    dataset: "production",

    title: "Dreamer Website",

    apiVersion: "2024-09-29",

    basePath: "/admin",

    plugins: [
        deskTool(),
    ],

    schema:{ types: schema }

})

export default config