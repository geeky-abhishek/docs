module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: ['intro/index'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['getting_started/getting_started'],
    },
    {
      type: 'category',
      label: 'Developer Guide',
      collapsed: false,
      items: [
        'developer_guide/intro',
        'developer_guide/architecture',
        {
          type: 'category',
          label: 'Components',
          collapsed: false,
          items: [
            'developer_guide/components/xmessage',
            'developer_guide/components/adapter',
            'developer_guide/components/uci-apis',
            'developer_guide/components/inbound',
            'developer_guide/components/orchestrator',
            'developer_guide/components/transformer',
            'developer_guide/components/outbound',
            'developer_guide/components/user-management-service',
            'developer_guide/components/pdf_parser',
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          collapsed: false,
          items: [
            'developer_guide/guides/creating_working_bot',
            'developer_guide/guides/creating_user_management_service',
            'developer_guide/guides/creating_new_adapter',
            'developer_guide/guides/creating_new_transformer',
            {
              type: 'category',
              label: 'Channels',
              collapsed: false,
              items: [
                'developer_guide/guides/channels/supported_channels_providers',
                'developer_guide/guides/channels/configuring_discord_bot',
                'developer_guide/guides/channels/configuring_pwa_bot',
                'developer_guide/guides/channels/configuring_telegram_bot',
                'developer_guide/guides/channels/configuring_whatsapp_gupshup',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      collapsed: false,
      items: ['user_guide/intro'],
    },
  ],
};
