import { NodePlopAPI } from 'plop'

export default function (plop: NodePlopAPI) {
  // create your generators here
  plop.setGenerator('newProject', {
    description:
      'Create a new JvM NECKAR project by selecting desired frameworks, features and services.',
    prompts: [
      {
        type: 'input',
        name: 'appName',
        prefix: '\n\n',
      },
      {
        type: 'checkbox',
        name: 'appBase',
        choices: [
          {
            name: 'Nuxt.js',
            value: 'nuxt',
            short: 'Nuxt.js',
          },
          {
            name: 'Storybook',
            value: 'storybook',
            short: 'Storybook',
          },
        ],
      },
      {
        type: 'list',
        name: 'nuxtVersion',
        loop: false,
        when(answers) {
          return answers.appBase.indexOf('nuxt') !== -1
        },
        choices: [
          {
            name: 'Nuxt 2',
            value: '2',
            short: 'Nuxt 2',
          },
          {
            name: 'Nuxt 3 (experimental)',
            value: '3',
            short: 'Nuxt 3',
          },
        ],
      },
      {
        type: 'checkbox',
        name: 'services',
        choices: (answers) => [
          (answers): Record<string, string> => {
            return answers.appBase.indexOf('nuxt') !== -1
              ? {
                  name: 'Storyblok - Headless CMS',
                  value: 'storyblok',
                  short: 'Storyblok',
                }
              : {}
          },
          {
            name: 'Cloudnary - Image Service',
            value: 'cloudnary',
            short: 'Cloudnary',
          },
          {
            name: 'Auth0',
            value: 'auth0',
            short: 'Auth0',
          },
        ],
      },
      {
        type: 'list',
        name: 'hosting',
        choices: [
          {
            name: 'Google Firebase',
            value: 'firebase',
            short: 'Google Firebase',
          },
          {
            name: 'Platform.sh',
            value: 'platform-sh',
            short: '',
          },
        ],
      },
      {
        type: 'checkbox',
        name: 'addOns',
        choices: [
          {
            name: 'GSAP - Animation Library',
            value: 'gsap',
            short: 'GSAP',
          },
          {
            name: 'Platform.sh',
            value: 'platform-sh',
            short: '',
          },
        ],
      },

      // {
      //   type: 'input',
      //   name: 'projectTypeOther',
      //   when: (data: any): boolean => data.projectType == 'Other',
      //   message: 'Enter a unique and meaningful project type/name',
      // },
      // {
      //   type: 'confirm',
      //   name: 'isNuxt',
      //   message: 'Is your project a Nuxt.js app?',
      // },
      // {
      //   type: 'list',
      //   name: 'isStorybook',
      //   message: 'enable',
      //   loop: false,
      //   when: ({isNuxt}) =>  isNuxt,
      //   choices: [
      //     {
      //       name: 'Nuxt 2',
      //       value: '2',
      //       short: 'Nuxt 2',
      //     },
      //     {
      //       name: 'Nuxt 3 (experimental)',
      //       value: '3',
      //       short: 'Nuxt 3',
      //     },
      //   ],
      // },

      // // {
      // //   type: 'select',
      // //   name: 'framework',
      // //   message: 'Framework: Which Framework would you like to use?',
      // //   choices: [
      // //     {
      // //       name: 'Nuxt2 - Options API - Ground solid and combat approved setup for all usecases.',
      // //       value: 'nuxt2',
      // //       short: 'Nuxt2',
      // //     },
      // //     {
      // //       name: 'Nuxt3 (unstable) - Composition API - A bit experimental due many packages (e.g. nuxt/i18n) not stable for Nuxt3 by now.',
      // //       value: 'nuxt3',
      // //       short: 'Nuxt3',
      // //     },
      // //   ],
      // // },
    ], // array of inquirer prompts
    actions: [], // array of actions
  })
  const getStepHeader = (stepName: string) => `\n------ ${stepName} -------\n`

  const getProjectConfigSteps = () => {
    const configSteps = {}
    return configSteps
  }
}
