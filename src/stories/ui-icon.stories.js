import UiIcon from '@/components/ui-icon.vue';

const iconsList = [
    'addHouse',
    'address',
    'alert',
    'arrowBackwards',
    'arrowDownCircle',
    'arrowDown',
    'arrowDownward',
    'arrowForward',
    'arrowLeftCircle',
    'arrowLeft',
    'arrowRightCircle',
    'arrowRight',
    'arrowUpCircle',
    'arrowUp',
    'arrowUpwards',
    'avatar',
    'bed',
    'bike',
    'boxStack',
    'building',
    'bulb',
    'bus',
    'cadastralMap',
    'calculator',
    'calendar',
    'car',
    'certificate',
    'checkBold',
    'check',
    'checklist',
    'clock',
    'closeCircle',
    'close',
    'comment',
    'complex',
    'contentPlatform',
    'creditcard',
    'crown',
    'daycare',
    'dice',
    'document',
    'door',
    'download',
    'emoExcited',
    'emoHappy',
    'emoSad',
    'energy',
    'error',
    'exit',
    'external',
    'facebook',
    'ferry',
    'filter',
    'filters',
    'floorplan',
    'forSale',
    'fullscreenExit',
    'fullscreen',
    'garage',
    'heartBorder',
    'heartFilledBorder',
    'heartFilled',
    'heartSemiFilled',
    'heart',
    'houseImag',
    'house',
    'images',
    'info',
    'infospot',
    'instagram',
    'investor',
    'key',
    'link',
    'linkedin',
    'list',
    'locationPin',
    'location',
    'lock',
    'logoColorNvm',
    'logoColorVastgoedPro',
    'logoColorVbo',
    'logoColorVgm',
    'logoNvm',
    'logoVastgoedPro',
    'logoVbo',
    'logoVgm',
    'magazine',
    'mail',
    'makelaar',
    'megafono',
    'menu',
    'metro',
    'minusCircleInverted',
    'minus',
    'mortgage',
    'move',
    'navigate',
    'newHouse',
    'newspaper',
    'notFoundError',
    'notFoundHouse',
    'notFoundPage',
    'notFoundProperty',
    'notFound',
    'notes',
    'office',
    'online',
    'openHousePackage',
    'overview',
    'pencil',
    'phone',
    'photo360',
    'piggy',
    'pin',
    'pinterest',
    'plus',
    'printer',
    'promolabel',
    'refresh',
    'remove',
    'robot',
    'school',
    'search',
    'share',
    'shield',
    'smartphone',
    'sofa',
    'sold',
    'sort',
    'stairs',
    'starFilled',
    'star',
    'statsAverage',
    'statsBad',
    'statsGood',
    'success',
    'sun',
    'supermarket',
    'surface',
    'target',
    'thumbsDown',
    'thumbsUp',
    'tram',
    'trash',
    'tv',
    'twitter',
    'userMenu',
    'user',
    'users',
    'video',
    'vr',
    'walk',
    'warning',
    'water',
    'whatsapp',
    'youtube',
];

export default {
    title: 'Informational/Icon',
    component: UiIcon,
    argTypes: {
        icon: {
            control: {
                type: 'select',
                options: iconsList,
            },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { UiIcon },
    template: '<ui-icon :icon="icon"></ui-icon>',
});

export const Icon = Template.bind({});
Icon.args = {
    icon: 'pin',
};
