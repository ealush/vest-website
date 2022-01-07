
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','79a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','72d'),
    routes: [
      {
        path: '/docs/api_reference',
        component: ComponentCreator('/docs/api_reference','51f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/concepts',
        component: ComponentCreator('/docs/concepts','fb5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/',
        component: ComponentCreator('/docs/enforce/','68f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/builtin-enforce-plugins/compound_rules',
        component: ComponentCreator('/docs/enforce/builtin-enforce-plugins/compound_rules','cb7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/builtin-enforce-plugins/schema_rules',
        component: ComponentCreator('/docs/enforce/builtin-enforce-plugins/schema_rules','7ad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/composing_enforce_rules',
        component: ComponentCreator('/docs/enforce/composing_enforce_rules','bae'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/consuming_external_rules',
        component: ComponentCreator('/docs/enforce/consuming_external_rules','853'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/creating_custom_rules',
        component: ComponentCreator('/docs/enforce/creating_custom_rules','a8d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/enforce/enforce_rules',
        component: ComponentCreator('/docs/enforce/enforce_rules','1f3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/external_resources',
        component: ComponentCreator('/docs/external_resources','f8a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/get_started',
        component: ComponentCreator('/docs/get_started','852'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/migration_guide',
        component: ComponentCreator('/docs/migration_guide','192'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/recipies/using_with_node',
        component: ComponentCreator('/docs/recipies/using_with_node','053'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/understanding_state',
        component: ComponentCreator('/docs/understanding_state','945'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/utilities/classnames',
        component: ComponentCreator('/docs/utilities/classnames','cde'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/utilities/promisify',
        component: ComponentCreator('/docs/utilities/promisify','bc7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/advanced_test_features/dynamic_tests',
        component: ComponentCreator('/docs/writing_tests/advanced_test_features/dynamic_tests','b1c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/advanced_test_features/grouping_tests',
        component: ComponentCreator('/docs/writing_tests/advanced_test_features/grouping_tests','504'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/advanced_test_features/test.memo',
        component: ComponentCreator('/docs/writing_tests/advanced_test_features/test.memo','eee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/async_tests',
        component: ComponentCreator('/docs/writing_tests/async_tests','0da'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/failing_with_a_custom_message',
        component: ComponentCreator('/docs/writing_tests/failing_with_a_custom_message','ac1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/using_the_test_function',
        component: ComponentCreator('/docs/writing_tests/using_the_test_function','b38'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_tests/warn_only_tests',
        component: ComponentCreator('/docs/writing_tests/warn_only_tests','8ef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/including_and_excluding/omitWhen',
        component: ComponentCreator('/docs/writing_your_suite/including_and_excluding/omitWhen','e19'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/including_and_excluding/skip_and_only',
        component: ComponentCreator('/docs/writing_your_suite/including_and_excluding/skip_and_only','653'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/including_and_excluding/skip_and_only_group',
        component: ComponentCreator('/docs/writing_your_suite/including_and_excluding/skip_and_only_group','ba6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/including_and_excluding/skipWhen',
        component: ComponentCreator('/docs/writing_your_suite/including_and_excluding/skipWhen','81e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/optional_fields',
        component: ComponentCreator('/docs/writing_your_suite/optional_fields','054'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/result_object',
        component: ComponentCreator('/docs/writing_your_suite/result_object','96f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/writing_your_suite/vests_suite',
        component: ComponentCreator('/docs/writing_your_suite/vests_suite','78c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
