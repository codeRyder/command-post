import { NodePlopAPI } from 'plop'
import { Answers } from 'inquirer'
import { spawn } from 'child_process'

export default function (plop: NodePlopAPI) {
  const addCoreProject = () => {
    return {
      type: 'addMany',
      templateFiles: '../nuxt3/',
      destination: '../dist',
      base: '/nuxt3',
      skipIfExists: true,
    }
  }

  const addDynamicFiles = () => {
    return {
      type: 'addMany',
      templateFiles: './templates/',
      destination: '../dist',
      base: '/templates',
      skipIfExists: true,
    }
  }

  plop.setActionType('npmInstall', function (answers, config, plop) {
    return new Promise((resolve, reject) => {
      const ls = spawn('npm', ['install'], {
        cwd: config.path,
        shell: true,
      })

      ls.stdout.pipe(process.stdout)

      ls.stderr.pipe(process.stderr)

      ls.on('close', (code: string) => {
        return resolve(code)
      })
    })
  })

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
        message:
          "\n  Select your app's base applications you want to include. \n ",
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
        message: '\n  Choose your preferred Nuxt.js Version. \n ',
        loop: false,
        when(answers) {
          return answers.appBase.indexOf('nuxt') !== -1
        },
        choices: [
          { type: 'separator' },
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
        default: 'storyblok',
        choices: (answers) => {
          const serviceOptions: Answers[] = [
            {
              name: 'Cloudnary - Image Service',
              value: 'cloudnary',
              short: 'Cloudnary',
            },
            {
              name: 'Auth0 - Authentication Service',
              value: 'auth0',
              short: 'Auth0',
            },
          ]
          if (answers.appBase.indexOf('nuxt') !== -1) {
            serviceOptions.push({
              name: 'Storyblok - Headless CMS',
              value: 'storyblok',
              short: 'Storyblok',
            })
          }

          return serviceOptions
        },
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
            short: 'Platform.sh',
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
        ],
      },
    ],
    actions: function (data) {
			console.log('SHow data',data);
			
      return [
        {
          type: 'addMany',
          templateFiles: './templates',
          destination: '../dist',
          base: 'templates',
          skipIfExists: true,
					data: data
        },
        {
          type: 'addMany',
          templateFiles: '../nuxt3/**/*',
          destination: '../dist',
          base: '../nuxt3',
          skipIfExists: true
        },
        { type: 'npmInstall' },
      ]
    },
  })

  const getStepHeader = (stepName: string) => `\n------ ${stepName} -------\n`

  const getProjectConfigSteps = () => {
    const configSteps = {}
    return configSteps
  }
}
