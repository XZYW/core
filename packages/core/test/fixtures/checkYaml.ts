import { checkYaml } from '../../src/common';

const fc = {
  Region: {
    Required: true,
    Type: [
      {
        List: {
          label: {
            Required: true,
            Type: ['String'],
          },
          value: {
            Required: true,
            Type: ['String'],
          },
        },
      },
    ],
  },
  Service: {
    Required: true,
    Type: [
      {
        Struct: {
          Name: {
            Required: true,
            Type: ['String'],
          },
          Log: {
            Required: true,
            Type: [
              {
                'Enum[简单配置/Simple configuration]': ['Auto'],
              },
              {
                'Struct[详细配置/Detailed configuration]': {
                  LogStore: {
                    Required: true,
                    Description: {
                      zh: 'loghub中的logstore名称',
                      en: 'Logstore name in loghub',
                    },
                    Type: ['String'],
                  },
                  Project: {
                    Required: true,
                    Description: {
                      zh: 'loghub中的project名称',
                      en: 'Project name in loghub',
                    },
                    Type: ['String'],
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
};

const input = {
  Region: [
    {
      label: 123,
      value: 'cn-hangzhou',
    },
  ],
  Service: {
    Name: 'ServerlessToolProject',
    Log: {
      LogStore: 'xx',
      Project: 'pp',
    },
  },
};

checkYaml(fc, input);
