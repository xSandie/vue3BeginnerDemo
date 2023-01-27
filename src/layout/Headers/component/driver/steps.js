export const steps = (i18n) => {
    return [
    {
      element: '#guide',
      popover: {
        title: i18n('driver.guideBtn'),
        description: 'Body of the popover',
        position: 'left'
      }
    },{
        element: '#hamburger',
        popover: {
          title: i18n('driver.hamburgerBtn'),
          description: 'Body of the popover',
          position: 'bottom'
        }
      },{
        element: '#fullscreen',
        popover: {
          title: 'Title on Popover',
          description: 'Body of the popover',
          position: 'left'
        }
      }
]
}