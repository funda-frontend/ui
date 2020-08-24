module.exports = {
    stories: ['../src/**/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-notes/register',
        '@storybook/addon-storysource',
        '@storybook/addon-actions'
    ]
};
