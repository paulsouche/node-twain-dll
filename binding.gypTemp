{
  'targets': [
    {
      'target_name': 'twainDll',
      'sources': [
        'src/twainDll.cpp',
      ],
      'include_dirs': [
        '<!(node -e "require(\'nan\')")'
      ],
      'conditions': [
        ['OS=="win"',
          {
            'sources': [
              'src/twainDll_win.cpp',
              'src/win/disphelper.c',
              'src/win/enumser.cpp',
            ],
            'msvs_settings': {
              'VCCLCompilerTool': {
                'ExceptionHandling': '2',
                'DisableSpecificWarnings': [ '4530', '4506' ],
              },
            },
          },
        ],
        ['OS!="win"',
          {
            'sources': [
              'src/twainDll_unix.cpp',
              'src/twainDll_poller.cpp',
            ],
          }
        ],
      ],
    },
  ],
}
